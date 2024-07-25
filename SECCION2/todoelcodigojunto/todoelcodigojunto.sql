create database RentACar;
use RentACar;

create table Vendedor(
vendedor_id int auto_increment primary key,
nombre_completo varchar(100) not null,
rut varchar(20) not null
);

create table MarcaAuto(
marca_id int auto_increment primary key,
nombre varchar(100)
);

create table ModeloAuto(
modelo_id int auto_increment primary key,
marca_id int, 
nombre varchar(100),
foreign key(marca_id) references MarcaAuto(marca_id)
);

create table Solicitudes(
solicitud_id int auto_increment primary key,
vendedor_id int,
modelo_id int,
fecha date not null,
precio decimal(10,2) not null,
foreign key(vendedor_id)references Vendedor(vendedor_id),
foreign key(modelo_id) references ModeloAuto(modelo_id)
);



INSERT INTO Vendedor (nombre_completo, rut) VALUES
('Juan Pérez', '12345678-9'),
('Ana Gómez', '98765432-1'),
('Carlos López', '23456789-0'),
('Marta Fernández', '34567890-1'),
('Luis Martínez', '45678901-2');

INSERT INTO MarcaAuto (nombre) VALUES
('Alfa Romeo');

INSERT INTO ModeloAuto (marca_id, nombre) VALUES
(6, 'Alfa Romeo');


INSERT INTO Solicitudes (vendedor_id, modelo_id, fecha, precio) VALUES
(2, 1, '2024-02-01', 20000.00),
(3, 2, '2024-04-05', 25000.00),
(4, 3, '2024-04-10', 18000.00),
(5, 4, '2024-03-15', 30000.00),
(3, 5, '2024-02-20', 22000.00),
(3, 6, '2024-01-25', 27000.00),
(4, 7, '2024-05-30', 21000.00),
(4, 8, '2024-04-02', 32000.00),
(5, 9, '2024-03-08', 40000.00),
(5, 10, '2024-02-12', 35000.00);

select * from marcaauto;
select * from modeloauto;
select * from solicitudes;
select * from vendedor;

DELIMITER //
CREATE PROCEDURE ObtenerMarcasMasSolicitadas()
BEGIN
    SELECT marcaauto.Nombre AS Marca, COUNT(Solicitudes.Solicitud_ID) AS CantidadSolicitudes
    FROM Solicitudes
    JOIN Modeloauto ON Solicitudes.Modelo_ID = Modeloauto.Modelo_ID
    JOIN Marcaauto ON Modeloauto.Marca_ID = Marcaauto.Marca_ID
    GROUP BY Marcaauto.Nombre
    ORDER BY CantidadSolicitudes DESC
    LIMIT 3;
END //
DELIMITER ;
CALL ObtenerMarcasMasSolicitadas();

/* Obtener solicitudes del mes actual */ 

DELIMITER //
CREATE PROCEDURE ObtenerSolicitudesDelMesActual()
BEGIN
    SELECT *
    FROM solicitudes
    WHERE MONTH(fecha) = MONTH(CURDATE())
      AND YEAR(fecha) = YEAR(CURDATE());
END //
DELIMITER ;
CALL ObtenerSolicitudesDelMesActual();


/*  Obtener el vendedor que menos solicitudes haya generado en los últimos 30 días */ 

DELIMITER //
CREATE PROCEDURE ObtenerVendedorConMenosSolicitudes()
BEGIN
	select 
	vendedor.nombre_completo as nombre, 
	count(solicitudes.solicitud_id) as solicitudes_generadas 
	from vendedor
	join solicitudes 
	on vendedor.vendedor_id=solicitudes.vendedor_id 
	where  solicitudes.fecha >= date_sub(curdate(), interval 30 day)
	group by vendedor.nombre_completo 
	order by solicitudes_generadas asc
	limit 1;
END //
DELIMITER ;
CALL ObtenerVendedorConMenosSolicitudes();

/* Obtener modelos que no tengan solicitudes */


DELIMITER //
CREATE PROCEDURE ObtenerModelosSinSolicitudes()
BEGIN
	select 
	modeloauto.nombre as nombre_modelo
	from modeloauto 
	left join solicitudes 
	on modeloauto.modelo_id=solicitudes.modelo_id 
	where solicitudes.solicitud_id is null;
END //
DELIMITER ;
CALL ObtenerModelosSinSolicitudes();


/* Obtener 3 meses con más dinero en ventas: */
DELIMITER //
CREATE PROCEDURE TresMesesConMasVentas()
BEGIN
	SELECT DATE_FORMAT(fecha, '%M %Y') as mes, sum(precio) as total_suma_ventas
    from  solicitudes
    group by DATE_FORMAT(fecha, '%M %Y')
    order by total_suma_ventas desc
    limit 3;
END //
DELIMITER ;
CALL TresMesesConMasVentas();

select * from marcaauto;
select * from modeloauto;
select * from solicitudes;
select * from vendedor;
