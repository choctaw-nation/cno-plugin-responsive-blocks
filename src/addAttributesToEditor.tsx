import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import generateClassNames from './utils/generateClassName';
/**
 * Adds inline styles to the block in the Editor view
 */
const addAttributesToEditor = createHigherOrderComponent(
	( BlockListBlock ) => ( props: any ) => {
		const { attributes } = props;
		return (
			<BlockListBlock
				{ ...props }
				className={ generateClassNames( attributes ) }
			/>
		);
	},
	'addAttributesToEditor'
);

export default addAttributesToEditor;
