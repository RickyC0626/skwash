module.exports = async () => {
  return {
    testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
    setupFilesAfterEnv: ['./jest.setup.js'],
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
};