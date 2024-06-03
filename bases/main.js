"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["aquaman"] = 0] = "aquaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    console.log(activar_batiseñal());
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = [
        'Flash',
        'Arrow',
        'Superman',
        'Linterna Verde',
    ];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log('Disparando');
        },
    };
    var villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '"----------"').toUpperCase();
        }
        return "".concat(firstName, " ").concat(lastName || '"----------"');
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        console.log({ firstName: firstName, lastName: lastName });
        return "".concat(firstName, " ").concat(lastName || '"----------"');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log(name);
})();
(function () {
    var fullName = function (firstNmae) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstNmae, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent', 'Herrera');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var mathAddOperacion;
    mathAddOperacion = addNumbers;
    console.log(mathAddOperacion(1, 2));
    var greet = function (name) { return "Hola ".concat(name); };
    var stringGreet;
    stringGreet = greet;
    console.log(stringGreet('Fernando'));
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var returnString;
    returnString = saveTheWorld;
    console.log(returnString());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBatisignal = function () {
        return 'Batisenial activada';
    };
    console.log(typeof activeBatisignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el timepo'],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.233214;
    console.log(avenger.toFixed());
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers1 = [1, 2, 3, 4, 5, 7, 8, 9, 10,];
    var numbers2 = [1, 2, 3, 4, 5, 7, 8, 9, 10,];
    var villians = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers1.forEach(function (number) { return console.log(number); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isBatman ? false : true;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudiLevel;
    (function (AudiLevel) {
        AudiLevel[AudiLevel["min"] = 1] = "min";
        AudiLevel[AudiLevel["medium"] = 2] = "medium";
        AudiLevel[AudiLevel["max"] = 10] = "max";
    })(AudiLevel || (AudiLevel = {}));
    var currenAudio = AudiLevel.max;
    console.log(currenAudio);
    console.log(AudiLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    console.log('Hola mundo');
})();
(function () {
    var nada = undefined;
    console.log(nada);
    var nada2 = null;
    console.log(nada2);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas ');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Batman';
    var volcanNegro = "Heroe: Volcan Negro";
    var abc = 123;
    console.log(" I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map