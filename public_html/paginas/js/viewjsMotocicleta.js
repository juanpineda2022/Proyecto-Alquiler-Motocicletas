function getAllElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "GET",
        dataType: "JSON",

        success: function(moto) {
            //console.log(moto);

            let mt=moto.items;
            $("#tablaMotocicletas tbody").empty();
            for(i=0; i<mt.length; i++){
                var info=$("<tr><td>"+mt[i].name+"</td><td>"+mt[i].model+"</td><td>"+mt[i].brand+"</td><td>"+mt[i].category_id+"</td></tr>");
                $("#tablaMotocicletas tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}

