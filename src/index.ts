import Sorter from './Sorter';
import LinkedList from './LinkedList';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const charactersCollection = new CharactersCollection('XaayB');
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);

linkedList.sort();
numbersCollection.sort();
charactersCollection.sort();

linkedList.print();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
