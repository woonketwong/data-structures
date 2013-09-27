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

  // increment storageOccupancy if _storage[i] is an empty storage slot
  !bucket.length && this._storageOccupancy++;

  bucket.push([k,v]);
  this._storage.set(i, bucket);

  if(this._storageOccupancy / this._limit >= 0.75){
    // resize
    this.resizeHashTable();
  }
};

HashTable.prototype.resizeHashTable = function(){
  this._limit *= 2;
  this._storageOccupancy = 0;
  var newStorage = makeLimitedArray(this._limit);
  var limit = this._limit;

  this._storage.each(function(bucket, storageIndex, storage){
    _.each(bucket, function(element, bucketIndex, bucket){
      var i = getIndexBelowMaxForKey(element[0], limit);
      var newBucket = newStorage.get(i) || [];
      newBucket.length && this._storageOccupancy++;
      newBucket.push([element[0], element[1]]);
      newStorage.set(i, newBucket);
    });
  });

  this._storage = newStorage;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var returnVal = undefined;
  _.each(bucket, function(element, index, arr){
    // Every element is an array storing 2 sub-elements.
    // The key is the first sub-element.
    // The value we want to retrieve is the second sub-element.
    if(element[0] === k){
      returnVal = element[1];
    }
  });
  return returnVal;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  _.each(bucket, function(element, index, arr){
    if(element[0] === k){
      // Use Array.splice twice to remove element from the bucket
      bucket = bucket.splice(0,index).concat(bucket.splice(index+1));
    }
  });
  this._storage.set(i, bucket);
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
