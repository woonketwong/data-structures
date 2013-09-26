// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    
    if(list.tail){
      list.tail.next = newNode;
    }
    list.tail = newNode;

    if(!list.head){
      list.head = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head){
      var headValue = list.head.value;
      list.head = list.head.next;
      return headValue;
    }
  };

  list.contains = function(target){
    var currentNode = list.head;

    while(currentNode){
      if(currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
