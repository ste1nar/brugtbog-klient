
function createAd() {

    console.log(isbn, rating, comment, price);

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
