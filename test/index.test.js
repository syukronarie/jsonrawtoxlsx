const jsontoxlsx = require('..');
const { sampleData, fileName } = require('./sampleData');

describe('Convert JSON correctly', () => {
  it('should be defined', () => {
    const result = jsontoxlsx(sampleData);
    expect(result).toBeDefined();
  });
});
