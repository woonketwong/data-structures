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
  // it("should contain node after it is added", function(){
  //   linkedList.addToTail('test string');
  //   expect(linkedList.contains('test string')).toBe(true);
  // });
  
  // it("should no longer contain node after it is added and removed", function(){
  //   linkedList.addToTail('test string');
  //   linkedList.removeHead('test string');
  //   expect(linkedList.contains('test string')).toBe(false);
  // });

  // it("should still contain first node after adding another node", function(){
  //   linkedList.addToTail(1);
  //   linkedList.addToTail(2);
  //   expect(linkedList.contains(1)).toBe(true);
  // });

  // it("should return the value of node after it is removed", function(){
  //   linkedList.addToTail('test string');
  //   expect(linkedList.removeHead()).toEqual('test string');
  // })

  // it("should contain only second node after adding 2 nodes and removing one of them", function(){
  //   linkedList.addToTail(1);
  //   linkedList.addToTail(2);
  //   linkedList.removeHead();
  //   expect(linkedList.contains(1)).toBe(false);
  //   expect(linkedList.contains(2)).toBe(true);
  // });

  // it("should remove the first nodes added to it", function(){
  //   linkedList.addToTail(1);
  //   linkedList.addToTail(2);
  //   linkedList.addToTail(3);
  //   linkedList.removeHead();
  //   expect(linkedList.contains(1)).toBe(false);
  //   linkedList.removeHead();
  //   expect(linkedList.contains(2)).toBe(false);
  //   linkedList.removeHead();
  //   expect(linkedList.contains(3)).toBe(false);
  // });

  // it("should add and remove nodes correctly after calling removeHead on an empty list", function(){
  //   linkedList.removeHead();
  //   linkedList.addToTail(1);
  //   linkedList.addToTail(2);
  //   linkedList.removeHead();
  //   expect(linkedList.contains(1)).toBe(false);
  //   expect(linkedList.contains(2)).toBe(true);
  // });

  // tests below are for doubly linked list (extra credit)
  it("should have methods named 'addToHead' and 'removeTail'", function(){
    expect(linkedList.addToHead).toEqual(jasmine.any(Function));
    expect(linkedList.removeTail).toEqual(jasmine.any(Function));
  });

  it("should contain node after it is added to head", function(){
    linkedList.addToHead('test string');
    expect(linkedList.contains('test string')).toBe(true);
  });
  
  it("should no longer contain node after it is added and removed", function(){
    linkedList.addToHead('addToHead and removeHead');
    linkedList.removeHead();
    expect(linkedList.contains('addToHead and removeHead')).toBe(false);
    linkedList.addToHead('addToHead and removeTail');
    linkedList.removeTail();
    expect(linkedList.contains('addToHead and removeTail')).toBe(false);
    linkedList.addToTail('addToTail and removeHead');
    linkedList.removeHead();
    expect(linkedList.contains('addToTail and removeHead')).toBe(false);
    linkedList.addToTail('addToTail and removeTail');
    linkedList.removeTail();
    expect(linkedList.contains('addToTail and removeTail')).toBe(false);
  });

  it("should still contain first node after adding another node", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    expect(linkedList.contains(1)).toBe(true);
    linkedList.addToHead(3);
    linkedList.addToHead(4);
    expect(linkedList.contains(3)).toBe(true);
  });

  it("should return the value of node after it is removed", function(){
    linkedList.addToTail('dog');
    linkedList.addToTail('test string');
    expect(linkedList.removeTail()).toEqual('test string');
    linkedList.addToHead('cat');
    linkedList.addToHead('test string');
    expect(linkedList.removeHead()).toEqual('test string');
  })

  it("should contain only second node after adding 2 nodes and removing the first one", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.removeHead();
    expect(linkedList.contains(1)).toBe(false);
    expect(linkedList.contains(2)).toBe(true);
  });

  it("should contain nodes in the correct order", function(){
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.removeHead()).toEqual(1);
    expect(linkedList.removeHead()).toEqual(2);
    expect(linkedList.removeHead()).toEqual(3);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    linkedList.addToHead(1);
    expect(linkedList.removeTail()).toEqual(3);
    expect(linkedList.removeTail()).toEqual(2);
    expect(linkedList.removeTail()).toEqual(1);
  });
});