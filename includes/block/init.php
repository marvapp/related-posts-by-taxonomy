<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since  1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'enqueue_block_editor_assets', 'km_rpbt_block_editor_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function km_rpbt_block_editor_assets() {
	$plugin = km_rpbt_plugin();
	if ( ! ( $plugin && $plugin->plugin_supports( 'wp_rest_api' ) ) ) {
		return;
	}

	// Scripts.
	wp_enqueue_script(
		'rpbt-related-posts-block', // Handle.
		plugins_url( '/block/block.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-utils' )
	);

	// Styles.
	wp_enqueue_style(
		'rpbt-related-posts-block-css', // Handle.
		plugins_url( 'editor.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);

	wp_localize_script( 'rpbt-related-posts-block', 'km_rpbt_plugin_data',
		array(
			'post_types'  => $plugin->post_types,
			'taxonomies'  => $plugin->taxonomies,
			'default_tax' => $plugin->default_tax,
			'all_tax'     => $plugin->all_tax,
			'formats'     => $plugin->formats,
			'image_sizes' => $plugin->image_sizes,
		)
	);
}

/**
 * Render related posts block on the front end.
 *
 * @param array $attributes Block attributes
 * @return string Rendered related posts
 */
function km_rpbt_render_block_related_post( $attributes ) {
	return '';
}

if ( function_exists( 'register_block_type' ) ) {
	$plugin = km_rpbt_plugin();
	if ( ! ( $plugin && $plugin->plugin_supports( 'wp_rest_api' ) ) ) {
		return;
	}

	register_block_type( 'related-posts-by-taxonomy/related-posts-block', array(
			'attributes'      => array(
				'taxonomies'      => array(
					'type' => 'string',
					'default' => $plugin->all_tax,
				),
			),

			'render_callback' => 'rpbt_render_block_related_posts',
		) );
}
