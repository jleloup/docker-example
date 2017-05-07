$(document).ready(function(){
    $.ajax({url : "http://localhost:5000/motos",
            dataType : 'json',
            success : function(data){
                var container = $("#motos")
                var content = ""

                for (vendor in data) {

                    content += "<li><p>" + vendor + "</p><ul>"

                    for (moto of data[vendor]) {
                        content += "<li>" + moto + "</li>"
                    }

                    content += "</ul></li>"
                }

                container.append("<h1>Motos</h1><p><ul>" + content + "</ul></p>")
             }
    }).fail(function(e){
        console.log("ko!");
    });
});
