
function createUser() {

    var username = $("#textCreateUserUsername").val();
    var password = $("#textCreateUserPassword").val();
    var email = $("#textCreateUserEmail").val();
    var phonenumber = +$("#textCreateUserPhonenumber").val();
    var address = $("#textCreateUserAddress").val();
    var mobilepay = +$("#checkboxCreateUserMobilepay").prop("checked");
    var transfer = +$("#checkboxCreateUserTransfer").prop("checked");
    var cash = +$("#checkboxCreateUserCash").prop("checked");


    $.ajax({
        url: "https://localhost:8000/createuser",
        type: "POST",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "phonenumber": phonenumber,
            "address": address,
            "mobilepay": mobilepay,
            "transfer": transfer,
            "cash": cash
        }),

        success: function (data) {
            alert("User created");
            alert(JSON.stringify(data));
        },
        error: function (data) { alert("Error"); alert(JSON.stringify(data))}
    })

}


function createUserAdmin() {

    var username = $("#textCreateUserUsername").val();
    var password = $("#textCreateUserPassword").val();
    var email = $("#textCreateUserEmail").val();
    var phonenumber = +$("#textCreateUserPhonenumber").val();
    var address = $("#textCreateUserAddress").val();
    var mobilepay = +$("#checkboxCreateUserMobilepay").prop("checked");
    var transfer = +$("#checkboxCreateUserTransfer").prop("checked");
    var cash = +$("#checkboxCreateUserCash").prop("checked");


    $.ajax({
        url: "https://localhost:8000/createuser",
        type: "POST",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "phonenumber": phonenumber,
            "address": address,
            "mobilepay": mobilepay,
            "transfer": transfer,
            "cash": cash
        }),

        success: function (data) {
            alert("User created");
            alert(JSON.stringify(data));
            window.location.href = "users.html";
        },
        error: function (data) { alert("Error"); alert(JSON.stringify(data))}
    })

}