class SinglyLinkedListNode<T> {
  public value: T = null;
  public next: any = null;
  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedListNode<T> {
  public value: T = null;
  public next: any = null;
  public prev: any = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private head: any;
  private tail: any;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  appendNode(value: T) {
    const newNode = new SinglyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prependNode(value: T) {
    const newNode = new SinglyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  getLInkedListLength() {
    return this.length;
  }
}

export class DoublyLinkedList<T> {
  private head: any;
  private tail: any;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  appendNode(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prependNode(value: T) {
    const newNode = new DoublyLinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
  }
  
  getLInkedListLength() {
    return this.length;
  }
}
