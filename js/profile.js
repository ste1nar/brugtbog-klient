
function profile(){

    var username = $("#textCreateUserUsername").val();
    var password = $("#textCreateUserPassword").val();
    var email = $("#textCreateUserEmail").val();
    var phonenumber = +$("#textCreateUserPhonenumber").val();
    var address = $("#textCreateUserAddress").val();
    var mobilepay = +$("#checkboxCreateUserMobilepay").prop("checked");
    var transfer = +$("#checkboxCreateUserTransfer").prop("checked");
    var cash = +$("#checkboxCreateUserCash").prop("checked");

    $.ajax({
        url: "https://localhost:8000/getuser",
        type: "json",
        method: "GET",
        xhrFields: { withCredentials: true },

        success: function (data) {

        },

        error: function(data) { alert(JSON.stringify(data));}


    })
}
