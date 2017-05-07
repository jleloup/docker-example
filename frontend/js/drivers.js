$(document).ready(function(){
    $.ajax({url : "http://localhost:5000/drivers",
            dataType : 'json',
            success : function(data){
                var container = $("#drivers")

                var content = ""

                for (driver of data) {
                    content += "<li>" + driver + "</li>"
                }

                container.append("<h1>Drivers</h1><p><ul>" + content + "</ul></p>")
             }
    }).fail(function(e){
        console.log("ko!");
    });
});

