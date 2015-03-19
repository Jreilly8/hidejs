/**
 * File: js/showhide.js
 * Date: 2-18-2015 
 * Purpose: toggle the visibility of fields depending on the value of another field
 **/
$(document).ready(function () {
    toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
    //call our toggleFields function each time the selection value of our first field changes
    $("#first").change(function () {
        toggleFields();

    });

});
//this toggles the visibility of our parent permission fields depending on the current selected value of the first field
function toggleFields() {
    if ($("#first").val() == "")
        $("#district").hide();

    else
        $("#second").show();

}


