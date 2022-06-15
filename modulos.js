const os = require('os');
const fs = require('fs');


//console.log(os.cpus());
//console.log(os.networkInterfaces());
//console.log(os.hostname());
fs.writeFile('archivo.html', '<h1>Hole mano bien?</h1>', (err)=>{
    if(!err){
        console.log ('su archivo fuégenerado ');
    }else{
        console.log ('ocurrió un error ');
    }
}
);
