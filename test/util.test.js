const Planner = require('../src/eventscalendar/planner');
const Events = require('../src/eventscalendar/events');

// // // // // // // // // // //
// PLANNER
//
// Planner - translate
test('función translate', () => {
    const plan = new Planner();
    let secuencia = plan.translate('2020-10-17T17:44:00 Evento 1');
    let secuenciaEsperada = new Events(
        new Date('2020-10-17T17:44:00'),
        'Evento 1'
    );
    expect(secuencia.toString()).toEqual(secuenciaEsperada.toString());
    expect(secuencia).toMatchObject(secuenciaEsperada);

    secuencia = plan.translate('2020-10-17T17:44:0Evento 1');
    const final = secuencia.toString();
    expect(final).toBe('false');

    secuencia = plan.translate('2020-10-17T17:44:00');
    secuenciaEsperada = new Events(new Date('2020-10-17T17:44:00'), ' ');
    expect(secuencia.toString()).toEqual(secuenciaEsperada.toString());
    expect(secuencia).toMatchObject(secuenciaEsperada);
});

// Planner - getEvent, addEvent y toString (?)
test('función getEvent y addEvent', () => {
    var plan = new Planner();
    var secuencia = plan.translate('2020-10-17T17:44:00 Evento 1');
    var secuencia_esperada = new Events(new Date('2020-10-17T17:44:00'), "Evento 1");
    plan.addEvent(secuencia);

    var secuencia2 = plan.getEvent(0);
    expect(secuencia.toString()).toEqual(secuencia2.toString());
    expect(secuencia.toString()).toEqual(secuencia_esperada.toString());
    expect(secuencia).toMatchObject(secuencia_esperada);
    expect(secuencia).toMatchObject(secuencia2);

    var secuencia3 = plan.translate('2020-1717:44:00');
    expect(() => {plan.addEvent(secuencia3)}).toThrow(Error('Mal declarado el evento'));
    expect(() => {plan.getEvent(10)}).toThrow(Error('Fuera de rango'));
});

// Planner - Convertir UTC
test('Test de la función Convertir UTC', () => {
    var plan = new planner();
    var secuencia = plan.convertirUTC(new Date ('2020-10-17T17:44:00'));
    var secuencia_esperada = (new Date ('2020-10-17T17:44:00'));

    expect(secuencia.toISOString()).toEqual(secuencia_esperada.toISOString());
    expect(secuencia).toMatchObject(secuencia_esperada);
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
    var date = new Date(2021, 7, 2, 0, 0, 0, 0);
    expect(v.getFecha().toString()).toEqual(date.toString());
    expect(v.getFecha()).toMatchObject(date);
    expect(v.getMotivo()).toBe('Nuevo evento para un cumple');

    v.setEvent(new Date(2020, 8, 2, 13, 27, 45, 0), "Otro cumple");
    date = new Date(2020, 8, 2, 13, 27, 45, 0);
    expect(v.getFecha().toString()).toEqual(date.toString());
    expect(v.getFecha()).toMatchObject(date);
    expect(v.getMotivo()).toBe('Otro cumple');

    expect(() => {v.setEvent(null, "Otro cumple")}).toThrow(Error('Evento mal puesto'));
    expect(() => {v.setEvent(new Date(), null)}).toThrow(Error('Evento mal puesto'));
});

