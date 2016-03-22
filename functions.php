<?php



add_theme_support('menus');
add_theme_support('post_thumbnails');

function register_theme_menus() {
  register_nav_menus(
	    array(
		  'primary-menu' => __('Primary Menu')
		)
	  );
}
add_action('init', 'register_theme_menus');
function wpt_theme_styles() {
	
	wp_enqueue_style( 'main_css', get_template_directory_uri().'/style.css' );
  	wp_enqueue_style( 'mainstyle_css', get_template_directory_uri().'/css/mainstyle.css' );
	wp_enqueue_style( 'responsive_css', get_template_directory_uri().'/css/responsive.css' );
        wp_enqueue_style( 'lightgallery_css', get_template_directory_uri().'/css/lightgallery.css' );
        wp_enqueue_style( 'lg_transitions_css', get_template_directory_uri().'/css/lg-transitions.css' );
	wp_enqueue_style( 'googlefont_css', 'https://fonts.googleapis.com/css?family=Capriola' );
	wp_enqueue_style( 'googlefontsec_css', 'https://fonts.googleapis.com/css?family=Roboto:400,400italic,300,300italic' );
	
	
	
}
add_action( 'wp_enqueue_scripts', 'wpt_theme_styles' );

function wpt_theme_js() {
   wp_enqueue_script('mobile_js', get_template_directory_uri().'/js/mobile.js', array('jquery'),'', true);
   wp_enqueue_script('readmore_min_js', get_template_directory_uri().'/js/readmore.min.js', array('jquery'),'', true);
   wp_enqueue_script('readMore_js', get_template_directory_uri().'/js/readMore.js', array('jquery', 'readmore_min_js'),'', true);
   wp_enqueue_script('lightgallery_min_js', get_template_directory_uri().'/js/lightgallery.min.js', array('jquery'),'', true);
   wp_enqueue_script('lg_fullscreen_min_js', get_template_directory_uri().'/js/lg-fullscreen.min.js', array('jquery'),'', true);
   wp_enqueue_script('lg_zoom_js', get_template_directory_uri().'/js/lg-zoom.js', array('jquery'),'', true);
   wp_enqueue_script('imageLightGallery_js', get_template_directory_uri().'/js/imageLightGallery.js', array('jquery'),'', true);	
}
add_action('wp_enqueue_scripts', 'wpt_theme_js');
?>