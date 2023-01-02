/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
    '@src/(.*)': '<rootDir>/src/$1'
  },
}