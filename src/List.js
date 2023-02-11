class List {
  constructor() {
    this.items = [];
  }
  add(value) {
    if (value) this.items.push(value);
  }
  list() {
    return this.items;
  }
  listInOrder() {
    return this.items.sort();
  }
}

export default List;
