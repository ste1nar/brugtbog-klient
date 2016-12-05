
function getAds () {

    $.ajax({
        url:"https://localhost:8000/getmyads",
        method: "GET",
        dataType: "json",

        success: function(data) {

            $("#tblAds").dataTable({
                data: data,
                columns: [
                    { data: "bookTitle" },
                    { data: "bookEdition" },
                    { data: "bookAuthor" },
                    { data: "isbn" },
                    { data: "userUsername" },
                    { data: "rating" },
                    { data: "price" },
                    { data: "comment" },
                    { data: "locked" },
                    { defaultContent: "<button type='button'>Reserver</button>" }
                ]
            });

        },
        error: function(data) {
            alert(JSON.stringify(data));
        }
    })
}
