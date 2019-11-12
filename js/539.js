$(document).ready(function() {
    $("#field_1").val('')
    $("#field_2").val('')
})

$("#contact_form").submit(function() {
    if ($("#field_1").val() && $("#field_2").val()) {
        return true
    }
    alert("The fields can't be empty:(")
    return false
})