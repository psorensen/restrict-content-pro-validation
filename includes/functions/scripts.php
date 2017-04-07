<?php 
/**
 * Enqueue scripts and styles
 * TODO: Use Local Version of Validation Script
 */


// Enqueue scripts only when RCP registration form is loaded
add_action( 'wp_enqueue_scripts', function () {

//    if ( ! function_exists( 'rcp_is_registration') && ! rcp_is_registration() ) return;

    // wp_enqueue_script( 'jquery-form-validator', '//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.43/jquery.form-validator.min.js', array('jquery'), '1.0.0', true  );
    wp_enqueue_script( 'jquery-form-validator', '//ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.js', array('jquery'), '1.0.0', true  );
    wp_enqueue_script( 'restrict-content-pro-form-validation', RCPFV_URL . '/assets/js/restrict-content-pro-form-validation.min.js', array('jquery'), '1.0.0', true );
    wp_enqueue_style( 'restrict-content-pro-form-validation-style', RCPFV_URL . '/assets/css/restrict-content-pro-form-validation.min.css');

    wp_localize_script(
        'restrict-content-pro-form-validation',
        'rcpfv_script_options',
        array(
            'ajaxurl' => admin_url( 'admin-ajax.php' )
        )
    );
} );