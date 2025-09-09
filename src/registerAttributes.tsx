/**
 * Adds needed attributes to blocks
 * @param settings the block settings
 * @param name the name of the block
 * @returns
 */
export default function registerAttributes(
	settings: { attributes: Record< string, any > },
	name: string
): {} {
	settings.attributes = {
		...settings.attributes,
		hasResponsiveSettings: {
			type: 'boolean',
			default: false,
		},
		responsiveSettings: {
			type: 'string',
			default: '',
			enum: [
				'desktop-only',
				'desktop-tablet',
				'desktop-mobile',
				'tablet-only',
				'tablet-mobile',
				'mobile-only',
			],
		},
	};
	return settings;
}
