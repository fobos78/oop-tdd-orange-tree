// Test-Driven Development
describe('OrangeTree', () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });

  describe('age', () => {
    it('has an age', () => {
      expect(tree.age).toBe(0);
    });
  });

  describe('height', () => {
    it('has a height', () => {
      expect(tree.height).toBe(0);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты. 
  describe('passGrowingSeason', () => {
   
    it('should change the tree age', () => {
      tree.passGrowingSeason()
      expect(tree.age).toBe(1);
    });

    it('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason()
      expect(tree.height).toBe(2.5);
    });

    // If the tree is old enough to bear fruit
    it('should cause the tree to produce oranges', () => {
      expect(tree.age > 5).toBe(tree.passGrowingSeason());
    });

  });

  xdescribe('isMature', () => {
    it('returns true if tree is old enough to bear fruit', () => {

    });

    it('returns false if tree is not old enough to bear fruit', () => {

    });
  });

  xdescribe('isDead', () => {
    it('should return false for an alive tree', () => {

    });

    it('should return true for a dead tree', () => {

    });
  });

  xdescribe('hasOranges', () => {
    it('should return true if oranges are on the tree', () => {

    });

    it('should return false if the tree has no oranges', () => {

    });
  });

  xdescribe('pickAnOrange', () => {
    it('should return an orange from the tree', () => {

    });

    it('the returned orange should no longer be on the tree', () => {

    });

    it('should raise an error if the tree has no oranges', () => {

    });
  });
});
