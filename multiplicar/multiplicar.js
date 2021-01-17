// requireds
const fs = require('fs');
const colors = require('colors');
//const { number } = require('yargs');
//  const fs = require('express');
// const fs = require('./(direccion)');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Uno o ambos valores Introducido (${base},${limite}) no es un numero`);
            return
        }
        console.log("===================".green);
        console.log(`tabla de ${base} al ${limite}`.green);
        console.log("===================".green);
        for (let i = 1; i <= limite; i++) {
            resolve(console.log(`${base} * ${i} = ${base*i} \n`));
        }
    })

}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor Introducido ${base} no es un numero`);
            return
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            let resultado = base * i;
            data += `${base} * ${i} = ${resultado} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else {
                resolve(`El archivo tabla-${base}.txt`.green)
            }
        });
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}