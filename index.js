const express = require("express");
const app = express();
app.get(`/`,(req,res)=> {
    res.send("HOLA MUNDO");
});
app.get(`/saludar`,(req,res)=>{
    console.log("Buenos dias estrellitas la tierra les dice hola");
    res.send("Buenos dias estrellitas la tierra les dice hola");
});
app.get(`/saludar/:nombre`,(req,res)=>{
    res.send(`buenos dias ${req.params.nombre}`);
});
app.get('/saludar/:edad', (req, res) => {
    res.send(`Buenos días. Tienes la edad ${req.params.edad} años.`);
});
app.listen(4000, ()=>{
    console.log("Servidor OK en puerto 4000");
} );

