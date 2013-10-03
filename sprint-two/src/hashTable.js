var HashTable = function(){
  this._limit = 8;
  this._storageOccupancy = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log(i);

  var bucket = this._storage.get(i) || [];

  var keyFound = false;

  _.each(bucket, function(bucketItem, bucketIndex, bucket){
    if (bucketItem[0] === k){
      bucketItem[1] = v;
      keyFound = true;
    }
  })

  if(!keyFound){
    bucket.push([k,v]);
    this._storageOccupancy++;
  }

  this._storage.set(i, bucket);

  if(this._storageOccupancy / this._limit >= 0.75){
    // resize
    this.resizeHashTable(2);
  }
};

HashTable.prototype.resizeHashTable = function(resizeFactor){
  this._limit *= resizeFactor;
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(this._limit);

  // var boundInsert = function(k, v){
  //   var fn = this;
  //   var context = this;
  //   return function(){
  //     fn.call(context, k, v);
  //   }
  // };

  // var boundInsert = HashTable.prototype.insert.bind(this);
  var that = this;
  oldStorage.each(function(bucket, storageIndex, storage){
    if (bucket !== undefined){
      for(var i = 0; i < bucket.length; i++){
        that.insert(bucket[i][0], bucket[i][1]);
        // boundInsert(bucket[i][0], bucket[i][1]);
      };
    }
  });

  // var newLimit = this._limit * resizeFactor;
  // var newStorage = makeLimitedArray(newLimit);
  // var newStorageOccupancy = 0;

  // this._storage.each(function(bucket, storageIndex, storage){
  //   _.each(bucket, function(bucketItem, bucketIndex, bucket){
  //     var i = getIndexBelowMaxForKey(bucketItem[0], newLimit);
  //     var newBucket = newStorage.get(i) || [];
  //     !newBucket.length && newStorageOccupancy++;
  //     newBucket.push([bucketItem[0], bucketItem[1]]);
  //     newStorage.set(i, newBucket);
  //   });
  // });
  // this._limit = newLimit;
  // this._storage = newStorage;
  // this._storageOccupancy = newStorageOccupancy;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var returnVal = undefined;
  _.each(bucket, function(bucketItem, index, arr){
    // Every bucketItem is an array storing 2 elements.
    // The key is the first element.
    // The value we want to retrieve is the second element.
    if(bucketItem[0] === k){
      returnVal = bucketItem[1];
    }
  });
  return returnVal;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) || [];

  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      var removedVal = bucket.splice(j,1);
      this._storageOccupancy--;
      break;
    }
  }

  if(this._limit > 8 && this._storageOccupancy / this._limit <= 0.25){
    // resize
    this.resizeHashTable(1/2);
  }
  return removedVal;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

//var makeLimitedArray = function(limit){
//var getIndexBelowMaxForKey = function(str, max){


  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };
