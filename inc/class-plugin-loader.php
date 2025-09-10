<?php
/**
 * Plugin Loader
 *
 * @since 1.0
 * @package ChoctawNation
 * @subpackage Responsive_Blocks
 */

namespace ChoctawNation\Responsive_Blocks;

/** Inits the Plugin */
class Plugin_Loader {
	/**
	 * Path to the build directory
	 *
	 * @var string $build_path
	 */
	private string $build_path;

	/**
	 * URI to the build directory
	 *
	 * @var string $build_uri
	 */
	private string $build_uri;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->build_path = plugin_dir_path( __DIR__ ) . 'build/';
		$this->build_uri  = plugins_url( 'build/', __DIR__ );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_editor_assets' ) );
	}

	/**
	 * Enqueue Block Editor Assets
	 */
	public function enqueue_editor_assets() {
		$file   = 'index';
		$assets = require $this->build_path . $file . '.asset.php';

		wp_enqueue_script(
			'cno-responsive-blocks',
			$this->build_uri . $file . '.js',
			$assets['dependencies'],
			$assets['version'],
			array( 'strategy' => 'defer' )
		);

		if ( is_admin() ) {
			wp_enqueue_style(
				'cno-responsive-blocks',
				$this->build_uri . $file . '.css',
				array(),
				$assets['version']
			);
		} else {
			wp_enqueue_style(
				'cno-responsive-blocks',
				$this->build_uri . 'style-index.css',
				array(),
				$assets['version']
			);
		}
	}

	/**
	 * Initializes the Plugin
	 *
	 * @return void
	 */
	public function activate(): void {
		flush_rewrite_rules();
	}

	/**
	 * Handles Plugin Deactivation
	 * (this is a callback function for the `register_deactivation_hook` function)
	 *
	 * @return void
	 */
	public function deactivate(): void {
		flush_rewrite_rules();
	}
}
