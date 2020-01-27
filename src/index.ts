import Sorter from './Sorter';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const charactersCollection = new CharactersCollection('XaayB');
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);

numberSorter.sort();
stringSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
