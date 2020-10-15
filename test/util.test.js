var planner = require('../src/eventscalendar/planner');

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

//planner - getEvent y addEvent
test('Test de la función Convertir UTC', () => {
    var plan = new planner();
    var secuencia = plan.convertirUTC(new Date ('2020-10-17T17:44:00'));
    var date = new Date('2020-10-17T15:44:00.000Z');
    var final = date.toISOString();

    expect(final).toBe('2020-10-17T15:44:00.000Z');
});

