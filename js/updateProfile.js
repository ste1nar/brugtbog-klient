function updateUser() {

    var username = $("#textUpdateUserUsername").val();
    var password = $("#textUpdateUserPassword").val();
    var email = $("#textUpdateUserEmail").val();
    var phonenumber = +$("#textUpdateUserPhonenumber").val();
    var address = $("#textUpdateUserAddress").val();
    var mobilepay = +$("#checkboxUpdateUserMobilepay").prop("checked");
    var cash = +$("#checkboxUpdateUserCash").prop("checked");
    var transfer = +$("#checkboxUpdateUserTransfer").prop("checked");

     $.ajax({
        url: "https://localhost:8000/updateuser",
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "username" : username,
            "password" : password,
            "email" : email,
            "phonenumber" : phonenumber,
            "address" : address,
            "mobilepay" : mobilepay,
            "cash" : cash,
            "transfer" : transfer
        }),

        success: function(data) {
            alert(JSON.stringify(data))},

        error: function(data) {
            alert("Failure"); alert(JSON.stringify(data)) }
    });
}