import babel from 'rollup-plugin-babel';

export default {
	entry: 'app.js',
	dest: 'bundle.js',
	format: 'iife',
	sourceMap: 'inline',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};
