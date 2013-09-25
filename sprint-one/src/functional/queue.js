var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    for(var i = size; i > 0; i--){
      if(storage.hasOwnProperty(i)){
        storage[i + 1] = storage[i];
      }
    }
    size++;
    storage[1] = value;
  };

  instance.dequeue = function(){
    if(size){
      var result = storage[size];
      delete storage[size];
      size--;
      return result;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
