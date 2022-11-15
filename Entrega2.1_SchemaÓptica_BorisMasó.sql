DROP DATABASE IF EXISTS óptica_boris_masó;
CREATE DATABASE óptica_boris_masó CHARACTER SET utf8mb4;
USE óptica_boris_masó;

CREATE TABLE clientes (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    país VARCHAR(25) NOT NULL,
    ciudad VARCHAR(25) NOT NULL,
    dirección VARCHAR(50) NOT NULL,
    código_postal VARCHAR(5) NOT NULL,
    teléfono VARCHAR(9),
    correo_electrónico VARCHAR(25),
    fecha_de_registro DATE NOT NULL,
    id_cliente_recomendación INT UNSIGNED,
    FOREIGN KEY (id_cliente_recomendación) REFERENCES clientes(id)
);

CREATE TABLE empleados (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50) NOT NULL,
    país VARCHAR(25) NOT NULL,
    ciudad VARCHAR(25) NOT NULL,
    dirección VARCHAR(50) NOT NULL,
    código_postal VARCHAR(5) NOT NULL,
    teléfono VARCHAR(9) NOT NULL,
    correo_electrónico VARCHAR(25) NOT NULL,
    fecha_de_empleo DATE NOT NULL
);

CREATE TABLE proveedores (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(25) NOT NULL,
    país VARCHAR(25) NOT NULL,
    ciudad VARCHAR(25) NOT NULL,
    dirección VARCHAR(50) NOT NULL,
    código_postal VARCHAR(5) NOT NULL,
    teléfono VARCHAR(9) NOT NULL,
    fax VARCHAR(9),
    nif VARCHAR(9) NOT NULL
);

CREATE TABLE gafas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(25) NOT NULL,
    graduación_vidrio_izquierdo DOUBLE NOT NULL,
    graduación_vidrio_derecho DOUBLE NOT NULL,
    montura ENUM("flotante", "pasta", "metálica") NOT NULL,
    color_montura VARCHAR(25) NOT NULL,
    color_vidrio_izquierdo VARCHAR(25) NOT NULL,
    color_vidrio_derecho VARCHAR(25) NOT NULL,
    precio DOUBLE NOT NULL,
    id_proveedor INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_proveedor) REFERENCES proveedores(id)
);

CREATE TABLE ventas (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_gafas INT UNSIGNED NOT NULL,
    id_cliente INT UNSIGNED NOT NULL,
    id_empleado INT UNSIGNED NOT NULL,
    fecha_de_venta DATE NOT NULL,
    FOREIGN KEY (id_gafas) REFERENCES gafas(id),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_empleado) REFERENCES empleados(id)
);

INSERT INTO clientes VALUES(1, "Pau", "Garriga", "Villahorta", "España", "Barcelona", "Calle Vallespir, 14", "08012", NULL, NULL, "2021-04-22", NULL);
INSERT INTO clientes VALUES(2, "Joan", "Rodríguez", "Vilanueva", "España", "Barcelona", "Avenida Madrid, 134", "08022", "639764534", NULL, "2021-12-26", NULL);
INSERT INTO clientes VALUES(3, "Boris", "Masó", "Uzcudun", "España", "Barcelona", "Calle Alcolea, 100", "08014", "638965431", "borisboris@gmail.com", "2022-04-26", 1);

INSERT INTO empleados VALUES(1, "Nina", "Fuentes", "Olmedo", "España", "Barcelona", "Calle Estrella, 23", "08023", "650985654", "nina19@gmail.com", "2021-03-22");
INSERT INTO empleados VALUES(2, "Sergio", "García", "Minyó", "España", "Barcelona", "Calle del Árbol, 95", "08019", "631213401", "serser@hotmail.com", "2021-03-28");

INSERT INTO proveedores VALUES(1, "Gafas Focal, S.A.", "España", "Barcelona", "Calle Miró, 79", "08024", "934908765", NULL, "A12345678");
INSERT INTO proveedores VALUES(2, "Lentes Amino, S.A.", "España", "Madrid", "Calle del Rey", "28005", "639232425", NULL, "B87654321");

INSERT INTO gafas VALUES(1, "Megido", "0.25", "0.25", "flotante", "rojo burdeos", "gris", "gris", 200, 1);
INSERT INTO gafas VALUES(2, "Specter", "-0.25", "-0.25", "metàlica", "azul cerúleo", "azul", "azul", 150, 1);
INSERT INTO gafas VALUES(3, "Vipglass", "-0.50", "-0.50", "flotante", "dorado real", "amarillo", "amarillo", 300, 2);
INSERT INTO gafas VALUES(4, "Commoner", "0.50", "0.50", "pasta", "negro", "gris", "gris", 115, 2);

INSERT INTO ventas VALUES(1, 2, 1, 1, "2021-04-24");
INSERT INTO ventas VALUES(2, 1, 1, 1, "2021-06-27");
INSERT INTO ventas VALUES(3, 4, 2, 2, "2021-12-28");
INSERT INTO ventas VALUES(4, 3, 2, 2, "2022-04-03");
INSERT INTO ventas VALUES(5, 1, 3, 1, "2022-04-05");
INSERT INTO ventas VALUES(6, 4, 3, 1, "2022-10-18");

SELECT c.nombre, c.apellido1, c.apellido2, g.marca, v.fecha_de_venta FROM clientes c JOIN ventas v ON v.id_cliente = c.id JOIN gafas g ON g.id = v.id_gafas WHERE v.id_cliente = 2;
SELECT g.marca, e.nombre, e.apellido1, e.apellido2, v.fecha_de_venta FROM empleados e JOIN ventas v ON v.id_empleado = e.id JOIN gafas g ON g.id = v.id_gafas WHERE e.id = 1 AND v.fecha_de_venta LIKE "2021%";
SELECT p.nombre, g.marca, v.fecha_de_venta FROM proveedores p JOIN gafas g ON g.id_proveedor = p.id JOIN ventas v ON v.id_gafas = g.id WHERE p.id = 2;