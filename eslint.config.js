import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import eslintConfigPrettier from 'eslint-config-prettier'

/* ESLint React Plugin Configuration */
pluginReactConfig.rules = {
	...pluginReactConfig.rules,
	'react/react-in-jsx-scope': 0,
	'react/prop-types': 'off',
}
pluginReactConfig.settings = {
	react: {
		version: 'detect',
	},
}

/* ESLint Configuration */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReactConfig,
	eslintConfigPrettier,
]
