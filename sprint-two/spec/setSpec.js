describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should contain a string after adding a string", function() {
    set.add('test string');
    expect(set.contains('test string')).toBe(true);
  });

  it("it should not contain any duplicates", function() {
    set.add('test string');
    set.add('test string');
    set.remove('test string');
    expect(set.contains('test string')).toBe(false);
  });

  it("it should contain many different strings after adding many different strings", function() {
    set.add('hello');
    set.add('world');
    set.add('good');
    set.add('bye');
    expect(set.contains('hello')).toBe(true);
    expect(set.contains('world')).toBe(true);
    expect(set.contains('good')).toBe(true);
    expect(set.contains('bye')).toBe(true);
  });

  it("it should not contain many different strings that were added and removed", function() {
    set.add('hello');
    set.add('world');
    set.add('good');
    set.add('bye');
    set.remove('hello');
    set.remove('good');
    set.remove('bye');
    expect(set.contains('hello')).toBe(false);
    expect(set.contains('world')).toBe(true);
    expect(set.contains('good')).toBe(false);
    expect(set.contains('bye')).toBe(false);
  });
});