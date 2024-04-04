const fs = require('fs')
const datosBici= require('./datosBici.js');
const { devNull } = require('os');

const dhBici = {
        bicicletas  : datosBici (),
        buscarBici : function (id) {
         
    const resultado = this.bicicletas.filter((bicicleta) => {
            return bicicleta.id === id
            
        }) 
        if (resultado.length === 0) {
            return null
        }else{
            return resultado
        }
     },


        venderBici  : function (id) {
            
         const bicicletasModificadas =  this.buscarBici(id);
         if (!bicicletasModificadas) {
        return "bicicleta no encontrada" 
         } else {
            const bicicletaA = this.bicicletas.map(bicicleta => {
                if (bicicleta.id === id){
             bicicleta.vendida = true ;
            }
            return bicicleta 
    
          })
          fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletaA),'utf-8',) 
          return bicicletaA

         }
        
        
    },
        biciParaLaVenta  : function () {
            return this.bicicletas.filter(bicicleta => !bicicleta.vendida)
        },
            
         totalDeVentas : function () {
         const montos = this.bicicletas.map(bicicleta => bicicleta.vendida ? bicicleta.precio : 0)
         return montos.reduce((a, b) => a + b)
     },

        aumentoBici : function (porcentaje) {
            const bicicletaA = this.bicicletas.map(bicicleta => {
               bicicleta.precio = bicicleta.precio + (bicicleta.precio * porcentaje / 100 )
               return bicicleta
            })
            fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletaA),'utf-8',) 
          return this.bicicletas
        
    },

    biciPorRodado : function (rodado) {
        return this.bicicletas.filter(bicicleta => bicicleta.rodado === rodado)
    },
    listarTodasLasBici : function (params) {
        this.bicicletas.forEach((bicicleta,index) =>{
console.log(`-----------------------------------------------
              #: ${index + 1}
              MARCA:  ${bicicleta.marca}
              MODELO: ${bicicleta.modelo}
              RODADO: ${bicicleta.rodado}
              AÑIO: ${bicicleta.anio}
              COLOR: ${bicicleta.color}
              PRECIO: ${bicicleta.precio}`);
        })
    }
}
/* console.log(dhBici.bicicletas);  
console.log(dhBici.buscarBici( 9)); 
 console.log(dhBici.venderBici(32)); 
 console.log(dhBici.totalParaVentas());
 console.log(dhBici.totalDeVentas());
 console.log(dhBici.aumentoBici(10));*/
 console.log(dhBici.buscarBici( 9))
dhBici.listarTodasLasBici();

module.exports =dhBici