import { addFilter } from '@wordpress/hooks';
import registerAttributes from './registerAttributes';
import registerControls from './registerControls';
import addAttributesToSave from './addAttributesToSave';
import addAttributesToEditor from './addAttributesToEditor';

/**
 * Adds a toggle control to reverse the flex direction of a block.
 *
 * @param namespace the namespace of the callback functions to run
 */
export default function addResponsiveControls( namespace: string ) {
	try {
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
		hooks.forEach( ( { hook, namespace, callback } ) => {
			addFilter( hook, namespace, callback );
		} );
	} catch ( error ) {
		// eslint-disable-next-line no-console
		console.error( `Error initializing Responsive Controls:`, error );
	}
}
