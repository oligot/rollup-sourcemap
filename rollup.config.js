import babel from 'rollup-plugin-babel';

export default {
	entry: 'app.js',
	dest: 'bundle-cli.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};
