
// login funktionen
function login() {

    var username = $("#username").val();
    var password = $("#password").val();
    var type = $("#type").val();

    $.ajax({
        url: "https://localhost:8000/login",
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "username" : username,
            "password" : password
        }),

        // ved success bliver brugerens oplysninger gemt og hentet inde på localstorage
        success: function(data) { alert(JSON.stringify(data));
            localStorage.clear("user");
            localStorage.setItem("user", JSON.stringify(data));

            var user = JSON.parse(localStorage.getItem("user"));
            user.username = $("#currentUserName");

            // Hvis admin (type == 1) vises adminView.html
            if(data.type == 1){
                window.location.href = "adminView.html";
                // Hvis bruger vises userView.html
            }else{
                window.location.href = "userView.html";
            }
        },
        error: function(data) { alert(JSON.stringify(data)); }
    });
}