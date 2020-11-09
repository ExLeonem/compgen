/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  roots: ['<rootDir>/test'],
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  },
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  testEnvironment: "node",
};
