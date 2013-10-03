var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(value){
  if(!this.contains(value)){
    this._storage[value] = true;
  }
};

setPrototype.contains = function(target){
  return this._storage.hasOwnProperty(target);
};

setPrototype.remove = function(value){
  if(this.contains(value)){
    delete this._storage[value];
  }
};
