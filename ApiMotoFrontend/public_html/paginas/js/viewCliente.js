function getAllElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/",
        type: "GET",
        dataType: "JSON",

        success: function(client) {
            console.log(client);

            let ct=client.items;
            $("#tablaClientes tbody").empty();
            for(i=0; i<ct.length; i++){
                var info=$("<tr><td>"+ct[i].name+"</td><td>"+ct[i].email+"</td><td>"+ct[i].age+"</td></tr>");
                $("#tablaClientes tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}
