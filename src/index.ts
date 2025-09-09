import domReady from '@wordpress/dom-ready';
import addResponsiveControls from './addResponsiveControls';
import './editor.scss';
import './style.scss';

function alterBlocks(): void {
	const namespace = 'cno';
	addResponsiveControls( namespace );
}
domReady( alterBlocks );
