
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
                $('#tblBooks').DataTable().row( $(row).parents('tr') ).remove().draw();
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