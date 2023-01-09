DROP DATABASE IF EXISTS pizzeria_boris_maso;
CREATE DATABASE pizzeria_boris_maso CHARACTER SET utf8mb4;
USE pizzeria_boris_maso;

CREATE TABLE clientes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    codigo_postal VARCHAR(5) NOT NULL,
    localidad VARCHAR(25) NOT NULL,
    provincia VARCHAR(25) NOT NULL,
    telefono VARCHAR(9) NOT NULL
);

CREATE TABLE tiendas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(50) NOT NULL,
    codigo_postal VARCHAR(5) NOT NULL,
    localidad VARCHAR(25) NOT NULL,
    provincia VARCHAR(25) NOT NULL
);

CREATE TABLE empleados (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    NIF VARCHAR(9) NOT NULL,
    telefono VARCHAR(9) NOT NULL,
    tipo ENUM("cocinero", "repartidor") NOT NULL,
    id_tienda INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_tienda) REFERENCES tiendas(id)
);

CREATE TABLE categorias (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL
);

CREATE TABLE productos (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(25) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    imagen VARCHAR(100) NOT NULL,
    precio FLOAT NOT NULL,
    tipo ENUM("pizza", "hamburguesa", "bebida") NOT NULL,
    id_categoria INT UNSIGNED,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE ventas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT UNSIGNED NOT NULL,
    cantidad_pizzas FLOAT,
    cantidad_hamburguesas FLOAT,
    cantidad_bebidas FLOAT,
    precio_total FLOAT NOT NULL,
    tipo ENUM("tienda", "domicilio") NOT NULL,
    id_empleado_cocinero INT UNSIGNED NOT NULL,
    id_empleado_repartidor INT UNSIGNED,
    id_tienda INT UNSIGNED NOT NULL,
    fecha DATETIME NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_empleado_cocinero) REFERENCES empleados(id),
    FOREIGN KEY (id_empleado_repartidor) REFERENCES empleados(id),
    FOREIGN KEY (id_tienda) REFERENCES tiendas(id)
);

CREATE TABLE comandas (
    venta_id INT UNSIGNED NOT NULL,
    producto_id INT UNSIGNED UNSIGNED NOT NULL,
    cantidad FLOAT NOT NULL,
    FOREIGN KEY (venta_id) REFERENCES ventas(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO clientes VALUES(1, "Pau", "Garriga", "Villahorta", "Calle Vallespir, 14", "08014", "Barcelona", "Barcelona", "639896754");
INSERT INTO clientes VALUES(2, "Joan", "Rodriguez", "Vilanueva", "Avenida Madrid, 134", "08022", "Barcelona", "Barcelona", "636453421");
INSERT INTO clientes VALUES(3, "Boris", "Maso", "Uzcudun", "Calle Alcolea, 100", "01023", "Gerona", "Gerona", "634546543");
INSERT INTO clientes VALUES(4, "Sandra", "Angel", "Amor", "Calle del Cielo, 100", "01010", "Gerona", "Gerona", "610101010");

INSERT INTO tiendas VALUES(1, "Avenida Madrid, 14", "08014", "Barcelona", "Barcelona");
INSERT INTO tiendas VALUES(2, "Avenida del Ficus, 2", "01023", "Gerona", "Gerona");

INSERT INTO empleados VALUES(1, "Sergio", "Mellon", "Audalo", "43654344A", "654323340", "cocinero", 1);
INSERT INTO empleados VALUES(2, "Alba", "Celvia", "Cajon", "12345678S", "639876754", "repartidor", 1);
INSERT INTO empleados VALUES(3, "Antonio", "Sala", "Hidalgo", "54678976A", "632120954", "cocinero", 2);
INSERT INTO empleados VALUES(4, "Maura", "Castejon", "Delcastillo", "87654372Q", "651321232", "repartidor", 2);

INSERT INTO categorias VALUES(1, "con carne");
INSERT INTO categorias VALUES(2, "sin carne");
INSERT INTO categorias VALUES(3, "vegana");

INSERT INTO productos VALUES(1, "pizza carbonara", "Jamon, queso, tomate y oregano", "www.imagenpizza1.com", 8, "pizza", 1);
INSERT INTO productos VALUES(2, "pizza 4 quesos", "chedar, parmesano, roquefort, mozarella, tomate y oregano", "www.imagenpizza2.com", 10, "pizza", 2);
INSERT INTO productos VALUES(3, "pizza vegana", "albahaca, champinones, berenjena, tomate y oregano", "www.imagenpizza3.com", 8, "pizza", 3);
INSERT INTO productos VALUES(4, "hamburguesa clasica", "ternera, queso, tomate, lechuga y mayonesa", "www.imagenhamburguesa1.com", 6, "hamburguesa", 1);
INSERT INTO productos VALUES(5, "hamburguesa vegana", "carne beyond, lechuga, tomate y salsa de setas", "www.imagenhamburguesa2.com", 8, "hamburguesa", 3);
INSERT INTO productos VALUES(6, "agua", "agua de manantial", "www.imagenbebida1.com", 1, "bebida", NULL);
INSERT INTO productos VALUES(7, "Coca-cola", "bebida refrescante de cola con gas", "www.imagenbebida2.com", 2, "bebida", NULL);

INSERT INTO ventas VALUES(1, 1, 1, 1, 2, 18, "tienda", 1, NULL, 1, "2022-04-26 14:23:21");
INSERT INTO  ventas VALUES(2, 2, NULL, 1, 1, 9, "domicilio", 1, 2, 1, "2022-06-13 13:21:19");
INSERT INTO  ventas VALUES(3, 3, 2, NULL, 2, 24, "tienda", 3, NULL, 2, "2022-08-12 20:12:08");
INSERT INTO ventas VALUES(4, 4, 1, NULL, 1, 9, "domicilio", 3, 4, 2, "2022-10-11 19:56:16");

INSERT INTO comandas VALUES(1, 1, 1);
INSERT INTO comandas VALUES(1, 4, 1);
INSERT INTO comandas VALUES(1, 7, 2);
INSERT INTO comandas VALUES(2, 5, 1);
INSERT INTO comandas VALUES(2, 6, 1);
INSERT INTO comandas VALUES(3, 2, 2);
INSERT INTO comandas VALUES(3, 7, 2);
INSERT INTO comandas VALUES(4, 1, 1);
INSERT INTO comandas VALUES(4, 6, 1);

SELECT SUM(v.cantidad_bebidas), t.localidad FROM ventas v JOIN tiendas t ON t.id = v.id_tienda AND t.localidad = "Barcelona";
SELECT e.nombre, e.apellido1, e.apellido2, v.id AS id_pedido, v.fecha FROM ventas v JOIN empleados e ON e.id = v.id_empleado_cocinero WHERE v.id_empleado_cocinero = 3;