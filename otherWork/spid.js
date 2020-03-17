$(function () {
    $('#lrnNumber').mask('000-000-0000');
    $('#lrnLookup').click(function () {
        var captcha_response = grecaptcha.getResponse();
        if (captcha_response.length === 0) {
            alert('Please complete captcha');
            return;
        }
        grecaptcha.reset();
        var lrn = document.getElementById("lrnNumber").value.replace(/\D/g, "");
        $('#lrnWrapper, #messageOutput').hide();
        $('#loader').fadeIn(500);
        if (lrn.length !== 10) {
            $('#lrnOutput').empty();
            $('#messageOutput').html("<h5>Invalid Telephone Number</h5> " +
                "<p>Please check that you are using a 10-digit telephone number.</p>");
            $('#loader, #lrnWrapper').hide();
            $('#messageOutput').fadeIn(500);
            return;
        }
        $.ajax({
            type: 'GET',
            url: '/api/lrn/' + lrn + '?token=' + token + '&captcha=' + captcha_response,
            success: function (data, statusText) {
                $('#lrnOutput').html('<pre>' + Prism.highlight(JSON.stringify(data, null, 4), Prism.languages.json) + '</pre>');
                $('#loader').hide();
                $('#lrnWrapper').fadeIn(500);
                console.log(statusText + ": " + data.name);
            },
            statusCode: {
                400: function () {
                    console.log("Error 400");
                },
                403: function () {
                    console.log("Invalid security token or captcha response");
                    $('#messageOutput').html("<h5>Error 403</h5> " +
                        "<p>Invalid security token or captcha response.</p>");
                    $('#loader, #lrnWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },
                404: function () {
                    $('#messageOutput').html("<h5>LRN Not Found</h5> " +
                        "<p>The number provided did not return an LRN value.</p>");
                    $('#loader, #lrnWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },
                429: function () {
                    $('#messageOutput').html("<h5>Too Many Requests</h5> " +
                        "<p>Please limit your requests to 3/Minute, 10/Hour, and 50/day.</p>");
                    $('#loader, #lrnWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                },
                500: function () {
                    $('#messageOutput').html("<h5>Error 500</h5> " +
                        "<p>We could not complete your request at this time, please try again later.</p>");
                    $('#loader, #lrnWrapper').hide();
                    $('#messageOutput').fadeIn(500);
                }
            }
        });
    })
});