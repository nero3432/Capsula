create database producto;
use producto;
create table tproducto
(
id_producto int primary key not null,
id_tipo int ,
descripcion varchar(35),
precio_compra double,
precio_venta double,
cantidad int,
activo bit
);
INSERT INTO tproducto (id_producto, id_tipo, descripcion, precio_compra, precio_venta, cantidad,activo)
VALUES
(12,12,"producto a",12.12,13.45,10,1);