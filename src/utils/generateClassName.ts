import { ResponsiveAttributes } from './types';

export default function generateClassNames(
	attributes: ResponsiveAttributes,
): string {
	const classList: string[] = attributes.className
		? attributes.className.split( ' ' )
		: [];
	const { hasResponsiveSettings, responsiveSettings } = attributes;
	if ( ! hasResponsiveSettings ) {
		return removeResponsiveClasses( classList );
	}
	if ( hasResponsiveSettings && responsiveSettings ) {
		if ( ! classList.includes( 'has-responsive-settings' ) ) {
			classList.push( `has-responsive-settings` );
		}
		const isVisibleAtSize = `is-visible-at-${ responsiveSettings }-size`;
		const existingClasses = classList.filter( ( cls ) =>
			cls.startsWith( 'is-visible-at-' )
		);
		if ( existingClasses.length > 0 ) {
			const index = classList.indexOf( existingClasses[ 0 ] );
			classList[ index ] = isVisibleAtSize;
		} else {
			classList.push( isVisibleAtSize );
		}
	} else {
		return removeResponsiveClasses( classList );
	}
	return classList.join( ' ' );
}

function removeResponsiveClasses( classList: string[] ):string {
	const filteredClasses = classList
		.filter( ( cls ) => ! cls.startsWith( 'is-visible-at-' ) )
		.filter( ( cls ) => 'has-responsive-settings' !== cls );
	return filteredClasses.join( ' ' );
}
