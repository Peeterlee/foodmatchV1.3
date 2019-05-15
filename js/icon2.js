var selNum = 1;
var selArr = [];
var catNum = 0;

var Bread = document.querySelector("#Bread"),
    Meat = document.querySelector("#Meat"),
    Veggie = document.querySelector("#Veggie"),
    Rice = document.querySelector("#Rice"),
    Spicy = document.querySelector("#Spicy"),
    Soup = document.querySelector("#Soup"),
    Noodles = document.querySelector("#Noodles");

function createSel(el){
    
    var newSel = document.createElement("img");
            newSel.src = el.src;
            newSel.className = "sel";
            newSel.id = el.id;
            newSel.setAttribute("onclick","removeSel(this);");
    
    var Multiprev = selArr.filter(function(obj, i){
    return(selArr.indexOf(el.id) != -1);
    })
    
    if(Multiprev.length > 0){
        alert("You already selected the option");
        Multiprev = [];
    } else {
        if(catNum == 0){
        if(el.id == "Bread" || el.id == "Rice" || el.id == "Meat" || el.id == "Veggie" || el.id == "Soup" || el.id == "Spicy"){
        alert("Please choose a country first")
        } else {
            document.querySelector(".selection").appendChild(newSel);
            selArr.push(el.id);
            selNum++;
            catNum++;        
        }    
    } else{
        if(selNum < 7){
            document.querySelector(".selection").appendChild(newSel);
            selArr.push(el.id);
            selNum++;
            catNum++;        
        } else {
            alert("You've had the max number of choices")
            selNum = 7;
            catNum = 6;
            }    
        }         
    }
    
    var WeSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Western") != -1);
    });
    
    var KJSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("KJ") != -1)
    })
    
    var InSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Indian") != -1)
    })
    
    if(WeSel.length > 0){
        Spicy.style.opacity = 0;
        Noodles.style.opacity = 0;
        Rice.style.opacity = 0;
    } else if(KJSel.length > 0){
        Bread.style.opacity = 0;
        Spicy.style.opacity = 0;
        Meat.style.opacity = 0;
        Veggie.style.opacity = 0;
    } else if(InSel.length > 0){
        Bread.style.opacity = 0;
        Rice.style.opacity = 0;
        Noodles.style.opacity = 0;
        Soup.style.opacity = 0;
    }
    
    if (WeSel.length > 0 && KJ.length > 0){
        Bread.style.opacity = 1;
        Rice.style.opacity = 1;
        Noodles.style.opacity = 1;
        Soup.style.opacity = 1;
        Meat.style.opacity = 1;
        Veggie.style.opacity = 1;
        Spicy.style.opacity = 0;
    } else if (WeSel.length > 0 && InSel.length > 0){
        Bread.style.opacity = 1;
        Rice.style.opacity = 0;
        Noodles.style.opacity = 0;
        Soup.style.opacity = 1;
        Meat.style.opacity = 1;
        Veggie.style.opacity = 1;
        Spicy.style.opacity = 1;
    } else if (KJ.length > 0 && InSel.length > 0){
        Bread.style.opacity = 0;
        Rice.style.opacity = 1;
        Noodles.style.opacity = 1;
        Soup.style.opacity = 1;
        Meat.style.opacity = 1;
        Veggie.style.opacity = 1;
        Spicy.style.opacity = 1;
    }
    
    if(WeSel.length > 0 && KJSel.length >0 && InSel.length > 0){
        Bread.style.opacity = 1;
        Rice.style.opacity = 1;
        Noodles.style.opacity = 1;
        Soup.style.opacity = 1;
        Meat.style.opacity = 1;
        Veggie.style.opacity = 1;
        Spicy.style.opacity = 1;
    }
    WeSel = [];
    KJSel = [];
    InSel = [];
}

function removeSel(el){
    el.parentElement.removeChild(el);
    selArr.splice(selArr.indexOf(el.id), 1);
    selNum--;
    catNum--;
}

function filterResults(){
    
    var SpicySel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Spicy") != -1);
    });
    
    var NoSpicySel = selArr.filter(function(obj, i){
        return (selArr.indexOf("NoSpicy") != -1);
    });
    
    var MeatSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Meat") != -1);
    });
    
    var VeggieSel = SpicySel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Veggie") != -1);
    });
    
    var BreadSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Bread") != -1);
    });
    
    var NoBreadSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("NoBread") != -1);
    });
    
    var SoupSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Soup") != -1);
    });
    
    var NoSoupSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("NoSoup") != -1);
    });
    
    var RiceSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Rice") != -1);
    });
    
    var NoRiceSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("NoRice") != -1);
    });
    
    var NoodleSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("Noodle") != -1);
    });
    
    var NoNoodleSel = selArr.filter(function(obj, i){
        return (selArr.indexOf("NoNoodle") != -1);
    });
    
      
    
    console.log(filtered)
}


function BackToHome(){
    window.location.href = "index.html";
}
