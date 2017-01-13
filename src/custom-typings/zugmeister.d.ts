declare namespace Zugmeister {

  export interface Vehicle {
    id: number;
    type: string;
    brand: string;
    colors: string[];
    img: string;
  }

  export class TrafficMeister {
    fetchData(cb: (error?: string, data?: Vehicle[]) => void);
  }

}

declare module 'zugmeister' {
  export default Zugmeister.TrafficMeister;
}
