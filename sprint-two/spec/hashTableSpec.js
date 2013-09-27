describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
  it("should have method named 'remove'", function(){
    expect(hashTable.remove).toEqual(jasmine.any(Function));
  });

  it("should retrieve a value after inserting the value", function(){
    hashTable.insert('dog','friendly');
    expect(hashTable.retrieve('dog')).toEqual('friendly');
  });

  it("should remove a value after inserting the value", function(){
    hashTable.insert('dog','friendly');
    hashTable.remove('dog');
    expect(hashTable.retrieve('dog')).toEqual(undefined);
  });

  it("should not be changed when trying to remove a value that has not been added", function(){
    hashTable.insert('dog','friendly');
    hashTable.remove('cat');
    expect(hashTable.retrieve('dog')).toEqual('friendly');
  });

  it("should overwrite an existing value given the same key", function(){
    hashTable.insert('dog','friendly');
    hashTable.insert('dog','fun');
    expect(hashTable.retrieve('dog')).toEqual('fun');
  });

  it("should store more values than the storage limit", function(){
    var testKeys = 'abcdefghij'.split('');
    for(var i = 0; i < testKeys.length; i++){
      hashTable.insert(testKeys[i],i + 1);
    }
    for(i = 0; i < testKeys.length; i++){
      expect(hashTable.retrieve(testKeys[i])).toEqual(i + 1);
    }
  });

  it("should resize when its storage has less than 25% free space", function(){
    var testKeys = 'abcdefghij'.split('');
    for(var i = 0; i < testKeys.length; i++){
      hashTable.insert(testKeys[i],i + 1);
    }
    for(i = 0; i < testKeys.length; i++){
      expect(hashTable.retrieve(testKeys[i])).toEqual(i + 1);
    }
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(14);
    hashTable.insert('dog','friendly');
    expect(hashTable.retrieve('dog')).toEqual('friendly');
  });
});
