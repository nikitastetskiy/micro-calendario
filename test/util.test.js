var planner = require('../src/eventscalendar/planner');
var events = require('../src/eventscalendar/events');

//////////////////////
//PLANNER
//
//planner - translate
test('Test de la función translate', () => {
    var plan = new planner();
    var secuencia = plan.translate('2020-10-17T17:44:00 Evento 1');
    var final = secuencia.toString();
    expect(final).toBe('Sat Oct 17 2020 17:44:00 GMT+0200 (GMT+02:00) Evento 1');

    secuencia = plan.translate('2020-10-17T17:44:0Evento 1');
    final = secuencia.toString();
    expect(final).toBe("false");

    secuencia = plan.translate('2020-10-17T17:44:00');
    final = secuencia.toString();
    expect(final).toBe("Sat Oct 17 2020 17:44:00 GMT+0200 (GMT+02:00)  ");
});

//planner - getEvent y addEvent
test('Test de la función getEvent y addEvent', () => {
    var plan = new planner();
    var secuencia = plan.translate('2020-10-17T17:44:00 Evento 1');
    plan.addEvent(secuencia);

    var secuencia2 = plan.getEvent(0);
    var final = secuencia2.toString();
    expect(final).toBe('Sat Oct 17 2020 17:44:00 GMT+0200 (GMT+02:00) Evento 1');

    var secuencia3 = plan.translate('2020-1717:44:00');
    expect(() => {plan.addEvent(secuencia3)}).toThrow(Error('Mal declarado el evento'));
    expect(() => {plan.getEvent(10)}).toThrow(Error('Fuera de rango'));
});

// planner - Convertir UTC
test('Test de la función Convertir UTC', () => {
    var plan = new planner();
    var secuencia = plan.convertirUTC(new Date ('2020-10-17T17:44:00'));
    var final = secuencia.toISOString();

    expect(final).toBe('2020-10-17T15:44:00.000Z');
});

// planner - validar secuencia
test('Test de la función Validar Secuencia', () => {
    var plan = new planner();
    var final = plan.validarSecuencia('2020-10-17T17:44:00');
    expect(final).toBe(true);

    var final = plan.validarSecuencia('2020-10-17:4:00');
    expect(final).toBe(false);
});

///////////////////////////////
//EVENTS
//
//events - getFecha, getMotivo, setEvent y toString
test('Test de la función getFecha, getMotivo, setEvent y toString', () => {
    var v = new events(new Date(2021, 7, 2, 0, 0, 0, 0), "Nuevo evento para un cumple");
    expect(v.getFecha().toISOString()).toBe('2021-08-01T22:00:00.000Z');

    expect(v.getMotivo()).toBe('Nuevo evento para un cumple');

    v.setEvent(new Date(2020, 8, 2, 13, 27, 45, 0), "Otro cumple");
    expect(v.toString()).toBe("Wed Sep 02 2020 13:27:45 GMT+0200 (GMT+02:00) Otro cumple");

    expect(() => {v.setEvent(null, "Otro cumple")}).toThrow(Error('Evento mal puesto'));
    expect(() => {v.setEvent(new Date(), null)}).toThrow(Error('Evento mal puesto'));
});

