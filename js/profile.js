var user = JSON.parse(localStorage.getItem("user"));

$("#MyProfileUsernameHeader").html(user.username);
$("#MyProfileUsername").html(user.username);
$("#MyProfilePhonenumber").html(user.phonenumber);
$("#MyProfileAddress").html(user.address);
$("#MyProfileEmail").html(user.email);

$("#MyProfileMobilepay").html(user.mobilepay);
$("#MyProfileTransfer").html(user.transfer);
$("#MyProfileCash").html(user.cash);

document.getElementById("textUpdateUserUsername").value = user.username;
document.getElementById("textUpdateUserEmail").value = user.email;
document.getElementById("textUpdateUserPhonenumber").value = user.phonenumber;
document.getElementById("textUpdateUserAddress").value = user.address;
document.getElementById("checkboxUpdateUserMobilepay").checked = user.mobilepay;
document.getElementById("checkboxUpdateUserTransfer").checked = user.transfer;
document.getElementById("checkboxUpdateUserCash").checked = user.cash;

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


