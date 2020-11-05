const events = require('./events');

class planner {
    constructor() {
        this.eventos = [];
    }

    getEvent(cont) {
        if (cont >= 0 && cont < this.eventos.length) return this.eventos[cont];
        throw new Error('Fuera de rango');
    }

    addEvent(evento) {
        if (evento == null || evento === false)
            throw new Error('Mal declarado el evento');
        else
            this.eventos.push(evento);
    }

    // El input sería "1995-12-17T03:24:00 Evento 1"
    // El output es un evento con datos separados
    translate(secuencia){
        secuencia = secuencia.trim();
        if(this.validarSecuencia(secuencia) == false)
            return false;
        if(secuencia.length == 19)
            secuencia += '  ';
        var fecha = new Date(`${secuencia.slice(0, 19)}`);
        //fecha = this.convertirUTC(fecha);
        var motivo = secuencia.slice(20);
        var eventoAux = new events(fecha, motivo);
        return eventoAux;
    }

    // Esto es un poco inutil por ahora
    // Sirve para convertir una fecha en UTC
    // aunque new Date lo hace ya automaticamente
    convertirUTC(fec){
        var fec_utc =  Date.UTC(fec.getUTCFullYear(), fec.getUTCMonth(), fec.getUTCDate(),
        fec.getUTCHours(), fec.getUTCMinutes(), fec.getUTCSeconds());
        var fec_new = new Date (fec_utc);
        return fec_new;
    }

    validarSecuencia(s){
        var novalida = false;
        if(s.length < 19)
            return false;

        var sec = s[0]+s[1]+s[2]+s[3]+s[5]+s[6]+s[8]+s[9]+s[11]+s[12]+s[14]+s[15]+s[17]+s[18];
        var sec2 = s[4]+s[7]+s[10]+s[13]+s[16];
        
        for(var i = 0; i<sec.length; i++){
            var x = parseInt(sec[i]);
            if (Number.isNaN(x) == true){
                novalida = true;
            }
        }

        // +sec y parseInt no identifican el NaN ... hay que hacerlo uno por uno :(
        if(novalida == true || sec2 != '--T::'){
            return false;
        }
        else
            return true;
    }

    toString(){
        var secuencia = '';
        for (var i = 0; i<this.eventos.length; i++){
            secuencia += this.getEvent(i).toString() + '\n';
        }
        return secuencia;
    }
}

module.exports = planner;