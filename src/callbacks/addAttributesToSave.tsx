import generateClassNames from '../utils/generateClassName';

/**
 * Adds attributes to the save props.
 * @param props      The block's props.
 * @param blockType  The block type.
 * @param attributes The block attributes.
 * @return The modified props.
 */
export default function addAttributesToSave(
	props: any,
	blockType: any,
	attributes: any
) {
	try {
		return { ...props, className: generateClassNames( attributes ) };
	} catch ( error ) {
		// eslint-disable-next-line no-console
		console.error( error );
	}
}
