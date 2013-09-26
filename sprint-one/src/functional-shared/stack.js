var makeStack = function() {
  var instance = {
    stackSize: 0,
    storage: {}
  };
  _.extend(instance, stackMethods);
  return instance;
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

