
function getAds () {

    $.ajax({
        url:"https://localhost:8000/getads",
        method: "GET",
        dataType: "json",

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


function getMyAds (x, user) {

    $.ajax({
        url:"https://localhost:8000/getmyads",
        method: "GET",
        dataType: "json",
        data: JSON.stringify({
            "userId" : user.userId
    }),

        success: function(data) {

        $("#tableMyAds").dataTable({
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
                { data: "locked" }
            ]
        });

    },
    error: function(data) {
        alert(JSON.stringify(data));
    }
})
}


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

function getAdSelect(adId) {

    var adId2 = +$("#textAdId").val();

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

function reserveAd (x, ad) {

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

