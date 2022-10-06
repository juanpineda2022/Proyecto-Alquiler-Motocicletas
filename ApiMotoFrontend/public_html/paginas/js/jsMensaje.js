function getElementos(){
    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/",
        type: "GET",
        dataType: "JSON",

        success: function(message) {
            console.log(message);

            let mj=message.items;
            $("table tbody").empty();
            for(i=0; i<mj.length; i++){
                var info=$("<tr><td>"+mj[i].id+"</td><td>"+mj[i].messagetext+"</td><td><button onclick='deleteElementos("+mj[i].id+")'>Borrar</button></td></tr>");
                $("table tbody:last").append(info);
            }

        },
        error : function(xhr, status) {
            alert('ha sucedido un error');
        }
    });
}

function saveElementos(){
    let idM=$("#idMj").val();
    let messageMj=$("#txtMj").val();

    let data={
        id:idM,
        messagetext:messageMj
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/",
        type: "POST",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
                $("#idMj").val("");
                $("#txtMj").val("");
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
    let idM=$("#idMj").val();
    let messageMj=$("#txtMj").val();

    let data={
        id:idM,
        messagetext:messageMj
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/",
        type: "PUT",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            console.log("se ha actualizado")
            $("#idMj").val("");
            $("#txtMj").val("");

        },
        error : function(xhr, status) {
            //alert('ha sucedido un error');
        },
        complete: function(){
            getElementos();
        }
    });
}

function deleteElementos(idMj){
    let data={
        id:idMj
    };

    let dataToSend=JSON.stringify(data);
    console.log(dataToSend);

    $.ajax({
        url: "https://g38e6cf3f50dd16-proyectopruebas1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/",
        type: "DELETE",
        data: dataToSend,
        dataType: "JSON",
        contentType:'application/json',

        success: function(exito) {
            console.log(exito);
            $("#idMj").val("");

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
