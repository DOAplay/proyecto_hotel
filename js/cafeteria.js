var $total=0;
$("#vaklava").on("click",function(){
   var $precio=32;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#tarta").on("click",function(){
   var $precio=32;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#ashura").on("click",function(){
   var $precio=38;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#sake").on("click",function(){
   var $precio=39;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#te").on("click",function(){
   var $precio=38;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#cafe").on("click",function(){
   var $precio=42;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#naranjada").on("click",function(){
   var $precio=36;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#espagueti").on("click",function(){
   var $precio=8.50;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#penne").on("click",function(){
   var $precio=18.50;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#champiñones").on("click",function(){
   var $precio=20;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#boloñesa").on("click",function(){
   var $precio=20;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#harira").on("click",function(){
   var $precio=36;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#dan").on("click",function(){
   var $precio=42;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#pollo").on("click",function(){
   var $precio=32;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#torta").on("click",function(){
   var $precio=26;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#canape").on("click",function(){
   var $precio=24;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#chuleta").on("click",function(){
   var $precio=32;
   $total=$total+$precio;
   $("#granTotal").text($total);
});

var $total=0;
$("#sushi").on("click",function(){
   var $precio=26;
   $total=$total+$precio;
   $("#granTotal").text($total);
});








$(document).ready(function(){   
   
   $("#vaklava").click(function(e){
      var vaklava = $('<div id="pedido" value="1">Cafe Diablo</div>');
      vaklava.appendTo($(".pedido"));
   });

   $("#tarta").click(function(e){
      var tarta = $('<div id="pedido" value="2">Moka</div>');
      tarta.appendTo($(".pedido"));
   });

   $("#ashura").click(function(e){
      var ashura = $('<div id="pedido" value="3">Capuchino</div>');
      ashura.appendTo($(".pedido"));
   });

   $("#sake").click(function(e){
      var ashura = $('<div id="pedido" value="4">Cafe con sake</div>');
      ashura.appendTo($(".pedido"));
   });

   $("#te").click(function(e){
      var te = $('<div id="pedido" value="5">Oreo-frappe</div>');
      te.appendTo($(".pedido"));
   });

   $("#cafe").click(function(e){
      var cafe = $('<div id="pedido" value="6">Frappe-Strawberry</div>');
      cafe.appendTo($(".pedido"));
   });

   $("#naranjada").click(function(e){
      var naranjada = $('<div id="pedido" value="7">Frapuchino</div>');
      naranjada.appendTo($(".pedido"));
   });

   $("#espagueti").click(function(e){
      var espagueti = $('<div id="pedido" value="8">Cupcake Vainilla</div>');
      espagueti.appendTo($(".pedido"));
   });

   $("#penne").click(function(e){
      var penne = $('<div id="pedido" value="9">Pastel 3 chocolates</div>');
      penne.appendTo($(".pedido"));
   });

   $("#champiñones").click(function(e){
      var champiñones = $('<div id="pedido" value="10">Pastel de elote</div>');
      champiñones.appendTo($(".pedido"));
   });

   $("#boloñesa").click(function(e){
      var boloñesa = $('<div id="pedido" value="11">Creme Broule</div>');
      boloñesa.appendTo($(".pedido"));
   });

   $("#harira").click(function(e){
      var harira = $('<div id="pedido" value="12">Infusion de Jazmin</div>');
      harira.appendTo($(".pedido"));
   });

   $("#dan").click(function(e){
      var dan = $('<div id="pedido" value="13">Infusion de Rosas</div>');
      dan.appendTo($(".pedido"));
   });

   $("#pollo").click(function(e){
      var pollo = $('<div id="pedido" value="14">Infusion de Fresa y Jengibre</div>');
      pollo.appendTo($(".pedido"));
   });


   $("#torta").click(function(e){
      var torta = $('<div id="pedido" value="15">Submarino de sabor</div>');
      torta.appendTo($(".pedido"));
   });

   $("#canape").click(function(e){
      var canape = $('<div id="pedido" value="16">Submarino de cola</div>');
      canape.appendTo($(".pedido"));
   });


   $("#chuleta").click(function(e){
      var chuleta = $('<div id="pedido" value="17">Chocolate caliente</div>');
      chuleta.appendTo($(".pedido"));
   });

   $("#sushi").click(function(e){
      var sushi = $('<div id="pedido" value="18">Chocolate Prehispanico</div>');
      sushi.appendTo($(".pedido"));
   });


       $("#total1").click(function(e){
      var total = $('<div id="pedido" value="28">total</div>',$total);
      total.appendTo($(".pedido"));
   });

})
