class events{
    constructor(fecha, motivo){
        //this.fecha = Object.assign(new Date(), fecha);
        this.fecha = fecha;
        this.motivo = motivo;
    }

    getFecha(){
        return this.fecha;
    }

    getMotivo(){
        return this.motivo;
    }

    setEvent(fecha, motivo){
        if(fecha != null || motivo != null){
            this.fecha = fecha;
            this.motivo = motivo;
        }
        else
            throw new Error('Evento mal puesto');
    }

    toString(){
        return (this.fecha.toString() + ' ' + this.motivo.toString());
    }
}

module.exports = events;

// Se ha utilizado para probar cosas del código ( se borrará en un futuro)
//var v = new events(new Date(2021, 7, 2, 0, 0, 0, 0), "Nuevo evento para un cumple");
//v.getEvent();