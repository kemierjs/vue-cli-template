module.exports = {
	root: true,
	env: {
		"node": true
	},
	plugins: ["eslint-plugin-vue"],
	extends: [
		"plugin:vue/essential",
		"eslint:recommended"
	],
	parserOptions: {
		ecmaFeature: {
			jsx: false
		},

	},
	rules: {
		"vue/multi-word-component-names":"off"
	},

};
