var makeStack = function() {
  var stack = Object.create(stackMethods);
  stack.stackSize = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.stackSize++;
    this.storage[this.stackSize] = value;
  },
  pop: function(){
    if(this.stackSize){
      var result = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      this.stackSize--;
      return result;
    }
  },
  size: function(){
    return this.stackSize;
  }
};
