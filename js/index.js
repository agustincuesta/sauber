var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "Sabes que es SAUBER...";
        timer = 400;
    },
    value1: function() {
        texts = "nunca a sido tan facil la limpieza?";
        timer = 150;
    },
    value2: function() {
        texts = "No esperes que te lo cuenten?";
        timer = 150;
    },
    value3: function() {
        texts = "Unete al mundo SAUBER.";
        timer = 150;
    },
    value4: function() {
        texts = "Si,muy pronto en la WEB.";
        timer = 150;
    },
    value5: function() {
        texts = "Sauber tu mejor opcion...";
        timer = 200;
    },
    value6: function() {
        texts = "SAUBER";
        timer = 400;
    },
    value7: function() {
        texts = "SAUBER";
        timer = 400;
    }
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 5);

    function startus() {
        a += 0.00001;
        b += 0.00001;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
}