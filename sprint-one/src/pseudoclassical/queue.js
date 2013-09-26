var Queue = function() {
  this.storage = {};
  this.queueTail = 0;
  this.queueHead = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.queueTail] = value;
  this.queueTail++;
};
Queue.prototype.dequeue = function(){
  if(this.size()){
    var result = this.storage[this.queueHead];
    this.queueHead++;
    return result;
  }
};
Queue.prototype.size = function(){
  return this.queueTail - this.queueHead;
};