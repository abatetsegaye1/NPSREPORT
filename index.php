<?php

/*
  Plugin Name: ScaleReport&rsquo;s Boilerplate Block Plugin
  Version: 1.0
  Author: Abate & solomon
  Author URI: https://github.com/LearnWebCode
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class BoilerplateScaleReport {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('scaleReportScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('scaleReportStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('makeupnamespace/scale-report', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'scaleReportScript',
      'editor_style' => 'scaleReportStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplatereportFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplatereportFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }
     
    ob_start(); ?>
    
    <div class="scalereport-update"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '.</div>';
  }
}

$boilerplateScaleReport = new BoilerplateScaleReport();