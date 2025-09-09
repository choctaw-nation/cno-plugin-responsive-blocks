export type ResponsiveAttributes = {
	hasResponsiveSettings: boolean;
	responsiveSettings:
		| 'desktop-only'
		| 'desktop-tablet'
		| 'desktop-mobile'
		| 'tablet-only'
		| 'tablet-mobile'
		| 'mobile-only'
		| '';
};
