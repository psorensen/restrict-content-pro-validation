<?php

// Validate user function
add_action( 'wp_ajax_nopriv_om_validate_user', 'om_validate_user');
add_action( 'wp_ajax_om_validate_user', 'om_validate_user');

// Validate email function
add_action( 'wp_ajax_nopriv_om_validate_email', 'om_validate_email');
add_action( 'wp_ajax_om_validate_email', 'om_validate_email');

function om_validate_user() {
	$response = array(
	  'valid' => true,
	  'message' => 'Post argument "rcp_user_login" is missing.'
	);

	if( isset($_POST['rcp_user_login']) ) {
		$user = username_exists($_POST['rcp_user_login']);
	  if( $user ) {
	    // User name is registered on another account
	    $response = array('valid' => false, 'message' => 'This user name is already registered.');
	  } else {
	    // User name is available
	    $response = array('valid' => true);
	  }
	}
	echo json_encode($response);
	die();
}

function om_validate_email() {
	$response = array(
	  'valid' => true,
	  'message' => 'Post argument "rcp_user_email" is missing.'
	);

	if( isset($_POST['rcp_user_email']) ) {
		$email = email_exists($_POST['rcp_user_email']);
	  if( $email ) {
	    // User name is registered on another account
	    $response = array('valid' => false, 'message' => 'This email address is already registered. Want to log in? Forgot Password?');
	  } else {
	    // User name is available
	    $response = array('valid' => true);
	  }
	}
	echo json_encode($response);
	die();
}