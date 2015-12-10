Package.describe({
	name: "ultimatejs:ultimate-react",
	summary: "Ultimate React",
	version: '0.0.1',
	documentation: 'README.md',
	git: 'https://github.com/ultimatejs/ultimate-react'
});

Package.onUse(function (api) {
	api.imply([
		'babel-runtime@0.1.4-rc.0',
		'react-runtime@0.14.3'
	]);

	api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'compile-jsx',
  use: ['babel-compiler@5.8.22-rc.1'],
  sources: [
    'jsx-plugin.js'
  ]
});