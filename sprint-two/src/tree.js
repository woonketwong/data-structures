var makeTree = function(value){
  var newTree = {
    value: value,
    children: null,
    parent: null
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

  node.parent = this;

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

treeMethods.removeFromParent = function(){
  if (this.parent){
    var parentChildren = this.parent.children;
    for(var i = 0; i < parentChildren.length; i++){
      if (this === parentChildren[i]){
        this.parent.children = parentChildren.slice(0,i).concat(parentChildren.slice(i+1));
        break;
      }
    }
  }
  
  this.parent = null;
};
