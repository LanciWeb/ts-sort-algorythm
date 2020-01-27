import { Sortable } from './Sorter';
class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  public compare = (leftIndex: number, rightIndex: number): boolean =>
    this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();

  public swap = (leftIndex: number, rightIndex: number): void => {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  };
}

export default CharactersCollection;
