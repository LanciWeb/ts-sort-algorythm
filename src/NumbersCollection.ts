import { Sortable } from './Sorter';

class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  public compare = (leftIndex: number, rightIndex: number): boolean =>
    this.data[leftIndex] > this.data[rightIndex];

  public swap = (leftIndex: number, rightIndex: number): void => {
    const prevLeft = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = prevLeft;
  };
}
export default NumbersCollection;
