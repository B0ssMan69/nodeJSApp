const os = require('os');
const fs = require('fs');

var texto = "Esta es la información sobre mi computador\n";
texto += Capacidad_Memoria() + '\n'; //Para llamar la función Capacidad_Memoria()
texto += Version_Sistema_Operativo() + '\n'; //Para llamar la función Crear la función Version_Sistema_Operativo()
texto += tipo_sistema() + '\n'; //typo de sistema operativo
texto += System_plarform() + '\n'; // base del sistema
texto += Arquitectura_Sismeta() + '\n'; //Sistema de XXBits
texto += Memoria_Libre() + '\n'; //la memoria disponible
texto += Nombre_Pc() + '\n'; //Así se llama mi equipo

//Abre el archivo y escribe en el
fs.writeFile("archivo.txt", texto, function(error){
    if(error){
        console.log("Un error desconocido impidió crear el archivo")
    }else{
        console.log("El archivo fue creado")
    }
});

//Crear la función Capacidad_Memoria
function Capacidad_Memoria(){
    var memoria= 'Total Memoria: ' + os.totalmem();
    return memoria;
}

//Crear la función Crear la función Version_Sistema_operativo
function Version_Sistema_Operativo(){
    var version= 'Version del sistema operativo: ' + os.release();
    return version;
}

//Crear función tipo sistema
function tipo_sistema(){
    var cpunum= 'Sistema tipo: ' + os.type();
    return cpunum;
}

//crear Variable Arquitectura_Sismeta 
function Arquitectura_Sismeta(){
    var arq= 'La arquitectura del sistema operativo es: ' + os.arch() +'Bits.';
    return arq
}

//crear Variable Memoria_Libre
function Memoria_Libre(){
    var freemem= 'Memoria disponible al momento de la captura: ' + os.freemem() +'Bits.';
    return freemem
}

//Funcón para obtener el nombre del equipo
function Nombre_Pc(){
    var pc_name= "El nombre del equipo es: " + os.hostname();
    return pc_name;
}

//Funcion para obtener información de red
function System_plarform(){
    var plataforma= "La base del sistema es: " + os.platform();
    return plataforma;
}