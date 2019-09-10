import {Mineral} from './mineral';

describe('Mineral', () => {
  it('should create an instance', () => {
    expect(new Mineral()).toBeTruthy();
  });
  
  it('should accept values in the constructor', () => {
    let mineral = new Mineral({
      id: 'hello',
      type: '',
      collected_in: '',
      weight_in_grams: '',
    });
    expect(mineral.id).toEqual('hello');
    expect(mineral.type).toEqual('');
    expect(mineral.collected_in).toEqual('');
    expect(mineral.weight_in_grams).toEqual('');
  });
});
