class events {
    // Input fecha tipo Date
    // y motivo tipo String
    constructor(fecha, motivo) {
        this.fecha = fecha;
        this.motivo = motivo;
    }

    getFecha() {
        return this.fecha;
    }

    getMotivo() {
        return this.motivo;
    }

    setEvent(fecha, motivo) {
        if (fecha == null || motivo == null)
            throw new Error('Evento mal puesto');
        else {
            this.fecha = fecha;
            this.motivo = motivo;
        }
    }

    toString() {
        return `${this.fecha.toString()} ${this.motivo.toString()}`;
    }
}

module.exports = events;
