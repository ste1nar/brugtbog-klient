/**
 * Created by STE1NAR on 04-11-2016.
 */

$(document).ready(function() {

    var $booksTableBody = $("#booksTableBody")

    $.ajax({
        url:"https://momentify.eu.ngrok.io/api/books",
        method: "GET",
        dataType: "json",
        contentType: "applications/json",

        success: function(books, status, xhr) {

              books.forEach(function(book) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" +  console.log("hey")</td>" +
                "<td>" + "</td>" +
                "<td>" + "</td>" +
                "<td>" +  "</td>" +
                "<td>" + "</td>" +
                "</tr>"
            );

        });

    },
    error: function(xhr, status, error) {
        console.log(xhr, status, error);
    },
});


});
