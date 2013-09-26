describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should contain node after it is added", function(){
    linkedList.addToTail('test string');
    expect(linkedList.contains('test string')).toEqual(true);
  });
  
  it("should no longer contain node after it is added and removed", function(){
    linkedList.addToTail('test string');
    linkedList.removeHead('test string');
    expect(linkedList.contains('test string')).toEqual(false);
  });

  it("should still contain first node after adding another node", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.contains(1)).toEqual(true);
  });

  it("should return the value of node after it is removed", function(){
    linkedList.addToTail('test string');
    expect(linkedList.removeHead()).toEqual('test string');
  })

  it("should contain only second node after adding 2 nodes and removing one of them", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.contains(1)).toEqual(false);
    expect(linkedList.contains(2)).toEqual(true);
  });

  it("should have remove the first nodes added to it", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.contains(1)).toEqual(false);
    linkedList.removeHead();
    expect(linkedList.contains(2)).toEqual(false);
    linkedList.removeHead();
    expect(linkedList.contains(3)).toEqual(false);
  });

  it("should add and remove nodes correctly after calling removeHead on an empty list", function(){
    linkedList.removeHead();
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.contains(1)).toEqual(false);
    expect(linkedList.contains(2)).toEqual(true);
  });
});