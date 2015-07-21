/**
 * Demo Portal with SAP integration
 */

$(document).ready(function(){

    $('#emailLoginFormButton').on('click',function(e){
        e.preventDefault();


        var creds = {
            username: "omnichannel",
            password: "SommerinHamburg2000"
        };
        var credentials = btoa(creds.username + ":" + creds.password);
        $.ajaxSetup({
            xhrFields: { withCredentials: false },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic" + credentials);
                xhr.setRequestHeader("X-CSRF-Token", "Fetch");
                return true;
            }
        });

        $.ajax({
            url: 'https://lab-demo.qsc.de/sap/opu/odata/sap/zomnichannel_srv/WifiSet?$format=json',
            dataType: 'jsonp',
            type: 'GET',
            success: function(data){
                console.log(data);
            },
            error: function(error){
                console.warn(error);
            }
        });

    });

}); // Dom ready end

/*
    Event handlers
 */

$('.termsAndConditions').on('click', function(e){
    e.preventDefault();
    $('.ui.modal.terms').modal('show');
});

$('.acceptTermsAndConditionsButton').on('click',function(e){
    e.preventDefault();
    $('#termsAndConditions').prop("checked", true);
})