// brugeroplysninger bliver hentet fra localstorage
var user = JSON.parse(localStorage.getItem("user"));

// brugeroplysninger gøres tilgængelige for myProfile.html
$("#MyProfileUsernameHeader").html(user.username);
$("#MyProfileUsername").html(user.username);
$("#MyProfilePhonenumber").html(user.phonenumber);
$("#MyProfileAddress").html(user.address);
$("#MyProfileEmail").html(user.email);

$("#MyProfileMobilepay").html(user.mobilepay);
$("#MyProfileTransfer").html(user.transfer);
$("#MyProfileCash").html(user.cash);

// brugeroplysninger gøres tilgængelige for updateProfile (sættes ind i tekstboksene)
document.getElementById("textUpdateUserUsername").value = user.username;
document.getElementById("textUpdateUserEmail").value = user.email;
document.getElementById("textUpdateUserPhonenumber").value = user.phonenumber;
document.getElementById("textUpdateUserAddress").value = user.address;
document.getElementById("checkboxUpdateUserMobilepay").checked = user.mobilepay;
document.getElementById("checkboxUpdateUserTransfer").checked = user.transfer;
document.getElementById("checkboxUpdateUserCash").checked = user.cash;

// profile funktionen bliver kaldt fra myProfile.html
function profile(){

    $.ajax({
        url: "https://localhost:8000/getuser",
        type: "json",
        method: "GET",
        xhrFields: { withCredentials: true },

        success: function (data) {
            alert(JSON.stringify(data));
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.clear("user");
        },

        error: function(data) { alert(JSON.stringify(data));
        }
    })
}

// updateUser kaldes fra updateProfile.html
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


function getMyReservations(){

    $.ajax({
        url: "https://localhost:8000/getmyreservations",
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },

        success: function(data) {

            $("#tableMyReservations").dataTable({
                data: data,
                columns: [
                    { data : "adId" },
                    { data : "bookIsbn" },
                    { data : "timestamp" },
                    { data : "userUsername" },
                    { data : "userPhonenumber" },
                    { defaultContent: "<button type='button'>Annuller</button>" }
                ]
            });
        },
        error: function(data) { alert(JSON.stringify(data)); }
    });
}

// deleteReservation bliver kaldt, når der trykkes på slet-knappen inde på myReservations.html
function deleteReservation(row, ad){

    $.ajax({
        url: "https://localhost:8000/deletereservation",
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "id" : ad.adId
        }),

        success: function(data) {
            $('#tableMyReservations').DataTable().row( $(row).parents('tr') ).remove().draw();
            alert(JSON.stringify(data));
        },
        error: function(data) {
            alert(JSON.stringify(data)) }
    });
}