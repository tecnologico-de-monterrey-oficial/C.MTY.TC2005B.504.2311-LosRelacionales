create table Persona(
IDPersona int not null identity primary key,
Rol varchar(20) not null,
nombre varchar(30) not null,
apellidos varchar(30) not null,
telefono varchar(10),
correo varchar(20),
FechadeNacimiento date,
Sexo char(1),
Escolaridad varchar(15),
Calle varchar(15),
Colonia varchar(15),
Ciudad varchar(15),
Estado varchar(15),
CodigoPostal char(5),
Pais varchar(10),
Estatus varchar(10),
FechadeFallecimiento date
);

create table Salud(
IDPersona int not null foreign key references Persona(IDPersona),
TipoSangre varchar(5),
Peso int,
Altura float
);

create table Prueba(
IDPrueba int not null identity primary key,
Nombre varchar(15) not null
);

create table Indicadores(
IDIndicador int not null identity primary key,
NombreIndicador varchar(15) not null,
Descripcion varchar(30)
);

create table IndicadoresPrueba(
IDPrueba int not null foreign key references Prueba(IDPrueba),
IDIndicador int not null foreign key references Indicadores(IDIndicador)
);

create table HistorialMedico(
IDPersona int not null foreign key references Persona(IDPersona),
IDPrueba int not null foreign key references Prueba(IDPrueba),
FechaAplicacion date,
Resultado varchar(40)
);

create table Grupo(
IDGrupo int not null identity primary key,
Tipo varchar(20),
InfoGrupo varchar(30)
);

create table PersonaGrupo(
IDPersona int not null foreign key references Persona(IDPersona),
IDGrupo int not null foreign key references Grupo(IDGrupo)
);