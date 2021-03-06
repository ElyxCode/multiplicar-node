
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
.command('listar', 'Imprime la tabla en consola', opts)
.command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
.help()                
.argv;

module.exports = {
    argv
};