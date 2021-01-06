module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    ormconfig: '<rootDir>/src/ormconfig.ts',
    '^utils/(.*)$': '<rootDir>/src/utils/$1.ts',
    '^config/(.*)$': '<rootDir>/src/config/$1.ts',
    '^entity/(.*)$': '<rootDir>/src/entity/$1.ts',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
