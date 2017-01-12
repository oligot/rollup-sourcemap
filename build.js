const fs = require('fs');
const rollup = require('rollup');
const babel = require('babel-core');

const dest = 'bundle-api.js';

rollup.rollup({
	entry: 'app.js'
}).then(bundle => {
	const generated = bundle.generate({
		format: 'iife',
		sourceMap: true
	});
	const transformed = babel.transform(generated.code, {
		presets: [
			'es2015'
		],
		sourceMaps: true,
		inputSourceMap: generated.map,
		sourceMapTarget: dest
	});
	fs.writeFileSync(dest, transformed.code + `\n//# sourceMappingURL=${dest}.map`);
	fs.writeFileSync(dest + '.map', JSON.stringify(transformed.map));

}).catch(error => {
	console.log(error.stack);
	process.exit(1);
});
