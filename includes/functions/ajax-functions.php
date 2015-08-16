<?php

// Validate user function
add_action( 'wp_ajax_nopriv_om_validate_user', 'om_validate_user');
add_action( 'wp_ajax_om_validate_user', 'om_validate_user');

// Validate email function
add_action( 'wp_ajax_nopriv_om_validate_email', 'om_validate_email');
add_action( 'wp_ajax_om_validate_email', 'om_validate_email');

function om_validate_user() {

	if( isset($_POST['rcp_user_login']) ) {
		$user = username_exists($_POST['rcp_user_login']);
	  if( $user ) {
	    // User name is registered on another account
	    $response = 'false';
	  } else {
	    // User name is available
	    $response = 'true';
	  }
	}
	echo $response;
	die();
}

function om_validate_email() {

	if( isset($_POST['rcp_user_email']) ) {
		$email = email_exists($_POST['rcp_user_email']);
	  if( $email ) {
	    // User name is registered on another account
	    $response = 'false';
	  } else {
	    // User name is available
	    $response = 'true';
	  }
	}
	echo $response;
	die();
}