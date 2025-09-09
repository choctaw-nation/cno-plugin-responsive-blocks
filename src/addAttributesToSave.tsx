import generateClassNames from './utils/generateClassName';

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
		const { hasResponsiveSettings, responsiveSettings } = attributes;
		if ( hasResponsiveSettings ) {
			const responsiveClassNames = generateClassNames( attributes );
			const classList: string[] = props.className
				? props.className.split( ' ' )
				: [];
			if ( responsiveSettings !== '' ) {
				classList.push( responsiveClassNames );
				return {
					...props,
					className: classList.join( ' ' ),
				};
			}
		}
	} catch ( error ) {
		console.error( error );
	} finally {
		return props;
	}
}
