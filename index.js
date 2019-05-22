const fs = require('fs');
let cursos = [{
    id: 1,
    nombre: "node.js",
    duracion: "32 horas",
    valor: "30000"
},
{
    id: 2,
    nombre: "ingles",
    duracion: "64 horas",
    valor: "10000"
},
{
    id: 3,
    nombre: "bolsa de valores",
    duracion: "32 horas",
    valor: "20000"
}];



let primerCurso = cursos.find(curso => curso.id == 1)// id = 1

setTimeout(function () {
    console.log('el codigo curso ' + primerCurso.id + '\n' + 'nombre ' + primerCurso.nombre + '\n' + 'duracion de ' + primerCurso.duracion + '\n' +
        'por un valor de ' + primerCurso.valor + '\n');
}, 2000);

let segundoCurso = cursos.find(curso => curso.id == 2)

setTimeout(function () {
    console.log('el codigo curso ' + segundoCurso.id + '\n' + 'nombre ' + segundoCurso.nombre + '\n' + 'duracion de ' + segundoCurso.duracion + '\n' +
        'por un valor de ' + segundoCurso.valor + '\n');
}, 4000);

let tercerCurso = cursos.find(curso => curso.id == 3)

setTimeout(function () {
    console.log('el codigo curso ' + tercerCurso.id + '\n' + 'nombre ' + tercerCurso.nombre + '\n' + 'duracion de ' + tercerCurso.duracion + '\n' +
        'por un valor de ' + tercerCurso.valor + '\n');
}, 6000);


const opcion = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'x'
    }
}

const argv = require('yargs')
    .command('inscribir', 'inscribirme en un curso', opcion)
    .argv

idinscripcion = argv.id;
nombre = argv.nombre;
cedula = argv.cedula;


setTimeout(function () {
    if (idinscripcion == 1 || idinscripcion == 2 || idinscripcion == 3) {

        console.log('Se Ha Registrado Correctamente');
        console.log("Numero de curso " + idinscripcion);
        console.log("nombre " + nombre);
        console.log("cedula " + cedula);

    } else {
        console.log("curso no existe ingrese el numero de curso(1,2,3)");

    }

}, 10000);

setTimeout(function () {
    let crearArchivo = (idcurso, nombre, cedula) => {
        if (idcurso == 1) {
            texto = (" el/la estudiante se llama " + nombre + '\n' + "cedula " + cedula + '\n' + "se matriculo al codigo del curso " + idcurso + '\n' + "al curso llamado " + primerCurso.nombre + '\n' + "con valor de " + primerCurso.valor + '\n' + "con una duracion " + primerCurso.duracion)
            fs.writeFile('inscripcion.txt', texto, (err) => {
                if (err) throw (err);
                console.log('se ha creado el archivo')
            });
        } else if (idcurso == 2) {
            texto = ("el/la estudiante se llama " + nombre + '\n' + "cedula " + cedula + '\n' + "se matriculo al codigo del curso " + idcurso + '\n' + "al curso llamado " + segundoCurso.nombre + '\n' + "con valor de " + segundoCurso.valor + '\n' + "con una duracion " + segundoCurso.duracion)
            fs.writeFile('inscripcion.txt', texto, (err) => {
                if (err) throw (err);
                console.log('se ha creado el archivo')
            });
        } else if (idcurso == 3) {
            texto = (" el/la estudiante se llama " + nombre + '\n' + "cedula " + cedula + '\n' + "se matriculo al codigo del curso  " + idcurso + '\n' + "al curso llamado " + tercerCurso.nombre + '\n' + "con valor de " + tercerCurso.valor + '\n' + "con una duracion " + tercerCurso.duracion)
            fs.writeFile('inscripcion.txt', texto, (err) => {
                if (err) throw (err);
                console.log(' se ha creado el archivo')
            });
        } else {
            console.log("no se ha inscrito a ningun curso")
            console.log("inscribase a un curso");
        }
    }


    crearArchivo(idinscripcion, nombre, cedula);
}, 11000);