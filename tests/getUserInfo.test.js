// getUserInfo.test.js

const getUserInfo = require('../getUserInfo');

describe('getUserInfo', () => {
  beforeEach(() => {
    // Mock the prompt function
    global.prompt = jest.fn();
  });

  afterEach(() => {
    // Reset prompt function after each test
    global.prompt.mockRestore();
  });

  it('should prompt the user for name and age', () => {
    global.prompt.mockReturnValueOnce('John'); // Mock user input for name
    global.prompt.mockReturnValueOnce('30');   // Mock user input for age

    const consoleSpy = jest.spyOn(console, 'log');

    getUserInfo();

    expect(global.prompt).toHaveBeenCalledTimes(2); // Ensure prompt is called twice
    expect(global.prompt).toHaveBeenCalledWith('Please enter your name:');
    expect(global.prompt).toHaveBeenCalledWith('Please enter your age:');
    expect(consoleSpy).toHaveBeenCalledWith('User Name: John');
    expect(consoleSpy).toHaveBeenCalledWith('User Age: 30');
  });
});
