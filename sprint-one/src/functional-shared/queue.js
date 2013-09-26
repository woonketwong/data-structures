var makeQueue = function(){
  var instance = {
    storage: {},
    queueTail: 0,
    queueHead: 0
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.queueTail] = value;
    this.queueTail++;
  },
  dequeue: function(){
    if(this.size()){
      var result = this.storage[this.queueHead];
      this.queueHead++;
      return result;
    }
  },
  size: function(){
    return this.queueTail - this.queueHead;
  }
};

