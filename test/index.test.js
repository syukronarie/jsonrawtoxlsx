const jsontoxlsx = require('..');
const { sampleData, fileName } = require('./sampleData');

const mockRes = () => {
  const res = {};
  res.xlsx = jest.fn();
  res.setHeader = jest.fn();
  res.write = jest.fn();
  return res;
};

describe('Convert JSON correctly', () => {
  it('should be defined', () => {
    const result = jsontoxlsx(sampleData);
    expect(result).toBeDefined();
  });
  it('middleware should be works', () => {
    const mockedRes = mockRes(fileName, sampleData);
    const mockedNext = jest.fn();
    jsontoxlsx.middleware(null, mockedRes, mockedNext);
    expect(mockedRes.xlsx(fileName, sampleData)).toBe(undefined);
    expect(mockedRes.setHeader('Content-Type', 'application/vnd.ms-excel')).toBe(undefined);
    expect(mockedRes.write(Buffer)).toBe(undefined);
    expect(mockedNext).toHaveBeenCalledTimes(1);
  });
});
