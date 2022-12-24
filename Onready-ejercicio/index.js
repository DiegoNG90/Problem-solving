class Vehiculo{
    constructor(nombre, precio,marca, modelo){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.modelo = modelo;
    }
    brand() {
        return (`Marca: ${this.marca}`);
    }
    model(){
        return (`Modelo: ${this.modelo}`);
    }
    price(){
        let precio = String(this.precio)
        let precioString = "$" + String( this.precio ) ;
        for (let i = 0; i < precioString.length; i++) {
            if (precioString[i] === ".") {
                // precioString[i].replace(".", ",");

                precioString = precioString.slice(0,i) + precioString[i].replace(".", ",") + precio.slice(i,  precio.length)
            }
            
        }
        // switch (precio.length) {
        //     case 4:
        //         precioString[2] = "."
        //         break;
        //     case value:
            
        //         break;
        //     case value:
                
        //         break;
        //     default:
        //         break;
        // }
        return precioString
    }
}
class Moto extends Vehiculo{
    constructor(nombre, precio, marca, modelo, cilindrada){
        super(nombre, precio, marca, modelo);
        this.cilindrada = cilindrada;
        
    }
    cilinder(){
        return (`Cilindrada: ${this.cilindrada} `);
    }
    consultaGlobal(){
        return (`${this.brand()} // ${this.model()} // ${this.cilinder()} // ${this.price()}`);
    }
}

class Automovil extends Vehiculo {
    constructor(nombre, precio, marca, modelo, puertas = 4){
        super(nombre, precio, marca, modelo);
        this.puertas = puertas;
    }
    doors(){
        return (`Puertas: ${this.puertas}`)
    }
    consultaGlobal(){
        return (`${this.brand()} // ${this.model()} // ${this.doors()} // ${this.price()}`);
    }
}
const p206 = new Automovil("Automovil", 200000.00, "Peugeot", "206");
console.log( p206.consultaGlobal() ); 

const titan = new Moto("Moto", 60000.00, "Honda", "Titan", "125cc")
console.log( titan.consultaGlobal() );

const p208 = new Automovil ("Automovil", 250000.00, "Peugeot", "208", 5)
console.log( p208.consultaGlobal() );

const ybr = new Moto ("Moto", 80500.50, "Yamaha", "YBR", "160cc")
console.log( ybr.consultaGlobal() );

const separador = "============================="
console.log(separador);


const vehiculos = [ p206, titan, p208, ybr];
// console.log(vehiculos);

function vehiculoSegunPrecio (altoOBajo){
    function mayorPrecio(booleano) {
        const arrPrecios = [];
        vehiculos.forEach((element) => {
            arrPrecios.push( element.precio);
        })
        let preciosOrdenados = arrPrecios.sort((a,b)=> {
            return b-a
        })
        const mayorPrecio = preciosOrdenados[0];
        const menorPrecio = preciosOrdenados[preciosOrdenados.length-1]
        // console.log("El mayor precio es", mayorPrecio, "\nEl menor precio es ", menorPrecio);
        if (booleano === true) {
            return mayorPrecio;        
        }else {
            return menorPrecio;
        }
    }

    function vehiculoObjeto(precio) {
        const obj = {}
        vehiculos.forEach((element) => {
            if (element.precio === precio) {
                obj.marca = element.marca;
                obj.modelo = element.modelo;
                obj.precio = element.precio;
            }
        })
        return obj;
    }
    if (altoOBajo === true) {
        return vehiculoObjeto(mayorPrecio(true))
    }else if (altoOBajo === false){
        return vehiculoObjeto(mayorPrecio(false))
    }else{
        throw console.error("Error! Se debe especificar si busca el mayor o menor precio");
    }
    
}

const elVehiculoMasCaro = vehiculoSegunPrecio(true); 
console.log("Vehículo más caro: " + elVehiculoMasCaro.marca + " " + elVehiculoMasCaro.modelo );

const elVehiculoMasBarato = vehiculoSegunPrecio(false);
console.log("Vehículo más barato: " + elVehiculoMasBarato.marca + " " + elVehiculoMasBarato.modelo );

function vehiculoQueContieneEnElModeloLaY() {
    const vehiculoY = vehiculos.filter((element) => {
        return element.modelo[0] === "Y";
    })
    return console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + vehiculoY[0].marca + " " +vehiculoY[0].modelo + " "+ vehiculoY[0].precio);
}

vehiculoQueContieneEnElModeloLaY()
console.log(separador);

