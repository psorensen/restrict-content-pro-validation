/**
 * Restrict Content Pro Form Validation
 * http://wordpress.org/plugins
 *
 * Copyright (c) 2015 Peter Sorensen
 * Licensed under the GPLv2+ license.
 */
 
( function( window, undefined ) {
	'use strict';

	var $ = jQuery;
	var user_url = rcpfv_script_options.ajaxurl + '?action=om_validate_user';
	var email_url = rcpfv_script_options.ajaxurl + '?action=om_validate_email';
	var config = {
    // ordinary validation config
    form : 'form',
    // reference to elements and the validation rules that should be applied
    validate : {
      '#rcp_user_login' : {
         validation : 'server,required',
         url: user_url
      },
      '#rcp_user_email' : {
         validation : 'server,email,required',
         url : email_url
      },
      '#rcp_user_first' : {
      	validation : 'required'
      }, 
      '#rcp_user_last' : {
      	validation : 'required'
      },      
      '#rcp_password' : {
      	validation : 'required'
      },
      '#rcp_password_again' : {
      	validation : 'required, confirmation',
      	confirm : "rcp_password"
      },
    }
  };

  $.validate({
	   modules : 'jsconf, security',
	   onModulesLoaded : function() {
	    $.setupValidation( config );
	   }
	});

} )( this );
