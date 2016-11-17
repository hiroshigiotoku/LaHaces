function Evento(id, nombre, fecha, hora) {
	this.id = id;
	this.nombre = nombre;
	this.fecha =  fecha;
	this.hora = hora;
	//this.lugar = lugar;
}

var eventosAll = [];

$(document).ready(function() {


    $(".boton_crear_evento").click(function(){



    });

    $("#saveEvent").click(function(){

        var name = $("#nombre").val();
        var fecha = $("#fecha").val();
        var time = $("#time").val();

        var id = eventosAll.length;

        $("#crear_evento").hide();

        var evento = new Evento(id, name, fecha, time);

        eventosAll.push(evento);

        for (var i = 0; i < eventosAll.length; i++) {
        //for (var e in eventosAll){
            console.log(eventosAll[i]);
        $("#lista").html(eventosAll[i].nombre);
        }

        //$("#home").show();

    });


    $.ajax({

                url: "http://localhost/lahaces/" + user + "&" + password,
                success: function(json){
                    if(Object.keys(json).length!=0){

                        var trueorfalse = json.trueorfalse;



                    }}});

});

