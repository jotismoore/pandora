$(document).ready(function() {

    $('form#pandora-signup').submit(function (e) {
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            url: 'http://blog.warehouse.co.uk/blog/projects/coming-soon/dw-coming-soon.php',
            data: $('form#pandora-signup').serialize(),
            success: function (data) {
                $('.pandora-signup-form-message').html('<h3>Thank you! Your exclusive Pandora preview will arrive in your inbox on the 30th August</h3>');
                $('form#pandora-signup input[type="text"]').val('');
            }
        });
        e.preventDefault();
    });
});
