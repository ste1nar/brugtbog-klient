
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

        success: function(data) { alert(JSON.stringify(data));
            if(data.type == 1){
                window.location.href = "adminView.html";}
            else{
                window.location.href = "userView.html";
            }
        },
        error: function(data) { alert(JSON.stringify(data)); }
    });
}