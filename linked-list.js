/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val)
    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val)
    if(!this.head){
      this.head = node
    }
    else{
      node.next = this.head;
      this.head = node;
    }
    if(this.length === 0){
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Invalid index.')
    }
    return this.getIdx(idx.val)

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx < 0 || idx >= this.length){
      throw new Error('Invalid index.')
    }
    let i = this.getIdx(idx)
    i.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0 || idx > this.length){
      throw new Error('Invalid index.')
    }
    if(idx === 0){
      return this.unshift(val);
    }
    if(idx === this.length){
      return this.push(val);
    }
    let i = this.getIdx(idx - 1)
    let node = new Node(val);
    node.next = i.next
    i.next = node
    this.length += 1

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || idx > this.length){
      throw new Error('Invalid index.')
    }

    let i = this.getIdx(idx-1)
    if(idx === this.length -1){
      let val = i.next.val;
      this.tail = i;
      i.next = null;
      this.length -= 1;
      return val;
    }

    if(idx === 0){
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if(this.length < 2){
        this.tail = this.head
      }
      return val;
    }

    let val = i.next.val;
    i.next = i.next.next;
    this.length -= 1;
    return val;

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0
    }
    let total = 0;
    let i = this.head;
    while(i){
      total += i.val;
      i = i.next;
    }
    
  }

  getIdx(idx){
    let i = this.head;
    let count = 0;
    while(i !== null && count !== idx){
      count += 1;
      i = i.next;
    }
    return i;
  }
}

module.exports = LinkedList;
