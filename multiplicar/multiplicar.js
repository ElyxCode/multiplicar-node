
const fs = require('fs');
const colors = require('colors');

colors.setTheme = ({
    input: 'green'
});

let listaTabla = (base, limite) => {
    
    console.log("===================".green);
    console.log(`=== Tabla del ${base} ===`.green);
    console.log("===================".green);

    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject('El numero introducido no es valido');
            return;
        };

        let data = '';

        for (let i = 1; i <= limite; i++){

            data += `${base} * ${i} = ${base * i}\n`; 
            
        };
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) =>{
        
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            } 
        });
    });
};

module.exports = {
    crearArchivo,
    listaTabla
};
