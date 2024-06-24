const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  testEnvironment: "jsdom",
  "collectCoverage": true,
};

module.exports = createJestConfig(customJestConfig);