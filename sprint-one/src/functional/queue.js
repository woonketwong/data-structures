var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var queueTail = 0;
  var queueHead = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[queueTail] = value;
    queueTail++;
  };

  instance.dequeue = function(){
    if(instance.size()){
      var result = storage[queueHead];
      queueHead++;
      return result;
    }
  };

  instance.size = function(){
    return queueTail - queueHead;
  };

  return instance;
};
