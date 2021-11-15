const express= require('express');//Se crea una constante
const mongoose=require('mongoose');//se crea constante para usar mongoo
const OfertaSchema=require("./modelos/Oferta.js");//exportar esquema

const app=express();//Se crea una constante 

//definicion de rutas para que el usuario ingrese a la funcionalidades
const router =express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


mongoose.connect("mongodb+srv://DB_prog_web:Mintic2021@clusterprogweb.uczfj.mongodb.net/OfertaLabBD?retryWrites=true&w=majority");

//Operaciones CRUD

router.get('/',(req,res)=>{//mensaje para errores
    res.send("Inicio de las ofertas")
});

router.get('/oferta',(req,res)=>{//Para buscar la información
    OfertaSchema.find(function(err,datos){
        if(err){
            console.log("Error al buscar la oferta")
        }else{
            res.send(datos);
        }
    })
})
router.post('/oferta',(req,res)=>{//para crear o ingresar la información
    let nuevaOferta=new OfertaSchema({//definir nueva oferta
        TipDoc:req.body.tipdoc,
        NumDoc:req.body.numdoc,
        Nombres:req.body.nombres,
        Apellidos:req.body.apellidos,
        Dir:req.body.dir,
        Correo:req.body.correo,
        TelFijo:req.body.telfijo,
        TelCel:req.body.telcel,
        EnlWeb:req.body.enlweb,
        Descripcion:req.body.descripcion,
    })

    nuevaOferta.save(function(err,datos){
        if (err){
            console.log(err)
        }
        res.send("Tarea almacenada correctamente")
    })
});
app.use(router);
app.listen(3000,()=>{//escuchar una funcion y se pasa por el puerto 3000
    console.log("Servidor corriendo en el puerto 3000");

});//funcion flecha de java