function getElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/",
        type: "GET",
        dataType: "JSON",

        success: function(client) {
            console.log(client);

            let ct=client.items;
            $("table tbody").empty();
            for(i=0; i<ct.length; i++){
                var info=$("<tr><td>"+ct[i].name+"</td><td>"+ct[i].email+"</td><td>"+ct[i].age+"</td><td><button onclick='deleteElementos("+ct[i].id+")'>Borrar</button></td></tr>");
                $("table tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}

function saveElementos(){
    let idC=$("#idCt").val();
    let nameC=$("#nameCt").val();
    let emailC=$("#emailCt").val();
    let ageC=$("#ageCt").val();

    let data={
        id:idC,
        name:nameC,
        email:emailC,
        age:ageC,
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/",
        type: "POST",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
                $("#idCt").val("");
                $("#nameCt").val("");
                $("#emailCt").val("");
                $("#ageCt").val("");
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
    let idC=$("#idCt").val();
    let nameC=$("#nameCt").val();
    let emailC=$("#emailCt").val();
    let ageC=$("#ageCt").val();

    let data={
        id:idC,
        name:nameC,
        email:emailC,
        age:ageC,
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/",
        type: "PUT",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            console.log("se ha actualizado")
            $("#idCt").val("");
            $("#nameCt").val("");
            $("#emailCt").val("");
            $("#ageCt").val("");

        },
        error : function(xhr, status) {
            //alert('ha sucedido un error');
        },
        complete: function(){
            getElementos();
        }
    });
}

function deleteElementos(idCt){
    let data={
        id:idCt
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/",
        type: "DELETE",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            $("#idCt").val("");

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
