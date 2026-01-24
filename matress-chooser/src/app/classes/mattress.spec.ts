import { Mattress } from './mattress';

describe('Mattress', () => {
  it('should create an instance', () => {
    expect(new Mattress("","",[""],-1)).toBeTruthy();
  });
});
