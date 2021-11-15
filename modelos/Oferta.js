const mongoose=require('mongoose');//constante mongoo

let OfertaSchema=new mongoose.Schema({//construccion del esquema
    TipDoc:String,
    NumDoc:Number,
    Nombres:String,
    Apellidos:String,
    Dir:String,
    Correo:String,
    TelFijo:Number,
    TelCel:Number,
    EnlWeb:String,
    Descripcion:String,
})

module.exports=mongoose.model('oferta',OfertaSchema,'ofertas');