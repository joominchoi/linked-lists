/* eslint-disable import/extensions */
import LinkedList from './linkedList.js';

const linkedList = new LinkedList();

linkedList.append('one');
linkedList.append('two');
linkedList.append('three');
linkedList.append('four');
linkedList.prepend('zero');

linkedList.print();
linkedList.size();
linkedList.head();
linkedList.tail();
linkedList.at(4);
linkedList.pop();
linkedList.size();
linkedList.head();
linkedList.tail();
linkedList.at(4);
linkedList.pop();
linkedList.size();
linkedList.head();
linkedList.tail();
linkedList.at(-1);
linkedList.contains(1);
linkedList.print();
linkedList.find('two');
linkedList.toString();
linkedList.insertAt(3, 0);
linkedList.print();
