export class Mineral {
  id: number;
  collected_in: string = '';
  type: string = '';
  weight_in_grams: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }  
}