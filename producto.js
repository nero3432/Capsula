const express = require("express");
const mysql =require(`mysql2`);
const app = express();
const conexion =mysql.createConnection({
    host:`localhost`,
    user:`root`,
    password:`1234`,
    database:"producto",
});
conexion.connect((err) => {

    if (err){
        throw err;
    }
    else{
        console.log('Conexion exitosa');
    }

});
app.listen(4000,() =>{
    console.log("servidor ok en puesto 4000");
});
app.use(express.json());
app.post('/prod',(req,res)=>{
data={id_producto:req.body.id_producto,
id_tipo:req.body.id_tipo,
descripcion:req.body.descripcion,
precio_compra:req.body.precio_compra,
precio_venta:req.body.precio_venta,
cantidad:req.body.cantindad,
}
let sql=`insert into tproducto set?`;
conexion.query(sql,data,(err,resul)=>{
    if(err){
        console.log(err.message);
        res.json({message:`Errorinesperado`});
    }else{
        res.json(resul);
    }
});
})
app.get('/prod',(req,res)=>{
    
    
    let sql=`Select id_producto,id_tipo,descripcion,precio_compra,precio_venta,cantidad,activo from tproducto`;
    conexion.query(sql,(err,resul)=>{
        if(err){
            console.log(err.message);
            res.json({message:`Errorinesperado`});
        }else{
            res.json(resul);
        }
    });
})