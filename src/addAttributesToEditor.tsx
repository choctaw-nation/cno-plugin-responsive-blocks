import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
/**
 * Adds inline styles to the block in the Editor view
 */
const addAttributesToEditor = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props: any ) => {
			const { attributes, name } = props;
			if ( name !== 'core/group' ) {
				return <BlockListBlock { ...props } />;
			}
			const { hasResponsiveSettings, responsiveSettings } = attributes;
			if ( hasResponsiveSettings && responsiveSettings ) {
			}
			return (
				<Fragment>
					<BlockListBlock
						{ ...props }
						wrapperProps={ props.wrapperProps }
					/>
				</Fragment>
			);
		};
	},
	'addAttributesToEditor'
);

export default addAttributesToEditor;
