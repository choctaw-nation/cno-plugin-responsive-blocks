import { ResponsiveAttributes } from './types';

export default function generateClassNames(
	attributes: ResponsiveAttributes
): string {
	const classList: string[] = attributes.className
		? attributes.className.split( ' ' )
		: [];
	const { hasResponsiveSettings, responsiveSettings } = attributes;
	if ( ! hasResponsiveSettings ) {
		return classList.join( ' ' );
	}
	if ( '' !== responsiveSettings ) {
		if ( ! classList.includes( 'has-responsive-settings' ) ) {
			classList.push( `has-responsive-settings` );
		}
		const isVisibleAtSize = `is-visible-at-${ responsiveSettings }-size`;
		const existingClass = classList.find( ( cls ) =>
			cls.startsWith( 'is-visible-at-' )
		);
		if ( existingClass ) {
			const index = classList.indexOf( existingClass );
			classList[ index ] = isVisibleAtSize;
		} else {
			classList.push( isVisibleAtSize );
		}
	} else {
		const classes = classList
			.filter( ( cls ) =>
				! cls.startsWith( 'is-visible-at-' )
			)
			.filter( ( cls ) => 'has-responsive-settings' !== cls );
		return classes.join( ' ' );
	}
	return classList.join( ' ' );
}
