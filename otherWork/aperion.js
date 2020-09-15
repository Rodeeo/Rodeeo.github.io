$(function () {
    // Mask user input
    $('#cnamNumber').mask('000-000-0000');

    $('#cnamLookup').click(function () {
        var captcha_response = grecaptcha.getResponse();

        if (captcha_response.length === 0) {
            alert('Please complete captcha');
            return;
        }

        grecaptcha.reset();

        // Get phone number value from input and remove non-numeric characters
        var cnam = document.getElementById("cnamNumber").value.replace(/\D/g, "");

        $('#cnamWrapper, #messageOutput').hide();
        $('#loader').fadeIn(500);

        if (cnam.length !== 10) {
            $('#cnamOutput').empty();
            $('#loader, #cnamWrapper').hide();
            $('#messageOutput').html("<h5>Invalid Telephone Number</h5>" +
                "<p>Please check that you are using a 10-digit telephone number.</p>");
            $('#messageOutput').fadeIn(500);
            return;
        }

        $.ajax({
            type: 'GET',
            url: '/api/cnam/' + cnam + '?token=' + token + '&captcha=' + captcha_response,
            success: function (data, statusText) {
                $('#cnamOutput').html('<pre>' + Prism.highlight(JSON.stringify(data, null, 4), Prism.languages.json) + '</pre>');
                $('#loader').hide();
                $('#cnamWrapper').fadeIn(500);

                console.log(statusText + ": " + data.name);
            },

            statusCode: {
                400: function () {
                    console.log("Error 400");
                },

                403: function () {
                    console.log("Invalid security token or captcha response");
                    $('#messageOutput').html(
                        "<h5>Error 403</h5> " +
                        "<p>Invalid security token or captcha response.</p>"
                    );
                    $('#loader, #cnamWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                404: function () {
                    $('#messageOutput').html(
                        "<h5>CNAM Not Found</h5> " +
                        "<p>The number provided did not return a Calling Name value.</p>"
                    );
                    $('#loader, #cnamWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                429: function () {
                    $('#messageOutput').html(
                        "<h5>Too Many Requests</h5> " +
                        "<p>Please limit your requests to 3/Minute, 10/Hour, and 50/day.</p>"
                    );
                    $('#loader, #cnamWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                500: function () {

                    $('#messageOutput').html(
                        "<h5>Error 500</h5> " +
                        "<p>We could not complete your request at this time, please try again later.</p>"
                    );
                    $('#loader, #cnamWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                }
            }
        });
    })
});
