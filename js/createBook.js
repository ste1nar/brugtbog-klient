
function createBook() {

    var title = $("#textCreateBookTitle").val();
    var edition = $("#textCreateBookEdition").val();
    var author = $("#textCreateBookAuthor").val();
    var isbn = +$("#textCreateBookIsbn").val();

    $.ajax({
        url: "https://localhost:8000/createbook",
        type: "POST",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "title": title,
            "edition": edition,
            "author": author,
            "isbn": isbn
        }),

        success: function (data) {
            alert("Book created");
            alert(JSON.stringify(data));
            window.location.href = "books.html";
        },
        error: function (data) { alert("Error"); alert(JSON.stringify(data))}
    })
}