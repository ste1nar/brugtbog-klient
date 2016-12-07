function getMyReservations(){

    $.ajax({
        url: "https://localhost:8000/getmyreservations",
        type: "GET",
        dataType: "json",
        xhrFields: { withCredentials: true },

        success: function(data) {

            $("#tableMyReservations").dataTable({
                data: data,
                columns: [
                    { data : "adId" },
                    { data : "bookIsbn" },
                    { data : "timestamp" },
                    { defaultContent: "<button type='button'>Annuller</button>" }
                ]
            });
        },
        error: function(data) { alert(JSON.stringify(data)); }
    });
}

function deleteReservation(row, ad){

    $.ajax({
        url: "https://localhost:8000/deletereservation",
        type: "POST",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "id" : ad.adId
        }),

        success: function(data) {
            $('#tableMyReservations').DataTable().row( $(row).parents('tr') ).remove().draw();
            alert(JSON.stringify(data));
            },
        error: function(data) {
            alert(JSON.stringify(data)) }
    });
}