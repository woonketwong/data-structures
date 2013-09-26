var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push =function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};
Stack.prototype.pop = function(){
  if(this.stackSize){
    var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return result;
  }
};
Stack.prototype.size = function(){
  return this.stackSize;
};

