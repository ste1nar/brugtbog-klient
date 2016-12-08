
    function getBooksAdmin () {

        $.ajax({
            url:"https://localhost:8000/getbooks",
            method: "GET",
            dataType: "json",

            success: function(data) {

                $("#tableBooks").dataTable({
                   data: data,
                    processing: true,
                    bDestroy: true,
                    columns: [
                        { data: "title" },
                        { data: "edition" },
                        { data: "author" },
                        { data: "isbn" },
                        { defaultContent: "<button type='button'>Slet</button>" }
                    ]
                });

            },
            error: function(data) {
                alert(JSON.stringify(data));
            }
        })
    }


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
    
    function deleteBook (row, book) {

    console.log(book.title);

        $.ajax({
            url: "https://localhost:8000/deletebook",
            type: 'POST',
            dataType: "json",
            xhrFields: {withCredentials: true},
            data: JSON.stringify({
                "isbn" : book.isbn
            }),

            success: function (data) {
                $('#tableBooks').DataTable().row( $(row).parents('tr') ).remove().draw();
                alert("Bogen: " + book.title +" med ISBN: "+ book.isbn + " er slettet." );
            },

            error: function(data) {
                alert(JSON.stringify(data));
            }
        })
    }

    function getBooks () {

        $.ajax({
            url:"https://localhost:8000/getbooks",
            method: "GET",
            dataType: "json",

            success: function(data) {

                $("#tableBooks").dataTable({
                    data: data,
                    processing: true,
                    bDestroy: true,
                    columns: [
                        { data: "title" },
                        { data: "edition" },
                        { data: "author" },
                        { data: "isbn" }
                    ]
                });

            },
            error: function(data) {
                alert(JSON.stringify(data));
            }
        })
    }