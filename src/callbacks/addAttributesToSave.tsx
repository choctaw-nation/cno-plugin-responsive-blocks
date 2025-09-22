import generateClassNames from '../utils/generateClassName';

/**
 * Adds attributes to the save props.
 * @param props      The block's props.
 * @param blockType  [Unused] The block's type.
 * @param attributes The block's attributes.
 * @return The modified props.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-getsavecontent-extraprops
 */
export default function addAttributesToSave(
	props: any,
	blockType: any,
	attributes: any
) {
	try {
		const className = generateClassNames( attributes );
		return {
			...props,
			className,
		};
	} catch ( error ) {
		// eslint-disable-next-line no-console
		console.error( error );
		return props;
	}
}
