<?php 
/**
 * Enqueue scripts and styles
 * TODO: Use Local Version of Validation Script
 */
function om_rcp_scripts() {
	wp_enqueue_script( 'jquery-form-validator', '//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.43/jquery.form-validator.min.js', array('jquery'), '1.0.0', true  );
	wp_enqueue_script( 'restrict-content-pro-form-validation', RCPFV_URL . '/assets/js/restrict-content-pro-form-validation.min.js', array('jquery'), '1.0.0', true );
	wp_localize_script( 
		'restrict-content-pro-form-validation', 
		'rcpfv_script_options', 
		array( 
			'ajaxurl' => admin_url( 'admin-ajax.php' ) 
		) 
	);
}

// Enqueue scripts only when RCP registration form is loaded
add_action( 'rcp_before_register_form_fields', 'om_rcp_scripts' );