function getAllElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/",
        type: "GET",
        dataType: "JSON",

        success: function(message) {
            console.log(message);

            let mj=message.items;
            $("#tablaMensajes tbody").empty();
            for(i=0; i<mj.length; i++){
                var info=$("<tr><td>"+mj[i].id+"</td><td>"+mj[i].messagetext+"</td></tr>");
                $("#tablaMensajes tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}

