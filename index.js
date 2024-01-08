/* eslint-disable import/extensions */
import LinkedList from './linkedList.js';

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append('two');
linkedList.append(3);
linkedList.append('four');
linkedList.prepend('zero');

linkedList.print();
linkedList.size();
linkedList.head();
linkedList.tail();
