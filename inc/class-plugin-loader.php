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
	}

	/**
	 * Initializes the Plugin
	 *
	 * @return void
	 */
	public function init(): void {
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_global_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ) );
	}

	/**
	 * Enqueue Global Assets
	 */
	public function enqueue_global_assets() {
		$file    = 'style-index';
		$assets  = $this->get_asset_file( $file );
		$version = is_null( $assets ) ? null : $assets['version'];
		wp_enqueue_style(
			'cno-responsive-blocks',
			$this->build_uri . $file . '.css',
			array(),
			$version
		);
	}

	/**
	 * Enqueue Block Editor Assets
	 */
	public function enqueue_editor_assets() {
		$file   = 'index';
		$assets = $this->get_asset_file( $file );
		if ( is_null( $assets ) ) {
			return;
		}
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
		}
	}

	/**
	 * Gets the asset file for a given file
	 *
	 * @param string $file The name of the file (without extension)
	 * @return array The asset file contents
	 */
	private function get_asset_file( string $file ): ?array {
		$path = $this->build_path . $file . '.asset.php';

		if ( ! file_exists( $path ) ) {
			return null;
		}
		return require $path;
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