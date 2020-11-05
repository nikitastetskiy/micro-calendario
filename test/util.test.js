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
    const plan = new Planner();
    const secuencia = plan.translate('2020-10-17T17:44:00 Evento 1');
    const secuenciaEsperada = new Events(
        new Date('2020-10-17T17:44:00'),
        'Evento 1'
    );
    plan.addEvent(secuencia);

    const secuencia2 = plan.getEvent(0);
    expect(secuencia.toString()).toEqual(secuencia2.toString());
    expect(secuencia.toString()).toEqual(secuenciaEsperada.toString());
    expect(secuencia).toMatchObject(secuenciaEsperada);
    expect(secuencia).toMatchObject(secuencia2);

    const secuencia3 = plan.translate('2020-1717:44:00');
    expect(() => {
        plan.addEvent(secuencia3);
    }).toThrow(Error('Mal declarado el evento'));
    expect(() => {
        plan.getEvent(10);
    }).toThrow(Error('Fuera de rango'));
});

// Planner - Convertir UTC
test('función Convertir UTC', () => {
    const plan = new Planner();
    const secuencia = plan.convertirUTC(new Date('2020-10-17T17:44:00'));
    const secuenciaEsperada = new Date('2020-10-17T17:44:00');

    expect(secuencia.toISOString()).toEqual(secuenciaEsperada.toISOString());
    expect(secuencia).toMatchObject(secuenciaEsperada);
});

// planner - validar secuencia
test('función Validar Secuencia', () => {
    const plan = new Planner();
    let final = plan.validarSecuencia('2020-10-17T17:44:00');
    expect(final).toBe(true);

    final = plan.validarSecuencia('2020-10-17:4:00');
    expect(final).toBe(false);
});

// // // // // // // // // // //
// EVENTS
//
// Events - getFecha, getMotivo, setEvent y toString
test('función getFecha, getMotivo, setEvent y toString', () => {
    const v = new Events(
        new Date(2021, 7, 2, 0, 0, 0, 0),
        'Nuevo evento para un cumple'
    );
    let date = new Date(2021, 7, 2, 0, 0, 0, 0);
    expect(v.getFecha().toString()).toEqual(date.toString());
    expect(v.getFecha()).toMatchObject(date);
    expect(v.getMotivo()).toBe('Nuevo evento para un cumple');

    v.setEvent(new Date(2020, 8, 2, 13, 27, 45, 0), 'Otro cumple');
    date = new Date(2020, 8, 2, 13, 27, 45, 0);
    expect(v.getFecha().toString()).toEqual(date.toString());
    expect(v.getFecha()).toMatchObject(date);
    expect(v.getMotivo()).toBe('Otro cumple');

    expect(() => {
        v.setEvent(null, 'Otro cumple');
    }).toThrow(Error('Evento mal puesto'));
    expect(() => {
        v.setEvent(new Date(), null);
    }).toThrow(Error('Evento mal puesto'));
});
