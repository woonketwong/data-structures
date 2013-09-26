var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.queueTail = 0;
  queue.queueHead = 0;
  return queue;
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

