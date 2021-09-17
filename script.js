//Ejemplo explicado en clase.

class Pelicula {
    constructor(nombre, genero, anio, pais) {

        this.nombre = nombre;
        this.genero = genero;
        this.anio = anio;
        this.pais = pais;

        this.info = () => {
            console.log("La pelicula " + this.nombre + " es de genero " + this.genero)
        }

        this.cambiarGenero = function(nuevoGenero) {
            this.genero = nuevoGenero;
        }

    }
}
const peliculaUno = new Pelicula("Esperando la carroza", "comedia", "1990", "Argentina")
const peliculaDos = new Pelicula("Relatos salvajes", "drama", 2015, 10)
peliculaUno.info();
peliculaUno.cambiarGenero("Ciencia Ficcion")
peliculaUno.info();


// a) Crear un constructor de personas con las siguientes características: Nombre, apodo, hobbies, película favorita, lugar de residencia. 
// b) Agregarle un método que muestre por consola un mensaje personalizado presentándose con su nombre y características definidas.
// (Ej: “Hola, soy Gerardo pero me dicen Gerard, soy de Miramar y mis hobbies son…”)
// c) Crear una instancia del objeto persona por cada persona que haya en su equipo. 
// d) Luego , mostrar por consola el saludo personalizado de cada uno :)

class personas {

    constructor(nombre, apodo, hobbies, peliculaFavorita, lugarResidencia) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.hobbies = hobbies;
        this.peliculaFavorita = peliculaFavorita;
        this.lugarResidencia = lugarResidencia,

            this.info = () => {
                console.log(`Hola mi nombre es ${alberto.nombre},me apodan ${alberto.apodo}, mi hobbie es ${alberto.hobbies}, mi peli favorita es ${alberto.peliculaFavorita} y mi lugar de residencia es ${alberto.lugarResidencia}`)
            }

    }

}

// Instancias del objeto por cada integrante del equipo.
const alberto = new personas("Alberto", "Beto", "Jugar Poker", "Forrest Gump", "San Nicolás de los Arroyos");
const natalia = new personas("Natalia", "pipi", "jugar juegos", "Orgullo y prejuicio", "CABA");
const gaston = new personas("Gaston", "tonga", "leer", "bastardos sin Gloria", "San martin");
const juan = new personas("Juan Ignacio", "Juani", "Hacer música", "Matrix", "Villa Luzuriaga");

// Llamar método.
alberto.info();

console.log(`Su nombre es ${natalia.nombre}, la apodan ${natalia.apodo}, su hobbie es ${natalia.hobbies}, su peli favorita es ${natalia.peliculaFavorita} y su lugar de residencia es ${natalia.lugarResidencia}`);
console.log(`Su nombre es ${gaston.nombre}, lo apodan ${gaston.apodo}, su hobbie es ${gaston.hobbies}, su peli favorita es ${gaston.peliculaFavorita} y su lugar de residencia es ${gaston.lugarResidencia}`);
console.log(`Su nombre es ${juan.nombre}, lo apodan ${juan.apodo}, su hobbie es ${juan.hobbies}, su peli favorita es ${juan.peliculaFavorita} y su lugar de residencia es ${juan.lugarResidencia}`);


/* 2) a) Crear un tipo de objeto “cuenta bancaria” que tenga los siguientes datos: Tipo de cuenta (Caja de ahorro, o cuenta corriente), saldo, titular y red que opera (link o Banelco).
// b) Incluir la acción de retirar dinero, que reciba un parámetro y actualice el nuevo valor del saldo.
// c) Incluir la acción de depositar dinero, que recibe un parámetro y actualice el nuevo valor del saldo.
// d) Incluir la acción de mostrar un saludo personalizado al titular, dandole la bienvenida a su red. (“Ej: Bienvenida Claudia a la red Banelco”).
// e) Incluir la acción de mostrar el saldo.
// f) Incluir otras acciones que consideren.
// g) Crear diferentes instancias y probar las acciones. */

// Opcion 1
let retirar = 0;
let depositar = 0;

class cuentaBancaria {

    constructor(tipoCuenta, saldo, titular, red) {
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
        this.titular = titular;
        this.red = red;

        // Saludo al titular
        this.bienvenido = () => {
            alert(`Bienvenido ${this.titular} a la red ${this.red}`)
        }

        // Retiro de dinero
        this.retirar = () => {
            let retirar = parseInt(prompt("Ingrese el monto que desea retirar"))
            saldo = saldo - retirar
            alert(`Su nuevo saldo es de: ${saldo}`)
            alert(`${titular} gracias por utilizar nuestros servicios.`)
        }

        // Deposito de dinero
        this.depositar = () => {
            let depositar = parseInt(prompt("Ingrese el monto que desea depositar"))
            saldo = saldo + depositar
            alert(`Su nuevo saldo es de: ${saldo}`)
            alert(`${titular} gracias por utilizar nuestros servicios.`)
        }

    }
}

// Declaro las instancias
const juani = new cuentaBancaria("caja de Ahorro", 3000, "Juan Perez", "Banelco");
const pedro = new cuentaBancaria("cuenta corrriente", 5000, "Pedro González", "Link");
const moria = new cuentaBancaria("cuenta corrriente", 10000, "Moria Casan", "Banelco");
const susana = new cuentaBancaria("caja de Ahorro", 2000, "Susana Gimenez", "Banelco");


// Llamo a los métodos.
juani.bienvenido();
juani.retirar();
juani.depositar();
pedro.bienvenido();
pedro.retirar();
pedro.depositar();
moria.bienvenido();
moria.retirar();
moria.depositar();
susana.bienvenido();
susana.retirar();
susana.depositar();


// Opción 2 - Utilizando botones
const saludoBienvenido = document.querySelector("#bienvenido")
const botonRetirar = document.querySelector("#retirar");
const botonDepositar = document.querySelector("#depositar");
const inputRetirar = document.querySelector("#dineroARetirar");
const inputDepositar = document.querySelector("#dineroADepositar");
const saldoActualizado = document.querySelector("#saldoactualizado");

class cuentaBancaria2 {

    constructor(tipoCuenta, saldo, titular, red) {
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
        this.titular = titular;
        this.red = red

        this.bienvenido2 = () => {
            saludoBienvenido.innerHTML = `<b>Bienvenido ${this.titular} a la red ${this.red}</b>`
        }

    }

}

const datosBancarios = new cuentaBancaria2("caja de Ahorro", 3000, "Alberto López", "Banelco");

datosBancarios.bienvenido2();


// Retirar dinero
const retirar = () => {
    // Mostrar dinero disponible.
    datosBancarios.saldo = parseInt(datosBancarios.saldo) - parseInt(inputRetirar.value);
    saldoActualizado.value = parseInt(datosBancarios.saldo);
    inputRetirar.value = "";
    return saldoActualizado.value;
}

const depositar = () => {
    // Mostrar dinero disponible.
    datosBancarios.saldo = parseInt(datosBancarios.saldo) + parseInt(inputDepositar.value);
    saldoActualizado.value = datosBancarios.saldo;
    inputDepositar.value = "";
    return saldoActualizado.value;
}

botonRetirar.addEventListener("click", retirar);
botonDepositar.addEventListener("click", depositar);