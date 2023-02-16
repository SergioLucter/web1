let catalogo1= new catalogo();
let bar = new gestor(0);

categorias = ["Bebidas", "Tostadas", "Bollería"];
prueba = [["Bebidas", "Tostadas", "Bollería"],["Bebidas", "Tostadas", "Bollería"],["Bebidas", "Tostadas", "Bollería"]];
  catalogo1.addProducto(1, "Café con leche", 0.95, 0);
  catalogo1.addProducto(2, "Té", 1.05, 0);
  catalogo1.addProducto(3, "Cola-cao", 1.35, 0);
  catalogo1.addProducto(4, "Chocolate a la taza", 1.95, 0);
  catalogo1.addProducto(5, "Media con aceite", 1.25, 1);
  catalogo1.addProducto(6, "Entera con aceite", 1.95, 1);
  catalogo1.addProducto(7, "Media con aceite y jamón", 1.95, 1);
  catalogo1.addProducto(8, "Entera con aceite y jamón", 2.85, 1);
  catalogo1.addProducto(9, "Media con mantequilla", 1.15, 1);
  catalogo1.addProducto(10, "Entera con mantequilla", 1.75, 1);
  catalogo1.addProducto(11, "Media con manteca colorá", 1.45, 1);
  catalogo1.addProducto(12, "Entera con manteca colorá", 2.15, 1);
  catalogo1.addProducto(13, "Croissant", 0.95, 2);
  catalogo1.addProducto(14, "Napolitana de chocolate", 1.45, 2);
  catalogo1.addProducto(15, "Caracola de crema", 1.65, 2);
  catalogo1.addProducto(16, "Caña de chocolate", 1.35, 2);
 console.log(catalogo1.productos);
 bar.addCuenta(new cuenta(1,true));
  bar.addCuenta(new cuenta(2,true));
   bar.addCuenta(new cuenta(3,true));
    bar.addCuenta(new cuenta(4,true));
	 bar.addCuenta(new cuenta(5,true));
	  bar.addCuenta(new cuenta(6,true));
	   bar.addCuenta(new cuenta(7,true));
	    bar.addCuenta(new cuenta(8,true));
		 bar.addCuenta(new cuenta(9,true));
 console.log(bar);
 bar.mesaActual=0;
 
  cargaCosas();
const apartado=document.getElementById("mesas");
apartado.addEventListener("click",function(event){
	document.getElementById("tabla").getElementsByTagName("TABLE")[0].innerHTML="";
	document.getElementById("cuenta").getElementsByTagName("h3")[0].innerHTML= "MESA "+event.target.innerHTML;
	let pac=document.getElementsByClassName("tecla");
for(let i=0;i<pac.length;i++){
	pac[i].addEventListener("click",tablita);	
}
bar.mesaActual=event.target.innerHTML;
if(bar.cuentas[bar.mesaActual-1].lineasDeCuenta.length>0){
	muestraTabla();
event.target.classList.add("ocupada");
}
else{
	document.getElementsByClassName("unidades")[0].innerHTML="unidades: 0";
	
};
});


function cargaCosas(){
	cambiaSelect();
let seleccionado = frmControles.categorias;
for (let i=0;i<9;i++){
document.getElementById("mesas").getElementsByTagName("span")[i].classList.add("libre");
}
document.getElementById("cuenta").innerHTML="<h2>Cuenta</h2> <h3>Mesa 1</h3><form><input type='button' id='botonPagar' value='pagar'><p class='unidades'></p></form><div id='tabla'><table></table><div>";
for(let i=0;i<categorias.length;i++){
seleccionado.innerHTML += "<option value='"+i+"'>"+categorias[i]+"</option>";}
frmControles.categorias.addEventListener('change',cambiaSelect);
document.getElementById('botonPagar').addEventListener("click",pagar);
} 
function tablita(){
	let producto= frmControles.productos.value;
	let lcuenta= new lineaCuenta(event.target.value,producto);
	console.log(frmControles.productos.value);
	bar.cuentas[bar.mesaActual-1].addlineacuenta(lcuenta);
	document.getElementsByClassName("mesa")[bar.mesaActual-1].classList.add("ocupada");
	document.getElementsByClassName("mesa")[bar.mesaActual-1].classList.remove("libre");
	if (bar.cuentas[bar.mesaActual-1].pagada){
		bar.cuentas[bar.mesaActual-1].pagada=false;
	}
	muestraTabla();
}

function cambiaSelect(){
frmControles.productos.innerHTML ="<option value=0>Seleccione un producto</option>";
let seleccionado = frmControles.categorias;
for(let i=0;i<catalogo1.productos.length;i++){
if(catalogo1.productos[i].idCategoria==seleccionado.value){
frmControles.productos.innerHTML += "<option value='"+catalogo1.productos[i].idProducto+"'>"+catalogo1.productos[i].nombreProducto+"</option>";}
}
}

let pb=document.getElementsByClassName("tecla");
for(let i=0;i<pb.length;i++){
pb[i].addEventListener("click",function(event){
let producto=frmControles.productos.value;
let ud=event.target.value;
let filita= new lineaCuenta(producto,ud);
});}
// en esta funcion se muestra la tabla y ademas se le añade a los botones de añadir y restar la funcion para poder sumar y restar unidades
function muestraTabla(){
	var c=0;
	var total=0;
	bar.cuentas[bar.mesaActual-1].lineasDeCuenta.forEach(function(pred){
		total= total+ parseInt(pred.unidades);
	});
	document.getElementById("tabla").getElementsByTagName("TABLE")[0].innerHTML="";
	document.getElementsByClassName("unidades")[0].innerHTML= "unidades: "+total;
	var table = document.getElementById("tabla").getElementsByTagName("TABLE")[0];
var row = table.insertRow(0);
bar.cuentas[bar.mesaActual-1].lineasDeCuenta.forEach(function(prub){
row.insertCell(0).innerHTML="<button class='mas'>+</button><button class='menos'>-</button>";
row.insertCell(1).innerHTML=prub.unidades;
row.insertCell(2).innerHTML=prub.idProducto;
row.insertCell(3).innerHTML=catalogo1.productos[prub.idProducto-1].nombreProducto + "(ud: "+catalogo1.productos[prub.idProducto-1].precioUnidad+")";
row.insertCell(4).innerHTML=(prub.unidades*catalogo1.productos[prub.idProducto-1].precioUnidad);
c++;
row = table.insertRow(c);
});
let pa=document.getElementsByClassName("mas");
for(let i=0;i<pa.length;i++){
pa[i].addEventListener("click",function(event){
	bar.cuentas[bar.mesaActual-1].lineasDeCuenta[i].unidades++;
	console.log(bar.cuentas[bar.mesaActual-1].lineasDeCuenta[i].unidades);
	muestraTabla();
	
});}
let pe=document.getElementsByClassName("menos");
for(let i=0;i<pa.length;i++){
pe[i].addEventListener("click",function(event){
bar.cuentas[bar.mesaActual-1].lineasDeCuenta[i].unidades--;
	console.log(bar.cuentas[bar.mesaActual-1].lineasDeCuenta[i].unidades);
	muestraTabla();
if(bar.cuentas[bar.mesaActual-1].lineasDeCuenta[i].unidades=="0"){
	bar.cuentas[bar.mesaActual-1].lineasDeCuenta.splice(i,1);
	console.log(bar.cuentas[bar.mesaActual-1].lineasDeCuenta);
	muestraTabla();
}});}
	
	
}
// en esta funcion se paga y se deja la mesa vacia 
function pagar(){
		var totalPag=0;
	bar.cuentas[bar.mesaActual-1].lineasDeCuenta.forEach(function(pred){
		totalPag= totalPag+ parseFloat(pred.unidades*catalogo1.productos[pred.idProducto-1].precioUnidad);
	});
	bar.cuentas[bar.mesaActual-1].lineasDeCuenta=[];
	bar.cuentas[bar.mesaActual-1].pagada=true;
	muestraTabla();
	document.getElementsByClassName("mesa")[bar.mesaActual-1].classList.add("libre");
	document.getElementsByClassName("mesa")[bar.mesaActual-1].classList.remove("ocupada");
	alert("se ha pagado con exito el total pagado ha sido "+totalPag);
	
}





