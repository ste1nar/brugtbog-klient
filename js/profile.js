
function profile(){

    $.ajax({
        url: "https://localhost:8000/getuser",
        type: "json",
        method: "GET",
        xhrFields: { withCredentials: true },

        success: function (data) {
            console.log(JSON.stringify(data));
        },

        error: function(data) { alert(JSON.stringify(data));},

        // Storage: {
        //     prefix: "BookStoreSDK",
        //     persist: function (key, value) {
        //         window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        //     },
        //     load: function (key) {
        //         var val = window.localStorage.getItem(this.prefix + key);
        //         try {
        //             return JSON.parse(val);
        //         }
        //         catch (e){
        //             return val;
        //         }
        //     },
        //     remove:function (key) {
        //         window.localStorage.removeItem(this.prefix + key);
        //     }
        // }
    })
}


