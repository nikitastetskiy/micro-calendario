const Events = require('./events');

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
        else this.eventos.push(evento);
    }

    // El input sería "1995-12-17T03:24:00 Evento 1"
    // El output es un evento con datos separados
    translate(secuencia) {
        let sec = secuencia;
        sec = sec.trim();
        if (this.validarSecuencia(sec) === false) return false;
        if (sec.length === 19) sec += '  ';
        const fecha = new Date(`${sec.slice(0, 19)}`);
        // fecha = this.convertirUTC(fecha);
        const motivo = sec.slice(20);
        const eventoAux = new Events(fecha, motivo);
        return eventoAux;
    }

    // Esto es un poco inutil por ahora
    // Sirve para convertir una fecha en UTC
    // aunque new Date lo hace ya automaticamente
    convertirUTC(fec) {
        const fecUtc = Date.UTC(
            fec.getUTCFullYear(),
            fec.getUTCMonth(),
            fec.getUTCDate(),
            fec.getUTCHours(),
            fec.getUTCMinutes(),
            fec.getUTCSeconds()
        );
        const fecnew = new Date(fecUtc);
        return fecnew;
    }

    validarSecuencia(s) {
        let novalida = false;
        if (s.length < 19) return false;

        // prettier-ignore
        const sec = s[0] + s[1] + s[2] + s[3] + s[5] + s[6] + s[8] +
            s[9] + s[11] + s[12] + s[14] + s[15] + s[17] + s[18];
        const sec2 = s[4] + s[7] + s[10] + s[13] + s[16];

        for (let i = 0; i < sec.length; i++) {
            const x = parseInt(sec[i], 10);
            if (Number.isNaN(x) === true) {
                novalida = true;
            }
        }

        // +sec y parseInt no identifican el NaN ... hay que hacerlo uno por uno :(
        if (novalida === true || sec2 !== '--T::') {
            return false;
        }
        return true;
    }

    toString() {
        let secuencia = '';
        for (let i = 0; i < this.eventos.length; i++) {
            secuencia += `${this.getEvent(i).toString()}\n`;
        }
        return secuencia;
    }
}

module.exports = planner;
