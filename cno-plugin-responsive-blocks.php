<?php
/**
 * Plugin Name: CNO Responsive Blocks
 * Plugin URI: https://github.com/choctaw-nation/cno-plugin-responsive-blocks
 * Description: Adds some responsive controls to blocks.
 * Version: 1.0.0
 * Author: Choctaw Nation of Oklahoma
 * Author URI: https://www.choctawnation.com
 * Text Domain: cno
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Requires PHP: 8.2
 * Requires at least: 6.7.0
 * Tested up to: 6.8.2
 *
 * @package ChoctawNation
 * @subpackage Responsive_Blocks
 */

use ChoctawNation\Responsive_Blocks\Plugin_Loader;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

require_once __DIR__ . '/inc/class-plugin-loader.php';
$plugin_loader = new Plugin_Loader();

register_activation_hook( __FILE__, array( $plugin_loader, 'activate' ) );
register_deactivation_hook( __FILE__, array( $plugin_loader, 'deactivate' ) );
