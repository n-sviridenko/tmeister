import { Observable } from 'rxjs';

export abstract class AbstractLoadable<T> {
  public data: T;

  public error: any;

  public loading: boolean = false;

  public loaded: boolean = false;

  public load() {
    this.error = null;
    this.loaded = false;
    this.loading = true;

    Observable.of(null)
      .mergeMap(() => this.getDataSource())
      .finally(() => {
        this.loading = false;
      })
      .subscribe(
        (data: T) => {
          this.data = data;
          this.loaded = true;
        },
        (error: any) => {
          this.error = error;
        }
      )
    ;
  }

  protected abstract getDataSource(): Observable<T>;
}
