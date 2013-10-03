describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("should only contain undefined before adding a node", function(){
    expect(tree.contains(undefined)).toBe(true);
    expect(tree.contains(null)).toBe(false);
    expect(tree.contains(0)).toBe(false);
  });

  it("should contain a value after adding a node with that value", function(){
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  it("should add a node to another node's child", function(){
    var root = tree;
    tree.addChild(5);
    tree = tree.children[0];
    tree.addChild(6);
    expect(root.contains(6)).toBe(true);
    expect(root.contains(5)).toBe(true);
  });

  it("should contain all childrens' values on a single node", function(){
    var root = tree;
    tree.addChild(5);
    tree.addChild('test string');
    tree.addChild(true);
    //tree.addChild([7,8,9])
    expect(root.contains(true)).toBe(true);
    expect(root.contains(5)).toBe(true);
    expect(root.contains('test string')).toBe(true);
    //expect(root.contains([7,8,9])).toBe(true);
  });


  it("should contain all childrens' values on multiple levels of nodes", function(){
    var root = tree;
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree = root.children[0];
    tree.addChild(11);
    tree.addChild(12);
    tree = root.children[1];
    tree.addChild(21);
    tree.addChild(22);
    tree = root.children[2];
    tree.addChild(31);
    tree.addChild(32);
    tree.addChild(33);

    expect(root.contains(1)).toBe(true);
    expect(root.contains(2)).toBe(true);
    expect(root.contains(3)).toBe(true);
    expect(root.contains(11)).toBe(true);
    expect(root.contains(12)).toBe(true);
    expect(root.contains(21)).toBe(true);
    expect(root.contains(22)).toBe(true);
    expect(root.contains(31)).toBe(true);
    expect(root.contains(32)).toBe(true);
    expect(root.contains(33)).toBe(true);
    expect(root.contains(undefined)).toBe(true);
  });

  it("should add nodes in a tree structure", function(){
    var root = tree;
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree = root.children[0];
    tree.addChild(11);
    tree.addChild(12);
    tree = root.children[1];
    tree.addChild(21);
    tree.addChild(22);
    tree = root.children[2];
    tree.addChild(31);
    tree.addChild(32);
    tree.addChild(33);

    tree = root.children[2];
    expect(tree.contains(1)).toBe(false);
    expect(tree.contains(11)).toBe(false);
    expect(tree.contains(22)).toBe(false);
    expect(tree.contains(31)).toBe(true);

    tree = tree.children[0];
    expect(tree.contains(1)).toBe(false);
    expect(tree.contains(22)).toBe(false);
    expect(tree.contains(31)).toBe(true);

  });

  it("should remove node from the tree", function(){
    var root = tree;
    root.addChild(1);
    root.addChild(2);
    root.addChild(3);
    var currentNode = root.children[0];
    currentNode.removeFromParent();
    expect(root.contains(1)).toBe(false);
    expect(root.contains(2)).toBe(true);
    expect(root.contains(3)).toBe(true);
    expect(currentNode.contains(1)).toBe(true);
  });

  it("should remove subtree from the tree", function(){
    var root = tree;
    tree.addChild(1);
    tree.addChild(2);
    tree = root.children[0];
    tree.addChild(11);
    tree.addChild(12);
    tree = root.children[1];
    tree.addChild(21);
    tree = root.children[0];
    tree.removeFromParent();
    expect(root.contains(1)).toBe(false);
    expect(root.contains(2)).toBe(true);
    expect(root.contains(21)).toBe(true);

    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(11)).toBe(true);
    expect(tree.contains(12)).toBe(true);
  });
});


