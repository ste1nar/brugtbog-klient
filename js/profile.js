
var user = JSON.parse(localStorage.getItem("user"));
$("#MyProfileUsernameHeader").html(user.username);
$("#MyProfileUsername").html(user.username);
$("#MyProfilePassword").html(user.password);
$("#MyProfilePhonenumber").html(user.phonenumber);
$("#MyProfileAddress").html(user.address);
$("#MyProfileEmail").html(user.email);

$("#MyProfileMobilepay").html(user.mobilepay);
$("#MyProfileTransfer").html(user.transfer);
$("#MyProfileCash").html(user.cash);

function profile(){

    $.ajax({
        url: "https://localhost:8000/getuser",
        type: "json",
        method: "GET",
        xhrFields: { withCredentials: true },

        success: function (data) {
            alert(JSON.stringify(data));
            //localStorage.clear("user");
            //localStorage.setItem("user", JSON.stringify(data));
        },

        error: function(data) { alert(JSON.stringify(data));
        }
    })
}


