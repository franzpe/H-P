module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageDirectory: '<rootDir>/__coverage',
  collectCoverageFrom: [
    './src/**/*.{ts,tsx,js,jsx}',
    '!**/node_modules/**',
    '!**/build/**',
    '!./src/generated/**',
    '!./src/migration/**'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globalSetup: './src/config/jest.globalSetup.ts',
  timers: 'fake'
};
