
function createBook() {

    var isbn = $("#isbn").val();
    var rating = $("#rating").val();
    var comment = $("#comment").val();
    var price = $("#price").val();

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

        }
    })
}
