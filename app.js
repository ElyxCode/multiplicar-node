const argv = require('./config/yargs.js').argv;
const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo.green}`)})
            .catch( err => console.log(err));
        break;
    case 'listar':
        listaTabla(argv.base, argv.limite);
        break;
    default:
        console.log(colors.rainbow('Comando no reconocido'));        
};







