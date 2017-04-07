/*! Restrict Content Pro Form Validation - v0.1.0
 * http://wordpress.org/plugins
 * Copyright (c) 2017; * Licensed GPLv2+ */
(function (window, undefined) {
    'use strict';

    var $ = jQuery;
    var user_url = rcpfv_script_options.ajaxurl + '?action=om_validate_user';
    var email_url = rcpfv_script_options.ajaxurl + '?action=om_validate_email';
    var form = $("#rcp_registration_form");

    form.validate({
        debug: true,
        rules: {
            rcp_user_login: {
                required: true,
                remote: {
                    url: user_url,
                    type: "post",
                    data: {
                        rcp_user_email: function () {
                            return $("#rcp_user_login").val();
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
                        rcp_user_email: function () {
                            return $("#rcp_user_email").val();
                        }
                    }
                }
            },
            rcp_user_pass_confirm: {
                equalTo: '#rcp_password'
            }
        },
        messages: {
            rcp_user_pass_confirm: {
                equalTo: "Passwords do not match"
            },
            rcp_user_login: {
                remote: "This username has already been registered"
            },
            rcp_user_email: {
                email: 'Please enter a valid email address',
                remote: "This email address is already registered. <a href='/wp-login.php''>Log in</a>?"
            }
        },
    });

    $(document).on('click', '#rcp_submit', function(e){
        if ( ! form.valid() ) {
            return;
        }
    });

})(this);


// form.valid()