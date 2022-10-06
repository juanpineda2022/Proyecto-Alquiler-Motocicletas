function getElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "GET",
        dataType: "JSON",

        success: function(moto) {
            //console.log(moto);

            let mt=moto.items;
            $("table tbody").empty();
            for(i=0; i<mt.length; i++){
                var info=$("<tr><td>"+mt[i].name+"</td><td>"+mt[i].model+"</td><td>"+mt[i].brand+"</td><td>"+mt[i].category_id+"</td><td><button onclick='deleteElementos("+mt[i].id+")'>Borrar</button></td></tr>");
                $("table tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}

function saveElementos(){
    let idMoto=$("#idMt").val();
    let nameM=$("#nameMt").val();
    let brandM=$("#brandMt").val();
    let modelM=$("#modelMt").val();
    let categoryM=$("#categoryIdMt").val();

    let data={
        id:idMoto,
        name:nameM,
        brand:brandM,
        model:modelM,
        category_id:categoryM
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "POST",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
                $("#idMt").val("");
                $("#nameMt").val("");
                $("#brandMt").val("");
                $("#modelMt").val("");
                $("#categoryIdMt").val("");

        },
        error : function(xhr, status) {
            //alert('ha sucedido un error');
        },
        complete: function(){
            getElementos();
        }
    });
}

function updateElementos(){
    let idMoto=$("#idMt").val();
    let nameM=$("#nameMt").val();
    let brandM=$("#brandMt").val();
    let modelM=$("#modelMt").val();
    let categoryM=$("#categoryIdMt").val();

    let data={
        id:idMoto,
        name:nameM,
        brand:brandM,
        model:modelM,
        category_id:categoryM
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "PUT",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            console.log("se ha actualizado")
            $("#idMt").val("");
            $("#nameMt").val("");
            $("#brandMt").val("");
            $("#modelMt").val("");
            $("#categoryIdMt").val("");

        },
        error : function(xhr, status) {
            //alert('ha sucedido un error');
        },
        complete: function(){
            getElementos();
        }
    });
}

function deleteElementos(idMoto){
    let data={
        id:idMoto
    };

    let dataToSend=JSON.stringify(data);
    //console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/moto/moto",
        type: "DELETE",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            $("#idMt").val("");

        },
        error : function(xhr, status) {
            //alert('ha sucedido un error');
        },
        complete: function(){
            getElementos();
        }
    });
}

function loadTabla(){
    window.onload = () => {
        getElementos(info);
    };
}
