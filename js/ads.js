
function getAds () {

    $.ajax({
        url:"https://localhost:8000/getads",
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

function reserveAd (ad) {

    $.ajax({
        url: "https://localhost:8000/reservead",
        type: 'POST',
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "adId" : ad.adId,
            "userId" : ad.userId
        }),

        success: function (data) {
            alert(JSON.stringify(data));
            alert("Annonce er reserveret");
            },

        error: function(data) {
            alert(JSON.stringify(data));
        }
    })
}
