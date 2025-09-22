import defaultConfig from '@wordpress/scripts/config/webpack.config.js';
import RemoveEmptyScriptsPlugin from 'webpack-remove-empty-scripts';

const config = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
	},
	plugins: [
		...defaultConfig.plugins,
		new RemoveEmptyScriptsPlugin( {
			stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
		} ),
	],
};
export default config;
