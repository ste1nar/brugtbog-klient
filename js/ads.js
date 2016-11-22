
function getAds () {

    $.ajax({
        url:"https://localhost:8000/getads",
        method: "GET",
        dataType: "json",

        success: function(data) {

            $("#tblAds").dataTable({
                data: data,
                bDestroy: true,
                processing: true,
                columns: [
                    { data: "bookTitle" },
                    { data: "bookEdition" },
                    { data: "bookAuthor" },
                    { data: "isbn" },
                    { data: "rating" },
                    { data: "userMobilepay" },
                    { data: "userCash" },
                    { data: "userTransfer" }
                ]
            });

        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    })
}
