/**
 * OBSERVER PATTERN
 * Establece una relacion entre un objeto (Sujeto o Subject) a varios (observadores, funciones, por ejemplo). Miran el Sujeto y esperan una señal apara ser disparados -> similar * a un listener.
 * TIP -> bueno para disñear event-handling systems
 */

function Subject() {
  this.observers = [];
}

Subject.prototype = {
  suscribe: function (fn) {
    this.observers.push(fn);
  },
  unsuscribe: function (fnToUnsuscribe) {
    this.observers = this.observers.filter((fn) => fn === fnToUnsuscribe);
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

function hola() {
  console.log('Hola querido amigo!');
}

function chau() {
  console.log('Adios, hasta pronto!');
}
