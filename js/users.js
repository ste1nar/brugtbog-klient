function getUsers () {

    $.ajax({
        url:"https://localhost:8000/getusers",
        method: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },

        success: function(data) {

            $("#tblUsers").dataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    { data: "userId" },
                    { data: "username" },
                    { data: "password" },
                    { data: "email" },
                    { data: "phonenumber" },
                    { data: "address" },
                    { data: "mobilepay" },
                    { data: "cash" },
                    { data: "transfer" },
                    { data: "type" }
                ]
            });

        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    })
}