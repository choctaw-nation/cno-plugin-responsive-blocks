import { InspectorControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
	ToggleControl,
	PanelBody,
	CustomSelectControl,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { ReactNode } from 'react';
import { ResponsiveAttributes } from '../utils/types';

/** @see `src/styles/_utils.scss $breakpoints` */
const breakpoints = {
	desktop: 992,
	tablet: 768,
};
const options = [
	{
		key: '',
		name: 'All',
		hint: 'Visible on all devices',
	},
	{
		key: 'desktop-only',
		name: 'Desktop Only',
		hint: `Visible at ${ breakpoints.desktop }px and above`,
	},
	{
		key: 'desktop-tablet',
		name: 'Desktop & Tablet',
		hint: `Visible at ${ breakpoints.tablet }px and above`,
	},
	{
		key: 'desktop-mobile',
		name: 'Desktop & Mobile',
		hint: `Visible until ${ breakpoints.tablet }px and then above ${ breakpoints.desktop }px`,
	},
	{
		key: 'tablet-only',
		name: 'Tablet Only',
		hint: `Visible between ${ breakpoints.tablet }px and ${ breakpoints.desktop }px`,
	},
	{
		key: 'tablet-mobile',
		name: 'Tablet & Mobile',
		hint: `Visible until ${ breakpoints.desktop }px`,
	},
	{
		key: 'mobile-only',
		name: 'Mobile Only',
		hint: `Visible until ${ breakpoints.tablet }px`,
	},
];

/**
 * Finds the selected option based on the responsive settings.
 * @param responsiveSettings The responsive settings to check.
 * @return The selected option or the default option.
 */
function findSelectedOptions(
	responsiveSettings: ResponsiveAttributes[ 'responsiveSettings' ] | undefined
) {
	if ( ! responsiveSettings || responsiveSettings.length === 0 ) {
		return options[ 0 ];
	}
	return (
		options.find( ( option ) => option.key === responsiveSettings ) ||
		options[ 0 ]
	);
}

/**
 * Adds a toggle control to the block inspector to reverse the flex direction
 */
const registerControls = createHigherOrderComponent(
	( BlockEdit ) => ( props ) => {
		const { attributes, setAttributes, name } = props;
		if ( name === 'gravityforms/form' ) {
			return <BlockEdit { ...props } />;
		}
		const { hasResponsiveSettings, responsiveSettings } = attributes;
		const selectedOptions = findSelectedOptions(
			responsiveSettings
		);
		return (
			<Fragment>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody title="Responsive Settings">
						<ToggleControl
							__nextHasNoMarginBottom
							label="Enable Responsive Settings"
							checked={ hasResponsiveSettings }
							onChange={ ( value ) =>
								setAttributes( {
									hasResponsiveSettings: value,
								} )
							}
						/>
						{ hasResponsiveSettings && (
							<CustomSelectControl
								__next40pxDefaultSize
								options={ options }
								label="Visibility Settings"
								value={ selectedOptions }
								onChange={ ( value ) => {
									if ( '' === value.selectedItem.key ) {
										setAttributes( {
											hasResponsiveSettings: false,
											responsiveSettings: options[ 0 ],
										} );
									} else {
										setAttributes( {
											responsiveSettings:
												value.selectedItem.key,
										} );
									}
								} }
							/>
						) }
					</PanelBody>
				</InspectorControls>
			</Fragment>
		) as ReactNode;
	},
	'registerControls'
);

export default registerControls;
