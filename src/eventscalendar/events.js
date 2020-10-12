class events{
    constructor(fecha, evento){
        //this.fecha = Object.assign(new Date(), fecha);
        this.fecha = fecha;
        this.evento = evento;
    }

    getEvent(){
        //onsole.log(this.fecha.toString());
        //console.log(this.evento.toString());
        throw new Error('Sin implementar');
    }

    setEvent(fecha, evento){
        //this.fecha = fecha;
        //this.evento = evento;
        throw new Error('Sin implementar');
    }
}

// Se ha utilizado para probar cosas del código ( se borrará en un futuro)
//var v = new events(new Date(2021, 7, 2, 0, 0, 0, 0), "Nuevo evento para un cumple");
//v.getEvent();