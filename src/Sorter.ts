export interface Sortable {
  length: number;
  swap: (l: number, r: number) => void;
  compare: (l: number, r: number) => boolean;
}

abstract class Sorter {
  abstract length: number;
  abstract swap: (l: number, r: number) => void;
  abstract compare: (l: number, r: number) => boolean;

  protected sort = (): void => {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) this.swap(j, j + 1);
      }
    }
  };
}

export default Sorter;
