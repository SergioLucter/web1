class producto {
idProducto;
nombreProducto;
precioUnidad;
idCategoria;
constructor(idP,nomb,prec,idC){
this.idProducto=idP;
this.nombreProducto=nomb;
this.precioUnidad=prec;
this.idCategoria=idC;
}
}

class catalogo {
productos;
constructor(){
this.productos=[];
}
addProducto(idP,nomb,prec,idC){
let testPro = new producto(idP,nomb,prec,idC);
this.productos.push(testPro);
}
}
class lineaCuenta{
unidades;
idProducto;
constructor(und,idp){
this.unidades=und;
this.idProducto=idp;
}
}

class cuenta{
mesa;
lineasDeCuenta;
pagada;
constructor(mesa,paga){
this.mesa=mesa;
this.lineasDeCuenta=[];
this.pagada=paga;
}
addlineacuenta(lineacuenta) {
    let mensajeSalida = "";
    if (this.lineasDeCuenta.filter((elem) => elem.idProducto == lineacuenta.idProducto).length != 0) {
      mensajeSalida = "incrementando";
	  for(let i=0;i<this.lineasDeCuenta.length;i++){
		  if(this.lineasDeCuenta[i].idProducto==lineacuenta.idProducto){
			  this.lineasDeCuenta[i].unidades++;
		  }
		  
	  }
    } else {
      this.lineasDeCuenta.push(lineacuenta);
      mensajeSalida = "Alta cuenta OK";
    }
    return mensajeSalida;
  }
}


class gestor{
cuentas;
mesaActual;
constructor(mesaActual){
this.mesaActual=mesaActual;
this.cuentas=[];
}
addCuenta(cuenta) {
    let mensajeSalida = "";
    if (this.cuentas.filter((elem) => elem.mesa == cuenta.mesa).length != 0) {
      mensajeSalida = "cuenta registrada previamente";
    } else {
      this.cuentas.push(cuenta);
      mensajeSalida = "Alta cuenta OK";
    }
    return mensajeSalida;
  }
}

