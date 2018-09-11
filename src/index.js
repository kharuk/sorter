
class Sorter {
  constructor() {
    this.originalArray = [];
    this.compare = (a,b) => a - b;
  }

  add(element) {
    this.originalArray.push(element);
  }

  at(index) {
     return this.originalArray[index];
  }

  get length() {
    return this.originalArray.length;
  }

  toArray() {
      return this.originalArray;//valueOf
  }

  sort(indices) {
      let arrayForSorting = [];
      if (indices.length > 1){
          for (let i = 0; i < indices.length; i++){
              arrayForSorting.push(this.originalArray[indices[i]]);
          }
          arrayForSorting.sort(this.compare);
          indices.sort((a,b) => a - b);
          for (let i = 0; i < indices.length; i++){
              this.originalArray[indices[i]] = arrayForSorting[i];
          }
      }
  }

  setComparator(compareFunction) {
    return this.compare = compareFunction;
  }
}

module.exports = Sorter;