
class Perro {
    constructor () {
        this.nombre = '';
        this.apellido = '';
        this.raza = '';
        this.telefono = '';
        this.pais = '';
        this.fotografia = '';
        this.descripcion = '';
    };
};

Perro.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
    return this;
};

Perro.prototype.setApellido = function (apellido) {
    this.apellido = apellido;
    return this;
};

Perro.prototype.setRaza = function (raza) {
    this.raza = raza;
    return this;
};

Perro.prototype.setTelefono = function (telefono) {
    this.telefono = telefono;
    return this;
};

Perro.prototype.setPais = function (pais) {
    this.pais = pais;
    return this;
};

Perro.prototype.setFotografia = function (fotografia) {
    this.fotografia = fotografia;
    return this;
};

Perro.prototype.setDescripcion = function (descripcion) {
    this.descripcion = descripcion;
    return this;
};

Perro.prototype.build = function () {
    return {
        nombre: this.nombre,
        apellido: this.apellido,
        raza: this.raza,
        telefono: this.telefono,
        pais: this.pais,
        fotografia: this.fotografia,
        descripcion: this.descripcion
    };
};
