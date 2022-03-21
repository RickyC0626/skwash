module.exports = async () => {
  return {
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
};