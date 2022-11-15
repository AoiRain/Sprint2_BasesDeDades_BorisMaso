SELECT apellido1, apellido2, nombre FROM persona WHERE tipo = "alumno" ORDER BY apellido1 ASC, apellido2 ASC, nombre ASC;
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo= "alumno" AND telefono IS NULL;
SELECT * FROM persona WHERE tipo = "alumno" AND fecha_nacimiento >= "1991-01-01" AND fecha_nacimiento <= "1991-12-31";
SELECT * FROM persona WHERE tipo = "profesor" AND telefono IS NULL AND nif LIKE "%k";
SELECT * FROM asignatura WHERE cuatrimestre = 1 AND curso = 3 AND id_grado = 7;
SELECT p.apellido1, p.apellido2, p.nombre, d.nombre FROM persona p JOIN profesor pr ON p.id = pr.id_profesor JOIN departamento d ON pr.id_departamento = d.id WHERE p.tipo = "profesor" ORDER BY p.apellido1 ASC, p.apellido2 ASC, p.nombre ASC;
SELECT a.nombre, c.anyo_inicio, c.anyo_fin FROM asignatura a JOIN alumno_se_matricula_asignatura am ON a.id = am.id_asignatura JOIN curso_escolar c ON c.id = am.id_curso_escolar JOIN persona p ON p.id = am.id_alumno WHERE p.tipo = "alumno" AND p.nif = "26902806M";
SELECT DISTINCT d.nombre FROM persona p JOIN profesor pr ON p.id = pr.id_profesor JOIN departamento d ON pr.id_departamento = d.id JOIN asignatura a ON a.id_profesor = p.id JOIN grado g ON  g.id = a.id_grado WHERE p.tipo = "profesor" AND g.id = 4;
SELECT DISTINCT p.nombre, p.apellido1, p.apellido2 FROM persona p JOIN alumno_se_matricula_asignatura am ON p.id = am.id_alumno JOIN asignatura a ON a.id = am.id_asignatura JOIN curso_escolar c ON c.id = am.id_curso_escolar WHERE p.tipo = "alumno" AND c.anyo_inicio = 2018 AND c.anyo_fin = 2019;
SELECT d.nombre, p.apellido1, p.apellido2, p.nombre FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN departamento d ON d.id = pr.id_departamento WHERE p.tipo = "profesor" ORDER BY d.nombre ASC, p.apellido1 ASC, p.apellido2 ASC, p.nombre ASC;
SELECT p.nombre, p.apellido1, p.apellido2 FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN departamento d ON d.id = pr.id_departamento WHERE p.tipo = "profesor" AND pr.id_departamento IS NULL;
SELECT d.nombre FROM departamento d LEFT JOIN profesor pr ON d.id = pr.id_departamento WHERE pr.id_departamento IS NULL;
SELECT p.nombre, p.apellido1, p.apellido2 FROM persona p LEFT JOIN profesor pr ON p.id = pr.id_profesor LEFT JOIN asignatura a ON a.id_profesor = pr.id_profesor WHERE p.tipo = "profesor" AND a.id_profesor IS NULL;
SELECT a.nombre FROM asignatura a LEFT JOIN profesor pr ON a.id_profesor = pr.id_profesor WHERE a.id_profesor IS NULL;

SELECT COUNT(*) FROM persona WHERE tipo = "alumno";
SELECT COUNT(*) FROM persona WHERE tipo = "alumno" AND fecha_nacimiento LIKE "1999%";
SELECT d.nombre, COUNT(pr.id_profesor) FROM departamento d JOIN profesor pr ON d.id = pr.id_departamento GROUP BY d.nombre ORDER BY COUNT(pr.id_profesor);
SELECT d.nombre, COUNT(pr.id_profesor) FROM departamento d LEFT JOIN profesor pr ON d.id = pr.id_departamento GROUP BY d.nombre ORDER BY COUNT(pr.id_profesor);
SELECT g.nombre, COUNT(a.id) FROM grado g LEFT JOIN asignatura a ON a.id_grado = g.id GROUP BY g.nombre ORDER BY COUNT(a.id);
SELECT g.nombre, COUNT(a.id) FROM grado g LEFT JOIN asignatura a ON a.id_grado = g.id GROUP BY g.nombre HAVING COUNT(a.id) >= 40;



SELECT * FROM persona WHERE tipo = "alumno" ORDER BY fecha_nacimiento ASC LIMIT 1;
