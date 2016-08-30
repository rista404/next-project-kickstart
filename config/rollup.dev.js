import babel from 'rollup-plugin-babel'

export default {
	entry: 'src/js/main.js',
	dest: 'dist/bundle.min.js',
	format: 'iife',
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: 'es2015-rollup',
			plugins: ['transform-object-rest-spread']
		})	
	]
}