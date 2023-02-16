// math.js
function add(x, y) {
    return x + y;
  }
  
  module.exports = {
    add,
  };
  
  // math.test.js
  const math = require('./math');
  
  describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(math.add(1, 2)).toBe(3);
    });
  
    test('adds -1 + 1 to equal 0', () => {
      expect(math.add(-1, 1)).toBe(0);
    });
  
    test('adds 0.1 + 0.2 to equal 0.3', () => {
      expect(math.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });