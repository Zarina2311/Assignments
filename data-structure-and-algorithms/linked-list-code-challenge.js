/*
Create a class instance to represent a node.
The node should have two properties, ‘data’ and ‘next’. Accept both of these as arguments to the ‘Node’ 
constructor, then assign them to the instance as properties, then default it's value to be ‘null’. 

Const n = new Node(‘There’);
N.data // ‘Hi’
N.next // null
Const n2 = new Node(‘Hi’, n);
N.next // return n
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

const n = new Node("There");
n.data; // 'Hi'
n.next; // null

const n2 = new Node("Hi", n);
n.next; // return n
