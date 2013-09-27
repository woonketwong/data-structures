var makeTree = function(value){
  var newTree = {
    value: value,
    children: undefined
  };

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = makeTree(value);
  if (!this.children){
    this.children = [];
  } 

  this.children.push(node);
  
};

treeMethods.contains = function(target){
  
  // this function can't be used if target is an Array or Object

  if (this.value === target){
    return true;
  }

  var result = false;
  
  if (this.children){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].contains(target)){
        result = true;
        i = this.children[i].length;
      }
    }
  }

  return result;
};
