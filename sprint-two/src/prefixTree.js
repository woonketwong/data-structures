// Write a prefixTree that can handle autocomplete for T9-style texting.
var makePrefixTree = function(){
  var prefixTree = {};
  _.extend(prefixTree, prefixTreeMethod);
  prefixTree.currentNode = prefixTree.makeNode;
  return prefixTree;
}

var prefixTreeMethod = {;
  containsCheckedOnce = false;
  var addChild = function(stringVal){
	var currentChar = stringVal.length && stringVal.char(0);
	var checkedVal = containsCheckedOnce? checkedVal 
	                   : contains(stringVal);
	stringVal = stringVal.slice(1);
	if (!checkedVal){
	  node.next.push(currentChar);
	  if (stringVal.length == 0){
	  	node.valid = true;
	  	// reset value
	  	prefixTreeMethod.containsChecked = false;
	  }
	  else {
	  	addChild(stringVal);
	  }
	}
  }

  var contains = function(target, result = false){
  	// if the target is not empty
  	if (target){
  	  // check current node val
  	  if (target[0] === currentNode.charVal){
  	  	// check if it is the last word
  	  	if (target.length === 1){
  	  		// last word. Check if it is a valid char
  	  		if (node.valid === true){
  	  		  // A valid character is found!
  	  		  return true;
  	  		} else {
 			  // Not found. Not a valid character
  	  		  return true;
  	  		}
  	  	} else {
  	  	// it is not a last word, go deeper to its child


  	  	}
  	  }
  	  // else check if this node has no child at all
  	  if (currentNode.next){
  	  	return;
  	  } else {
  	  	for (var i = 0; i < currentNode.next.length; i++){

  	  	}
  	  }

      if (target[0] == )
  	  // check if it is a last character
  	  if (target.length == 1){

  	  }
  	}

  }

  var makeNode = function(charVal){
    var node = {};
	node.charVal = charVal;
	node.next = null;
	node.valid = false;

	return node;
  }
}

