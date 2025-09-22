// WP Deps
import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';

// Callbacks
import registerAttributes from './callbacks/registerAttributes';
import registerControls from './callbacks/registerControls';
import addAttributesToSave from './callbacks/addAttributesToSave';
import addAttributesToEditor from './callbacks/addAttributesToEditor';

// Styles
import './styles/editor.scss';
import './styles/style.scss';

domReady( () => {
	const namespace = 'cno';
	const hooks = [
		{
			hook: 'blocks.registerBlockType',
			namespace: `${ namespace }/register-attributes`,
			callback: registerAttributes,
		},
		{
			hook: 'editor.BlockEdit',
			namespace: `${ namespace }/register-controls`,
			callback: registerControls,
		},
		{
			hook: 'blocks.getSaveContent.extraProps',
			namespace: `${ namespace }/add-attributes-to-save`,
			callback: addAttributesToSave,
		},
		{
			hook: 'editor.BlockListBlock',
			namespace: `${ namespace }/add-attributes-to-editor`,
			callback: addAttributesToEditor,
		},
	];
	try {
		hooks.forEach( ( { hook, namespace, callback } ) => {
			addFilter( hook, namespace, callback );
		} );
	} catch ( error ) {
		// eslint-disable-next-line no-console
		console.error( `Error initializing Responsive Controls:`, error );
	}
} );
