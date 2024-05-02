export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
	},
	modulePathIgnorePatterns: ['./dist/'],
	coveragePathIgnorePatterns: [],
	collectCoverageFrom: [
		'./src/**/*.ts',
		'./src/**/*.tsx',
		'!./src/**/*.test.ts',
	],
	coverageThreshold: {},
}
