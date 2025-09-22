import generateClassNames from '../utils/generateClassName';

/**
 * Adds attributes to the save props.
 * @param props The block's props.
 * @return The modified props.
 */
export default function addAttributesToSave(
	props: any,
) {
	try {
		const className = generateClassNames( props );
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
