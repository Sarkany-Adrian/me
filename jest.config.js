// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],

  // Stop running tests after the first failure
  // bail: false,

  // Respect "browser" field in package.json when resolving modules
  // browser: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!dist/*',
    '!config/*',
    '!jest.config.js',
    '!coverage/*',
    '!coverage/lcov-report/*',
    '!scripts/*'
  ],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['src', 'pages', 'node_modules'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(s?css|less)$': '<rootDir>/__mocks__/empty_module.js'
  },

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/']
};
