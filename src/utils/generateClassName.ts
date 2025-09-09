import { ResponsiveAttributes } from './types';

export default function generateClassNames(
	attributes: ResponsiveAttributes
): string {
	let classNames = '';
	if ( attributes.hasResponsiveSettings && attributes.responsiveSettings ) {
		classNames += `has-responsive-settings is-visible-at-${ attributes.responsiveSettings }-size`;
	}
	return classNames;
}
