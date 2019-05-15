var SEL1 = document.querySelector("#sel1"),
    SEL2 = document.querySelector("#sel2"),
    SEL3 = document.querySelector("#sel3"),
    SEL4 = document.querySelector("#sel4"),
    SEL5 = document.querySelector("#sel5"),
    SEL6 = document.querySelector("#sel6"),
    SEL7 = document.querySelector("#sel7");

var pkg = {
    se1: "",
    se2: "",
    se3: "",
    se4: "",
    se5: "",
    se6: "",
    se7: ""
}

var handler = {
    set: function (obj, props, value) {
        if (props == "se1") {
            Changesel1(value);
        }

        if (props == "se2") {
            Changesel2(value);
        }

        if (props == "se3") {
            Changesel3(value);
        }

        if (props == "se4") {
            Changesel4(value);
        }

        if (props == "se5") {
            Changesel5(value);
        }

        if (props == "se6") {
            Changesel6(value);
        }

        if (props == "se7") {
            Changesel7(value);
        }
    }
}

var proxy = new Proxy(pkg, handler);



window.addEventListener("load", function () {
    sessionStorage.setItem("selNum", 1);
})

//STATE FUNCTIONS
var num = 1;

function mkSel(el) {
    if (num == 1) {
        pkg.se1 = el.src;
        num++;
    } else if (num == 2) {
        pkg.se2 = el.src;
        num++
    } else if (num == 3) {
        pkg.se3 = el.src;
        num++
    } else if (num == 4) {
        pkg.se4 = el.src;
        num++
    } else if (num == 5) {
        pkg.se5 = el.src;
        num++
    } else if (num == 6) {
        pkg.se6 = el.src;
        num++
    } else if (num == 7) {
        pkg.se7 = el.src;
        num++;
    } 

    proxy.se1 = pkg.se1;
    proxy.se2 = pkg.se2;
    proxy.se3 = pkg.se3;
    proxy.se4 = pkg.se4;
    proxy.se5 = pkg.se5;
    proxy.se6 = pkg.se6;
    proxy.se7 = pkg.se7;
}

//UI FUNCTIONS

function Changesel1(val) {
    document.querySelector("#sel1").src = val;
}

function Changesel2(val) {
    document.querySelector("#sel2").src = val;
}

function Changesel3(val) {
    document.querySelector("#sel3").src = val;
}

function Changesel4(val) {
    document.querySelector("#sel4").src = val;
}

function Changesel5(val) {
    document.querySelector("#sel5").src = val;
}

function Changesel6(val) {
    document.querySelector("#sel6").src = val;
}

function Changesel7(val) {
    document.querySelector("#sel7").src = val;
}

function removeSel(el){
   if(el.id == "sel1"){
    
   }
}
