// imagine that it's an object
export class Color {
  public name: string;

  public value: string;

  public static create(data: string): Color {
    const color = new Color();
    color.name = data;
    color.value = data;

    return color;
  }
}
