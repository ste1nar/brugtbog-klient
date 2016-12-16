
// getAds bliver kaldt på ads.html og userAds.html

function getAds () {

    $.ajax({
        <!-- URL til getads -->
        url:"https://localhost:8000/getads",
        <!-- HTTP requests metode -->
        method: "GET",
        dataType: "json",

        <!-- Ved success bliver en dataTable oprettet men nedenstående kolonner -->
        success: function(data) {

            $("#tableAds").dataTable({
                data: data,
                columns: [
                    { data: "adId" },
                    { data: "bookTitle" },
                    { data: "bookEdition" },
                    { data: "bookAuthor" },
                    { data: "isbn" },
                    { data: "userUsername" },
                    { data: "rating" },
                    { data: "price" },
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

// getMyAds bliver kaldt fra myAds.html
function getMyAds () {

    $.ajax({
        url:"https://localhost:8000/getmyads",
        method: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },

        success: function(data) {

        $("#tableMyAds").dataTable({
            data: data,
            columns: [
                { data: "adId" },
                { data: "price" },
                { data: "rating" },
                { data: "isbn" },
                { data: "comment" },
                { data: "locked" },
                { defaultContent: "<button type='button'>Slet</button>" }
            ]
        });

    },
    error: function(data) {
        alert(JSON.stringify(data));
    }
})
}

// Bliver ikke brugt
function getAd() {
    var adId = +$("#textGetAdId").val();

    $.ajax({
        url: "https://localhost:8000/getadpublic",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
            "id" : adId
        }),

        success: function(data) {
            $("#textGetAdId").val(data["adId"]);
            $("#textGetAdUsername").val(data["userUsername"]);
            $("#textGetAdISBN").val(data["isbn"]);
            $("#textGetAdTitle").val(data["bookTitle"]);
            $("#textGetAdAuthor").val(data["bookAuthor"]);
            $("#textGetAdEdition").val(data["bookEdition"]);
            $("#textGetAdMobilepay").val(data["userMobilepay"]);
            $("#textGetAdCash").val(data["userCash"]);
            $("#textGetAdTransfer").val(data["userTransfer"]);
            $("#textGetAdAddress").val(data["userAddress"]);
            $("#textGetAdComment").val(data["comment"]);
            $("#textGetAdRating").val(data["rating"]);
            $("#textGetAdPrice").val(data["price"]);

        },

        error: function(data) { alert("Failure"); alert(JSON.stringify(data)); }
    });
}

// Bliver kaldt, når knappen reserver knappen trykkes
function reserveAd (ad) {

    $.ajax({
        url: "https://localhost:8000/reservead",
        type: 'POST',
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id" : ad.adId
        }),

        success: function (data) {
            alert(JSON.stringify(data));
            window.location.href = "myReservations.html";
            },

        error: function(data) {
            alert(JSON.stringify(data));
        }
    })

}

// createAd bliver kaldt fra createAd.html
function createAd() {

    var isbn = +$("#textCreateAdIsbn").val();
    var rating = +$("#textCreateAdRating").val();
    var comment = $("#textCreateAdComment").val();
    var price = +$("#textCreateAdPrice").val();

    $.ajax({
        url: "https://localhost:8000/createad",
        type: "POST",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "isbn": isbn,
            "rating": rating,
            "comment": comment,
            "price": price
        }),

        success: function (data) {
            alert("Ad created");
            alert(JSON.stringify(data));
            window.location.href = "userAds.html";
        },
        error: function (data) {
            alert(JSON.stringify(data));
        }
    })
}

// deleteAd bliver kaldt fra MyAds.html når en bruger ønsker at slette sin annonce
function deleteAd (row, ad) {

    $.ajax({
        url: "https://localhost:8000/deletead",
        type: 'POST',
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id" : ad.adId
        }),

        success: function (data) {
            // Her fjernes den valgte række
            $('#tableMyAds').DataTable().row( $(row).parents('tr') ).remove().draw();
            alert("Annoncen med ID: "+ ad.adId + " er slettet." );
        },

        error: function(data) {
            alert(JSON.stringify(data));
        }
    })
}