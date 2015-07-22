/**
 * Demo Portal with SAP integration
 */

var endpoints = {
    wifiSet: 'https://omnidemo-s0006946433trial.dispatcher.hanatrial.ondemand.com/sap/opu/odata/sap/zomnichannel_srv/WifiSet',
    wifiSetPrev: 'https://lab-demo.qsc.de/sap/opu/odata/sap/zomnichannel_srv/WifiSet'
};

$(document).ready(function(){

    $('#emailLoginFormButton').on('click',function(e){
        e.preventDefault();


        var creds = {
            username: "omnichannel",
            password: "SommerinHamburg2000"
        };
        var credentials = btoa(creds.username + ":" + creds.password);

        $.ajaxSetup({
            //xhrFields: { withCredentials: true },
            beforeSend: function (xhr) {
                // xhr.setRequestHeader("Authorization", "Basic" + credentials);
                xhr.setRequestHeader("X-CSRF-Token", "Fetch");
                return true;
            },
            dataType: 'json',
            crossDomain: true
        });

        $.ajax({
            url: endpoints.wifiSetPrev + '?$format=json',
            type: 'GET',
            success: function(data){
                console.log(data);
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