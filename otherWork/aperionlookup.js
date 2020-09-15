$(function () {
    // Mask user input
    $('#infoNumber').mask('000-000-0000');

    $('#infoLookup').click(function () {
        var captcha_response = grecaptcha.getResponse();

        if (captcha_response.length === 0) {
            alert('Please complete captcha');
            return;
        }

        grecaptcha.reset();

        // Get phone number value from input and remove non-numeric characters
        var info = document.getElementById("infoNumber").value.replace(/\D/g, "");

        $('#infoWrapper, #messageOutput').hide();
        $('#loader').fadeIn(500);

        if (info.length !== 10) {
            $('#infoOutput').empty();
            $('#messageOutput').html("<h5>Invalid Telephone Number</h5> " +
                "<p>Please check that you are using a 10-digit telephone number.</p>");
            $('#loader, #infoWrapper').hide();
            $('#messageOutput').fadeIn(500);
            return;
        }

        $.ajax({
            type: 'GET',
            url: '/api/info/' + info + '?token=' + token + '&captcha=' + captcha_response,
            success: function (data, statusText) {
                $('#infoOutput').html('<pre>' + Prism.highlight(JSON.stringify(data, null, 4), Prism.languages.json) + '</pre>');
                $('#loader').hide();
                $('#infoWrapper').fadeIn(500);

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
                    $('#loader, #infoWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                404: function () {
                    $('#messageOutput').html(
                        "<h5>Number Info Not Found</h5> " +
                        "<p>The number provided did not return an info value.</p>"
                    );
                    $('#loader, #infoWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                429: function () {
                    $('#messageOutput').html(
                        "<h5>Too Many Requests</h5> " +
                        "<p>Please limit your requests to 3/Minute, 10/Hour, and 50/day.</p>"
                    );
                    $('#loader, #infoWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },

                500: function () {
                    $('#messageOutput').html(
                        "<h5>Error 500</h5> " +
                        "<p>We could not complete your request at this time, please try again later.</p>"
                    );
                    $('#loader, #infoWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                }
            }
        });
    })
});
