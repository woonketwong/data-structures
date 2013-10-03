// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    
    if(list.tail){
      list.tail.next = newNode;
      newNode.previous = list.tail;
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
      if(list.head){
        // Don't attempt to set property 'previous' if list was just emptied
        list.head.previous = null;
      } else {
        list.tail = null;
      }
      return headValue;
    }
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    
    if(list.head){
      list.head.previous = newNode;
      newNode.next = list.head;
    }
    list.head = newNode;

    if(!list.tail){
      list.tail = newNode;
    }
  };

  list.removeTail = function(){
    if(list.tail){
      var tailValue = list.tail.value;
      list.tail = list.tail.previous;
        if(list.tail){
          // Don't attempt to set property 'next' if list was just emptied
          list.tail.next = null;
        } else {
          list.head = null;
        }
      return tailValue;
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
  node.previous = null;

  return node;
};
