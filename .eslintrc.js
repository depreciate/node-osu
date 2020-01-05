module.exports = {
	env: {
		es6: true,
		node: true,
		mocha: true
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended'
	],
	rules: {
		'no-console': 1,
		'no-control-regex': 0,
		'no-alert': 1,
		'no-else-return': 1,
		'no-redeclare': 2,
		'no-useless-escape': 1,
		'no-inner-declarations': 0,
		'array-bracket-spacing': ['warn', 'never'],
		'brace-style': ['warn', '1tbs', {
			allowSingleLine: true
		}],
		'no-trailing-spaces': 1,
		'space-before-function-paren': ['warn', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
		'arrow-spacing': 1,
		'comma-spacing': ['warn', {
			before: false,
			after: true
		}],
		'comma-dangle': 1,
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],
		'array-callback-return': 'error',
		eqeqeq: ['warn', 'always', { null: 'ignore' }],
		'no-empty-function': ['error', {
			allow: [
				'arrowFunctions',
				'functions',
				'methods',
			]
		}],
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'no-return-assign': 'error',
		'no-unmodified-loop-condition': 'off',
		'no-empty': 'error',
		'no-extra-semi': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-regex-spaces': 'error',
		'no-unreachable': 'error',
		'no-warning-comments': ['warn', {
			terms: ['todo', 'fixme'],
			location: 'start'
		}],
		'valid-typeof': ['error', { requireStringLiterals: false }],
		'constructor-super': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-var': 'error',
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: false
		}],
		'no-lonely-if': 'error',
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
			avoidQuotes: true
		}],
		'block-spacing': ['error', 'always'],
		'eol-last': ['error', 'always'],
		semi: ['error', 'always']
	}
};
