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
	

  $( "#rcp_registration_form" ).validate({
    debug: true,
    rules: {
      rcp_user_login: {
        required: true,
        remote: {
          url: user_url,
          type: "post",
          data: {
            rcp_user_email: function() {
              return $( "#rcp_user_login" ).val();
            }
          }
        }
      },      
      rcp_user_email: {
        required: true,
        email: true,
        remote: {
          url: email_url,
          type: "post",
          data: {
            rcp_user_email: function() {
              return $( "#rcp_user_email" ).val();
            }
          }
        }
      },
      rcp_user_pass_confirm : {
        equalTo : '#rcp_password'
      }
    },
    messages : {
      rcp_user_pass_confirm : {
        equalTo: "Passwords do not match"
      },
      rcp_user_login : {
        remote: "This username has already been registered"
      },
      rcp_user_email : {
        email: 'Please enter a valid email address',
        remote: "This email address is already registered. <a href='#''>Log in</a>?"
      }
    }
  });





  // var config = {
 //    // ordinary validation config
 //    form : 'form',
 //    // reference to elements and the validation rules that should be applied
 //    validate : {
 //      '#rcp_user_login' : {
 //         validation : 'server,required',
 //         url: user_url
 //      },
 //      '#rcp_user_email' : {
 //         validation : 'server,email,required',
 //         url : email_url
 //      },
 //      '#rcp_user_first' : {
 //      	validation : 'required'
 //      }, 
 //      '#rcp_user_last' : {
 //      	validation : 'required'
 //      },      
 //      '#rcp_password' : {
 //      	validation : 'required'
 //      },
 //      '#rcp_password_again' : {
 //      	validation : 'required, confirmation',
 //      	confirm : "#rcp_password"
 //      },
 //    }
 //  };

 //  $.validate({
	//    modules : 'jsconf, security',
	//    addValidClassOnAll : true,
	//    onModulesLoaded : function() {
	//     $.setupValidation( config );
	//    }
	// });

} )( this );
