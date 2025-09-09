# CNO Responsive Blocks

Adds responsive controls to WordPress blocks for enhanced layout flexibility.

## Plugin Details

-   **Plugin Name:** CNO Responsive Blocks
-   **Description:** Adds some responsive controls to blocks.
-   **Version:** 0.1.0
-   **Author:** Choctaw Nation of Oklahoma
-   **Requires PHP:** 8.2+
-   **Requires WordPress:** 6.7.0+

## Installation

1. Download or clone this repository into your WordPress plugins directory:
    ```sh
    git clone https://github.com/choctaw-nation/cno-plugin-responsive-blocks.git
    ```
2. Run `npm install` to install dependencies.
3. Activate the plugin from the WordPress admin dashboard.

## Usage

Once activated, new responsive controls will be available in supported blocks within the WordPress editor.

## Development

-   Source code is in the `src/` folder (TypeScript/React).
-   PHP loader and hooks are in `inc/class-plugin-loader.php` and `cno-plugin-responsive-blocks.php`.
-   Build assets are in the `build/` folder.
-   To build:
    ```sh
    npm run build
    ```

## File Structure

```
cno-plugin-responsive-blocks/
├── cno-plugin-responsive-blocks.php        # Main plugin file
├── inc/
│   └── class-plugin-loader.php             # PHP loader class
├── src/
│   ├── addAttributesToEditor.tsx           # Editor attribute logic
│   ├── addAttributesToSave.tsx             # Save attribute logic
│   ├── addResponsiveControls.tsx           # Responsive controls logic
│   ├── index.ts                            # Entry point
│   ├── registerAttributes.tsx              # Attribute registration
│   ├── registerControls.tsx                # Control registration
│   └── utils/
│       ├── generateClassName.ts            # Utility for class names
│       └── types.d.ts                      # Type definitions
├── build/                                  # Compiled assets
├── package.json                            # Node dependencies
├── composer.json                           # PHP dependencies
└── ...                                     # Other config and vendor files
```

## License

GPLv3 or later. See [LICENSE](https://www.gnu.org/licenses/gpl-3.0.html).
