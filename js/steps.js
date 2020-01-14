var stepPage = document.querySelector("#step-page"),
    resultPage = document.querySelector("#result-page"),
    selIcon1 = document.querySelector(".sel1"),
    selIcon2 = document.querySelector(".sel2"),
    result_icon2 = document.querySelector(".sel42"), 
    result_icon3 = document.querySelector(".sel43"),
    popUp = document.querySelector(".popup"),
    finalImg = document.querySelector(".final-img"),
    westernMove = document.querySelector(".western"),
    KJMove = document.querySelector(".KJ"),
    indianMove = document.querySelector(".indian"),
    ca1Move = document.querySelector(".ca1"),
    ca2Move = document.querySelector(".ca2"),
    ca3Move = document.querySelector(".ca3"),
    ca4Move = document.querySelector(".ca4"),
    selMove = document.querySelector("#selection-container"),
    step1But = document.querySelectorAll(".steps")[0],
    step2But = document.querySelectorAll(".steps")[1],
    step3But = document.querySelectorAll(".steps")[2];

var selection = {
    western : "img/icons/western.svg",
    KJ : "img/icons/japan.svg",
    indian : "img/icons/indian.svg",
    veggie : "img/icons/veggie-icon.svg",
    meat : "img/icons/meat-icon.svg",
    noodles : "img/icons/noodles-icon.svg",
    rice : "img/icons/rice-icon.svg",
    soup : "img/icons/soup-icon.svg",
    spicy : "img/icons/spicy-icon.svg",
    bread : "img/icons/bread-icon.svg"
}
 
var patterns = { 
    pt1 : "../foodmatchV1.3/img/ct-patterns/pattern-1.svg",
    pt2 : "../foodmatchV1.3/img/ct-patterns/pattern-2.svg", 
    pt3 : "../foodmatchV1.3/img/ct-patterns/pattern-3.svg", 
    pt4 : "../foodmatchV1.3/img/ct-patterns/pattern-4.svg", 
    pt5 : "../foodmatchV1.3/img/ct-patterns/pattern-5.svg", 
    pt6 : "../foodmatchV1.3/img/ct-patterns/pattern-6.svg", 
    pt7 : "../foodmatchV1.3/img/ct-patterns/pattern-7.svg" 
}
 
var categories = {
    indian1 : "Meat",
    indian2 : "Veggie",
    meat1 : "Spicy",
    meat2 : "No Spicy",
    veggie1 : "Spicy",
    veggie2 : "No Spicy",
    KJ1 : "Rice",
    KJ2 : "No Rice",
    rice1 : "Soup",
    rice2 : "No Soup",
    noRice1: "Noodle",
    noRice2: "No Noodle",
    west1: "Meat",
    west2: "Veggie",
    westMeat1: "Bread",
    westMeat2: "No Bread",
    westVeg1: "Soup",
    westVeg2: "No Soup"
    
}


var resultTitle = {
    kolhapuri : "Kolhapuri",
    kozhicurry : "Kozhi Curry",
    paprichaat : "Papari Chaat",
    tandoorichicken : "Tandoori Chicken",
    spciylentilquinoacurry : "Spicy Lentil Quinoa Curry",
    indiandahl : "Indian Dahl",
    dalchaawal : "Dal Chaawal",
    rajma : "Rajma",
    kimchistew : "Kimchi Stew",
    misosoup : "Miso Soup",
    koreanbbq : "Korean BBQ",
    sushi : "Sushi",
    bibimbap : "Bibimbap",
    ramen : "Ramen",
    udon : "Udon",
    sashimi : "Sashimi",
    mandu : "Mandu",
    cheeseburger : "CheeseBurger",
    pepperonipizza : "Pepperoni Pizza",
    salmongreeksalad : "Salmon with Greek Salad",
    steak : "Steak with Wedge Potatoes",
    minestronesoup : "Classic Minestrone Soup",
    squashsoup : "Roasted Butternut Squash Soup",
    quinoasalad : "Quinoa Salad",
    kalepesto : "Super Kale Pesto"
}

var imgs = {
    kolhapuri : "img/foodimgs/kolhapuri.jpg",
    kozhicurry : "img/foodimgs/kozhicurry.jpg",
    paprichaat : "img/foodimgs/paprichaat.jpg",
    tandoorichicken : "img/foodimgs/tandoorichicken.jpg",
    spciylentilquinoacurry : "img/foodimgs/lentilcurry.jpg",
    indiandahl : "img/foodimgs/dahl.jpg",
    dalchaawal : "img/foodimgs/dalchaawal.jpg",
    rajma : "img/foodimgs/rajma.JPG",
    kimchistew : "img/foodimgs/kimchistew.JPG",
    misosoup : "img/foodimgs/misosoup.jpg",
    koreanbbq : "img/foodimgs/koreanbbq.jpg",
    sushi : "img/foodimgs/sushi.jpg",
    bibimbap : "img/foodimgs/bibimbap.jpg",
    ramen : "img/foodimgs/ramen.jpg",
    udon : "img/foodimgs/udon.jpg",
    sashimi : "img/foodimgs/sashimi.jpg",
    mandu : "img/foodimgs/mandu.jpg",
    cheeseburger : "img/foodimgs/burger.jpg",
    pepperonipizza : "img/foodimgs/pizza.jpg",
    salmongreeksalad : "img/foodimgs/greeksalad.jpg",
    steak : "img/foodimgs/steak.jpg",
    minestronesoup : "img/foodimgs/minestrone.jpg",
    squashsoup : "img/foodimgs/butternut.jpg",
    quinoasalad : "img/foodimgs/quinoasalad.jpg",
    kalepesto : "img/foodimgs/kalepesto.jpg"
}

var resultDes = {
    kolhapuri : "Congratulations!  Based off your selections we'd recommend Kolhapuri Chicken! This is a very spicy and full flavoured dish, with unique flavors that comes from the fresh ground spices and grated coconut.  You can find this dish at the restaurents listed below.  Enjoy!",
    kozhicurry : "Kozhi Curry is a flavorful, thick curry from Southern India.  This curry mouthwatering flavour laregly comes the coconut oil, coconut milk and unique blend of spices used.  This is a deliciously spicy curry, we recommend the restaurents below for the best verisons of the delicatable dish!",
    paprichaat : "Papri chaat is a popular traditional street food from India. This dish is typically a sweet, sour and tangy with a creamy &amp; crunchy texture.  Based off your selections we think that this dish is a perfect fit for you!  You can find this dish locally at the restaurents listed below.",
    tandoorichicken : "Tandoori Chicken is a chicken dish prepared by roasting chicken marinated in yoghurt and spices.  The dish originated from the Indian subcontinent and is popular in many parts of the world.  You can find many version of this popular dish in Vancouver but we recommend the spots listed below.  Enjoy!",
    spciylentilquinoacurry : "This lentil curry is a so delicious due to the use of coconut milk late in the cooking process.  Try this amazing dish at one of the restaurents we've recommended below.  Many people try to make this dish but few do it as well as the restaurants below.  Enjoy!",
    indiandahl : "Dahl is a popular lentil dish, full of flavour!  It's a popular dish all over the world and is commonly flavoured with many spicy's.  It is commonly served on rice and can be made to be as spicy as you prefer.  Check out the restaurents listed below to try this delicious dish!",
    dalchaawal : "Dal Chaawal is a very popular dish in the South Eastern region of India.  It's a mix of rice and lentil soup (Dal) and is a staple in certain parts of India. This dish is commonly, difficult to find in Canada but don't worry, FoodMatch has got you covered!  Check out the restaurents below to give Dahl Chaawal a try.",
    rajma : "This popular vegetarian dish consists of red kidney beans and a thick gravy made of many Indian spices.  It is usually served on a bed of rice and commonly consists of chopped onions, tomatoes, ginger, garlic and many fresh spices.  Try Rajma today at a restaurent near you!",
    kimchistew: "Woah, congratulations! You've selected Kimchi Stew. This beloved Korean dish is warm, hearty, spicy and very delicious. Check out our recommendations to find this foreign dish across Vancouver. You won't regret it!",
    misosoup: "This is a traditional Japanese soup, usually served with a bowl of steaming hot rice. The ingredients are basic but the flavour is divine. Many restaurents make Miso soup but we hunted down the best spots in Vancouver for a truly authentic verison of this delicious soup. Check out our recommendations below and enjoy!",
    koreanbbq: "Lucky you! You have chosen Korean BBQ and you should be very excited. This popular Korean style dish usually consists of several different kinds of meat grilled to perfection on a gas or charcoal grill. These slices of meat are usually marinated in a variety of different Korean sauces to really bring out the flavour in the meats. Check out our recommendations below for a delicious Korean BBQ joint near you!",
    sushi: "Congratulations, you'll be eating Sushi tonight! Sushi is popular dish in this region but not many restaurents do it as well as the restaurents listed below. Get the freshest cuts of fish, vegetables and rice at these spots today and experience what real Sushi is all about!",
    Bibimbap:"No way! You're eating Bibimbap for dinner! This Korean dish is commonly served on a bed of wam white rice and topped with namul, gochujang (spicy sauce), soy sauce and doenjang. Check out our restaurent listings below for the best versions of this delicious meal.",
    ramen: "Lucky you! You've selected Ramen. This popular Japanese dish is typically served on a bed of wheat noodles with your chose of meat and veggies. Ramen is also excellent as a vegetarian option if that's more your style. Ramen was first introduced in Japan in the 1660s, so you can bet this dish is packed with masterful and ancient flavours. Check out our recommendations below for the best Ramen spots in Vancouver",
    udon: "Congrats! You've selection Udon! This famous Japanese cuisine is often served hot as a noodle soup in it's simplest form. You can get many types of Udon with varying flavours and textures. Oh and don't forget, Udon is usually paired with other delicious Japanese foods like tempura. Check out our recommendations below for the best restaurents in town!",
    sashimi: "Sashimi is a dish consisting of very fresh raw fish and meat sliced into thin peices and often eaten with soy sauce. This dish can be found in many Japanese restaurents in Vancouver but none better then our recommendations below. Try this deliciousy, simple dish today and experience the magical flavours of Japan.",
    mandu: "Mandu is korean dish consisting of delicious dumplings filled with savoury meats. Mandu is a long standing cuisine of the Korean royal court and available widely throughout Korean. Unfortunately it's a little bit more difficult to find in Vancouver...but lucky for you, FoodMatch has got your back! Check out our restaruent recommendations to find this delicious dish today!",
    cheesburger: "This classic western dish can be found in all different types of delicious forms in Vancouver but to find a really great cheesburger and fries you must search high and low. Thankfully, FoodMatch has done the searching for you! Check out the restaurent recommendation section below and discover how delicious a Cheesburger with Fries can really be!",
    pepperoniPizza: "Congratulations! You've selection Pepperoni Pizze! A classic western food, this dish can be found commonly in Vancouver. Unfortunately the overwhelming amount of restaurents making this dish means it's tough to find a exceptional version. Try out our restaurent recommendations today and experience just how great Pepperoni Pizza can really be!",
    salmonGreek: "Congrats! You've selected Salmon with greek salad. This dish is not only delicious but a healthy alternative. Salmon is jammed backed with protein and the greek salad will help you reach your daily intact of vegetables in a flash. Try the restaurent recommendations now for the most delicious plate of this food now!",
    steakWedge: "Is there anything better then a perfectly cooked steak? How about a perfectly cooked steak with a stack of everyones favourite wedge fries? This simple and classic dish is one of the most satisifying dishes you are likly to find but unfortunately finding the best quality potatoes and steak can be a challenge. Once again, FoodMatch has got you covered! Check out our restaurent recommendations below for the best Steak and Wedge Fries you've ever tried!",
    minstrone: "Minestrone is a thick soup with Italien origins. This soup is made with a variet of different vegetables and often contains rice or paste. This soup also commonly contains beans, onions, celery and carrots. You can find this soup widely in Vancouver but try our recommendations below for the very best Minestrone you've ever had!",
    butternut: "This thick soup, rich soup is a serious flavour bommb! Made with roasted Butternut squash and a variet of vegetables this soup is perfect for a cool, wet Vancouver day. Try this soup today and experience the warmth and comfort of this delicious dish. We've searched high and low for the best Butternut Squash Soup in Vancouver, check out t]he restaurent recommendations best version of this soup now!",
    quinoa: "Quinoa is an ancient grain, with amazing health benefits. This grain can be combined into many dishes but it is largely considered best amongst some fresh vegetables in salad form. Find the most delicious Quinoa Salad's in Vancouver in our restaurent recommendation section listed below. Enjoy!",
    kalePesto: "Made with kale, omega 3 rich hemp seeds and flaxseed oil, this deliciously healthy pasta is an amazing dish. It is far from your typical pasta and that departure is welcomed here at FoodMatch. Give this unqiue and lovely recipe a try today and find out what all the talk is all about. Check out our restaurent reocomendations below and enjoy!"
}

var restTitle = {
    indian1: "Sula Indian",
    indian2: "Vij's",
    indian3: "Indian Roti Kitchen",
    indian4: "House of Dosa",
    west1: "Burgoo",
    west2: "Forage",
    west3: "Joe's Grill",
    west4: "Five Guys Burgers",  
    kj1: "Kosoo",
    kj2: "Ma Dang Goul",
    kj3: "Minami",
    kj4: "Shizenya",
}

var restLinks = {
    indian1: "https://www.google.com/search?tbm=lcl&ei=CIvDXLSuBZ_I0PEPzPStgAE&q=sula+indian&oq=sula+indian&gs_l=psy-ab.3..35i39k1l2j0l7j0i67k1.80948.82954.0.83161.11.11.0.0.0.0.142.946.7j4.11.0....0...1c.1.64.psy-ab..0.11.945...0i131k1j0i131i67k1.0.1oDbMdhh_TI#rlfi=hd:;si:2290382362583160178;mv:!1m2!1d49.27462397731904!2d-123.06902514584321!2m2!1d49.274264022680974!2d-123.06957685415676",
    indian2: "https://www.google.com/search?tbm=lcl&ei=XIvDXIjpFJ3M0PEPhYGv0AI&q=vij%27s&oq=vij%27s&gs_l=psy-ab.3..0i20i263k1j0i273k1l2j0i67k1j0l4j0i67k1j0.8510.9255.0.9646.5.4.0.1.1.0.99.346.4.4.0..3..0...1c.1.64.psy-ab..0.5.346...35i39k1j0i131k1j0i131i67k1.0.HPpFSSfEF74#rlfi=hd:;si:;mv:!1m2!1d49.261867099999996!2d-123.11338830000001!2m2!1d49.2572924!2d-123.13952189999999;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9",
    indian3: "https://www.google.com/search?tbm=lcl&ei=ZovDXKrWHICu0PEPgN-p-AI&q=indian+roti+kitchen&oq=indian+roti+kitchen&gs_l=psy-ab.3..35i39k1j0l4j0i22i30k1l2j38.10501.13359.0.13536.19.19.0.0.0.0.151.1365.16j3.19.0....0...1c.1.64.psy-ab..0.19.1364...0i67k1j0i131k1j0i20i263k1.0.0KOXp7lMobQ#rlfi=hd:;si:6947461528097454189;mv:!1m2!1d49.259219477319036!2d-123.11493683195444!2m2!1d49.25885952268097!2d-123.11548836804555",
    indian4: "https://www.google.com/search?tbm=lcl&ei=dIvDXJvwGruz0PEPoumL-Ak&q=house+of+dosa&oq=house+of+dosa&gs_l=psy-ab.3..0i131k1j0l9.10795.12278.0.12394.13.10.0.3.3.0.127.762.8j2.10.0..2..0...1c.1.64.psy-ab..0.13.765...35i39k1j0i273k1j0i67k1j0i131i67k1j0i131i273k1j0i20i263k1.0.kpOlL_VjMz4#rlfi=hd:;si:3407303857769739896;mv:!1m2!1d49.25061177731904!2d-123.07604938003945!2m2!1d49.25025182268097!2d-123.07660081996055",
    west1: "https://www.google.com/search?tbm=lcl&ei=gYvDXN_PE4--0PEP9pmzoAk&q=burgoo&oq=burgoo&gs_l=psy-ab.3..0i273k1j0i20i263k1j0l8.8081.8783.0.8977.6.6.0.0.0.0.103.497.5j1.6.0..2..0...1c.1.64.psy-ab..0.6.496...35i39k1j0i67k1j0i131k1j0i131i273k1.0.H1CwwrJq4Uc#rlfi=hd:;si:;mv:!1m2!1d49.313832999999995!2d-123.07267449999998!2m2!1d49.2544726!2d-123.21484849999999;tbs:lrf:!2m1!1e3!3sIAE,lf:1,lf_ui:4",
    west2: "https://www.google.com/search?tbm=lcl&ei=iovDXNuaN57B0PEPk4uk0Ac&q=forage+restaurant&oq=forage+res&gs_l=psy-ab.3.0.0i20i263k1j0l5j0i20i263k1j0l3.12233.14335.0.15466.12.12.0.0.0.0.124.739.10j1.12.0..2..0...1c.1.64.psy-ab..0.12.785.6..35i39k1j0i131i67k1j0i67k1j0i131k1j0i131i273k1j0i273k1.47.1AnM4-b2AsM#rlfi=hd:;si:13382728329850112123;mv:!1m2!1d49.28732717731902!2d-123.12876767477674!2m2!1d49.286967222680964!2d-123.12931952522324",
    west3: "https://www.google.com/search?tbm=lcl&ei=movDXNTINezJ0PEPoYW3yAE&q=joe%27s+grill&oq=joe%27s+grill&gs_l=psy-ab.3..0i273k1j0l9.9223.12495.0.12625.17.9.3.5.5.0.90.575.9.9.0..2..0...1c.1.64.psy-ab..0.17.588...35i39k1j0i67k1j0i131k1j0i20i263k1j0i22i30k1.0.z5RBkovfTFo#rlfi=hd:;si:;mv:!1m2!1d49.291803200000004!2d-123.0986882!2m2!1d49.2560715!2d-123.13987309999997;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9",
    west4: "https://www.google.com/search?tbm=lcl&ei=t4vDXMDPOvrB0PEP9uyfuAI&q=five+guys+burger+svancouver&oq=five+guys+burger+svancouver&gs_l=psy-ab.3..0i13k1l2j0i13i30k1j0i8i13i30k1l2.4721.5701.0.5850.8.8.0.0.0.0.98.540.8.8.0....0...1c.1.64.psy-ab..1.7.477...0j38j0i7i30k1.0.0PEYHV7dIqI#rlfi=hd:;si:13194763813197015086;mv:!1m2!1d49.28126737731903!2d-123.11875660868378!2m2!1d49.28090742268097!2d-123.11930839131617",  
    kj1: "https://www.google.com/search?tbm=lcl&ei=vovDXL_yGtTA7gKSz63gAw&q=kosoo+vancouver&oq=kosoo&gs_l=psy-ab.3.0.0i67k1j0l3j0i67k1j0l5.13795.14615.0.16240.5.5.0.0.0.0.96.363.5.5.0..2..0...1c.1.64.psy-ab..0.5.363...35i39k1j0i131k1j0i273k1j0i20i263k1.0.4IkYNNv4zZA#rlfi=hd:;si:3082623070002795596;mv:!1m2!1d49.28924437731903!2d-123.13209566404689!2m2!1d49.288884422680965!2d-123.13264753595311",
    kj2: "https://www.google.com/search?tbm=lcl&ei=z4vDXIXLC8-r0PEPtJKt8Ag&q=ma+deng+goul+vancouver&oq=ma+deng+goul+vancouver&gs_l=psy-ab.3..0i13k1j0i13i30k1j0i8i13i30k1.9507.12389.0.12874.12.12.0.0.0.0.69.656.12.12.0....0...1c.1.64.psy-ab..0.6.343...38j0i7i30k1j0i7i10i30k1j0i8i7i30k1.0.IiLmIzlWoHw#rlfi=hd:;si:821031304400832210;mv:!1m2!1d49.29114057731903!2d-123.13618825343337!2m2!1d49.29078062268097!2d-123.13674014656658",
    kj3: "https://www.google.com/search?tbm=lcl&ei=3IvDXL23I5W-0PEP746f4Ac&q=minami+vancouver&oq=minami+vancouver&gs_l=psy-ab.3..0l4j0i7i30k1l5j0.15050.16711.0.16914.6.6.0.0.0.0.69.344.6.6.0....0...1c.1.64.psy-ab..0.6.343...0i13k1.0.bo_IBien84g#rlfi=hd:;si:16185791595485661218;mv:!1m2!1d49.27538107731903!2d-123.1204500416091!2m2!1d49.27502112268097!2d-123.12100175839089",
    kj4: "https://www.google.com/search?tbm=lcl&ei=7YvDXNfUPNL19AOw04DgAw&q=shizenya+vancouver&oq=shizenya+vancouver&gs_l=psy-ab.3..0j0i7i30k1l3j0i7i10i30k1j0i7i30k1l3j0i10i30k1j38.9836.12641.0.12811.10.10.0.0.0.0.89.630.10.10.0....0...1c.1.64.psy-ab..0.10.629...35i39k1j0i67k1j0i131k1j0i13k1.0.Q-YN4Y0UUMM#rlfi=hd:;si:;mv:!1m2!1d49.282083799999995!2d-123.1244873!2m2!1d49.2622393!2d-123.12943630000001;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:9",
    
}

/*=======   PKG  ==============*/

var pkg = {
    ctName1 : "",
    ctName2 : "",
    ctName3 : "",
    ctName4 : "",
    pattern1 : "",
    pattern2 : "",
    pattern3 : "",
    pattern4 : "",
    sel1 : "",
    sel2 : "",
    sel3 : "",
    bgPt1 : "",
    bgPt1 : "",
    rTitle : "",
    rDes : "",
    recTitle1: "",
    recTitle2: "",
    recTitle3: "",
    recTitle4: "",
    rlink1: "",
    rlink2: "",
    rlink3: "",
    rlink4: "",
    foodimg : "",
    popupImg : "",
  
}

/*=======   HANDLER  =========*/

var handler = {
    set:function(obj, props, value){
        if(props == "ctName1"){
            ChangeCtNameUI1(value);
        }
        
        if(props == "ctName2"){
            ChangeCtNameUI2(value);
        } 
        
        if(props == "ctName3"){
            ChangeCtNameUI3(value);
        }
        
        if(props == "ctName4"){
            ChangeCtNameUI4(value);
        }
        
        if(props == "pattern1"){
            ChangePattern1UI(value);
        }
        
        if(props == "pattern2"){
            ChangePattern2UI(value);
        }
        
        if(props == "pattern3"){
            ChangePattern3UI(value);
        }
        
        if(props == "pattern4"){
            ChangePattern4UI(value);
        }
        
        if(props == "sel1"){
            ChangeSel1IconUI(value);
        }
        
        if(props == "sel2"){
            ChangeSel2IconUI(value);
        }
        
        if (props == "sel3"){
            ChangeSel3IconUI(value);
        }
        
        if (props == "rTitle"){
            ChangeTitleUI(value);
        }
        
        if(props == "rDes"){
            ChangeDesUI(value);
        }
        
        if(props == "foodimg"){
            ChangeFoodImgUI(value);
        }
        
        if(props == "recTitle1"){
            ChangeRecTit1UI(value);
        }
        
        if(props == "recTitle2"){
            ChangeRecTit2UI(value);
        }
        
        if(props == "recTitle3"){
            ChangeRecTit3UI(value);
        }
        
        if(props == "recTitle4"){
            ChangeRecTit4UI(value);
        }
        
        if(props == "rlink1"){
            ChangeLink1UI(value);
        }
        
         if(props == "rlink2"){
            ChangeLink2UI(value);
        }
        
         if(props == "rlink3"){
            ChangeLink3UI(value);
        }
        
         if(props == "rlink4"){
            ChangeLink4UI(value);
        }
    }
}

var proxy = new Proxy(pkg, handler);

/*=======  STATE FUNCTIONS   ========*/

window.addEventListener("load", function(){
    selIcon2.style.display = "none";
    step1But.classList.add("step11");
    sessionStorage.setItem("pageNum", 1);
})

function Step1(el){
    if(el.textContent == "Indian"){
        pkg.ctName1 = categories.indian1;
        pkg.ctName2 = categories.indian2;
        pkg.sel1 = selection.indian;
    }
    
     if(el.textContent == "Korean/Japanese"){
        pkg.ctName1 = categories.KJ1;
        pkg.ctName2 = categories.KJ2;
        pkg.sel1 = selection.KJ;
    }
    
     if(el.textContent == "Western"){
        pkg.ctName1 = categories.west1;
        pkg.ctName2 = categories.west2;
        pkg.sel1 = selection.western;
    }
    
    ptNum1 = Math.floor(Math.random()*3)+1;
    ptNum2 = Math.floor(Math.random()*3)+1;
    
    if(ptNum1 == ptNum2){
        ptNum1 + 1; 
        if (ptNum1 == 6){
            ptNum1 = 1;
        }
    }
    
    pkg.pattern1 = patterns["pt"+ptNum1];
    pkg.pattern2 = patterns["pt"+ptNum2];
    
    proxy.ctName1 = pkg.ctName1;
    proxy.ctName2 = pkg.ctName2;
    proxy.pattern1 = pkg.pattern1;
    proxy.pattern2 = pkg.pattern2;
    
    proxy.sel1 = pkg.sel1;
    
    westernMove.style.transform = "translateX(-180%)";
    KJMove.style.transform = "translateX(-180%)";
    indianMove.style.transform = "translateX(-180%)";
    ca1Move.style.transform = "translateX(0)";
    ca2Move.style.transform = "translateX(0)";
    selMove.style.transform = "translateX(0)";
    
    step1But.classList.remove("step11");
    step2But.classList.add("step22");
    
    sessionStorage.setItem("pageNum", 2);
    }



function Step2(el){
    ptNum3 = Math.floor(Math.random()*6)+1;
    ptNum4 = Math.floor(Math.random()*6)+1;
    
    if(ptNum3 == ptNum4){
        ptNum3 + 1; 
        if (ptNum3 == 6){
            ptNum3 = 1;
        }  
    }
    
    
    ////INDIAN
    if(pkg.sel1 == selection.indian && el.textContent == "Meat"){
        pkg.ctName3 =  categories.meat1;
        pkg.ctName4 = categories.meat2;
        pkg.sel2 = selection.meat;
        selIcon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
        pkg.pattern3 = patterns.pt7;
        pkg.pattern4 = patterns.pt6;
    }
    
    if(pkg.sel1 == selection.indian && el.textContent == "Veggie"){
        pkg.ctName3 =  categories.veggie1;
        pkg.ctName4 = categories.veggie2;
        pkg.sel2 = selection.veggie;
        selIcon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
        pkg.pattern3 = patterns.pt7;
        pkg.pattern4 = patterns.pt6;
    }
 
    
    /////JAPANESE/KOREAN
    if(pkg.sel1 == selection.KJ && el.textContent == "Rice"){
        pkg.ctName3 = categories.rice1;
        pkg.ctName4 = categories.rice2;
        pkg.sel2 = selection.rice;
        selIcon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block"; 
        pkg.pattern3 = patterns["pt"+ptNum3];
        pkg.pattern4 = patterns["pt"+ptNum4];
    }
    
      if(pkg.sel1 == selection.KJ && el.textContent == "No Rice"){
        pkg.ctName3 = categories.noRice1;
        pkg.ctName4 = categories.noRice2;
        pkg.sel2 = "";
        selIcon2.style.display = "none";
        result_icon2.style.display = "none"; 
        pkg.pattern3 = patterns["pt"+ptNum3];
        pkg.pattern4 = patterns["pt"+ptNum4];
          
    }
    
    /////WESTERN
    
       if(pkg.sel1 == selection.western && el.textContent == "Meat"){
        pkg.ctName3 = categories.westMeat1;
        pkg.ctName4 = categories.westMeat2;
        pkg.sel2 = selection.meat;
        selIcon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block";
        pkg.pattern3 = patterns["pt"+ptNum3];
        pkg.pattern4 = patterns["pt"+ptNum4];
    }
         
      if(pkg.sel1 == selection.western && el.textContent == "Veggie"){
        pkg.ctName3 = categories.westVeg1;
        pkg.ctName4 = categories.westVeg2;
        pkg.sel2 = selection.veggie;
        selIcon2.style.display = "inline-block";
        result_icon2.style.display = "inline-block";
        pkg.pattern3 = patterns["pt"+ptNum3];
        pkg.pattern4 = patterns["pt"+ptNum4];
    }
    
    
        
    proxy.ctName3 = pkg.ctName3;
    proxy.ctName4 = pkg.ctName4;
    proxy.sel2 = pkg.sel2;
    proxy.pattern3 = pkg.pattern3;
    proxy.pattern4 = pkg.pattern4;
    
    step2But.classList.remove("step22");
    step3But.classList.add("step33");
    
    ca1Move.style.transform = "translateX(-180%)";
    ca2Move.style.transform = "translateX(-180%)";
    ca3Move.style.transform = "translateX(0)";
    ca4Move.style.transform = "translateX(0)";
    
    sessionStorage.setItem("pageNum", 3);
    
}

/*=================   STEP 3   =============================*/


function Step3(el){
    
    /*==================  INDIAN  ========================*/
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.kolhapuri;
            pkg.rDes = resultDes.kolhapuri;
            pkg.foodimg = imgs.kolhapuri;
            pkg.popupImg = imgs.kolhapuri;
        } else {
            pkg.rTitle = resultTitle.kozhicurry;
            pkg.rDes = resultDes.kozhicurry;
            pkg.foodimg = imgs.kozhicurry;
            pkg.popupImg = imgs.kozhicurry;
        }
        
            pkg.recTitle1 = restTitle.indian1;
            pkg.recTitle2 = restTitle.indian2;
            pkg.recTitle3 = restTitle.indian3;
            pkg.recTitle4 = restTitle.indian4;
        
            pkg.rlink1 = restLinks.indian1;
            pkg.rlink2 = restLinks.indian2;
            pkg.rlink3 = restLinks.indian3;
            pkg.rlink4 = restLinks.indian4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.meat && el.textContent == "No Spicy"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.paprichaat;
            pkg.rDes = resultDes.paprichaat;
            pkg.foodimg = imgs.paprichaat;
            pkg.popupImg = imgs.paprichaat;
        } else {
            pkg.rTitle = resultTitle.tandoorichicken;
            pkg.rDes = resultDes.tandoorichicken;
            pkg.foodimg = imgs.tandoorichicken;
            pkg.fpopupImg = imgs.tandoorichicken;
        }
        
            pkg.recTitle1 = restTitle.indian1;
            pkg.recTitle2 = restTitle.indian2;
            pkg.recTitle3 = restTitle.indian3;
            pkg.recTitle4 = restTitle.indian4;
        
            pkg.rlink1 = restLinks.indian1;
            pkg.rlink2 = restLinks.indian2;
            pkg.rlink3 = restLinks.indian3;
            pkg.rlink4 = restLinks.indian4;
        
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "Spicy"){
        pkg.sel3 = selection.spicy;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.spciylentilquinoacurry;
            pkg.rDes = resultDes.spciylentilquinoacurry;
            pkg.foodimg = imgs.spciylentilquinoacurry;
            pkg.popupImg = imgs.spciylentilquinoacurry;
        } else {
            pkg.rTitle = resultTitle.indiandahl;
            pkg.rDes = resultDes.indiandahl;
            pkg.foodimg = imgs.indiandahl;
            pkg.popupImg = imgs.indiandahl;
        }
        
            pkg.recTitle1 = restTitle.indian1;
            pkg.recTitle2 = restTitle.indian2;
            pkg.recTitle3 = restTitle.indian3;
            pkg.recTitle4 = restTitle.indian4;  
        
            pkg.rlink1 = restLinks.indian1;
            pkg.rlink2 = restLinks.indian2;
            pkg.rlink3 = restLinks.indian3;
            pkg.rlink4 = restLinks.indian4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.indian && pkg.sel2 == selection.veggie && el.textContent == "No Spicy"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.dalchaawal;
            pkg.rDes = resultDes.dalchaawal;
            pkg.foodimg = imgs.dalchaawal;
            pkg.popupImg = imgs.dalchaawal;
            
        } else {
            pkg.rTitle = resultTitle.rajma;
            pkg.rDes = resultDes.rajma;
            pkg.foodimg = imgs.rajma;
            pkg.popupImg = imgs.rajma;
        }
            pkg.recTitle1 = restTitle.indian1;
            pkg.recTitle2 = restTitle.indian2;
            pkg.recTitle3 = restTitle.indian3;
            pkg.recTitle4 = restTitle.indian4;
        
            pkg.rlink1 = restLinks.indian1;
            pkg.rlink2 = restLinks.indian2;
            pkg.rlink3 = restLinks.indian3;
            pkg.rlink4 = restLinks.indian4;
        
        result_icon3.style.display = "none";
    }
    
    /*=====================    KJ    ======================*/
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == selection.rice && el.textContent == "Soup"){
        pkg.sel3 = selection.soup;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.kimchistew;
            pkg.rDes = resultDes.kimchistew;
            pkg.foodimg = imgs.kimchistew;
            pkg.popupImg = imgs.kimchistew;
        } else {
            pkg.rTitle = resultTitle.misosoup;
            pkg.rDes = resultDes.misosoup;
            pkg.foodimg = imgs.misosoup;
            pkg.popupImg = imgs.misosoup;
        }
        
            pkg.recTitle1 = restTitle.kj1;
            pkg.recTitle2 = restTitle.kj2;
            pkg.recTitle3 = restTitle.kj3;
            pkg.recTitle4 = restTitle.kj4;
        
            pkg.rlink1 = restLinks.kj1;
            pkg.rlink2 = restLinks.kj2;
            pkg.rlink3 = restLinks.kj3;
            pkg.rlink4 = restLinks.kj4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == selection.rice && el.textContent == "No Soup"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random(),
            num3 = Math.random();
        if(Math.max(num1, num2, num3) == num1){
            pkg.rTitle = resultTitle.koreanbbq;
            pkg.rDes = resultDes.koreanbbq;
            pkg.foodimg = imgs.koreanbbq;
            pkg.popupImg = imgs.koreanbbq;
            
        } else if(Math.max(num1, num2, num3) == num2){
            pkg.rTitle = resultTitle.sushi;
            pkg.rDes = resultDes.sushi;
            pkg.foodimg = imgs.sushi;
            pkg.popupImg = imgs.sushi;
            
        } else if(Math.max(num1, num2, num3) == num3){
            pkg.rTitle = resultTitle.bibimbap;
            pkg.rDes = resultDes.Bibimbap;
            pkg.foodimg = imgs.bibimbap;
            pkg.popupImg = imgs.bibimbap;
            
        }
            pkg.recTitle1 = restTitle.kj1;
            pkg.recTitle2 = restTitle.kj2;
            pkg.recTitle3 = restTitle.kj3;
            pkg.recTitle4 = restTitle.kj4;
        
            pkg.rlink1 = restLinks.kj1;
            pkg.rlink2 = restLinks.kj2;
            pkg.rlink3 = restLinks.kj3;
            pkg.rlink4 = restLinks.kj4;
        
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == "" && el.textContent == "Noodle"){
        pkg.sel3 = selection.noodles;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.ramen;
            pkg.rDes = resultDes.ramen;
            pkg.foodimg = imgs.ramen;
            pkg.popupImg = imgs.ramen;
          
        } else {
            pkg.rTitle = resultTitle.udon;
            pkg.rDes = resultDes.udon;
            pkg.foodimg = imgs.udon;
            pkg.popupImg = imgs.udon;
            
        }
        
            pkg.recTitle1 = restTitle.kj1;
            pkg.recTitle2 = restTitle.kj2;
            pkg.recTitle3 = restTitle.kj3;
            pkg.recTitle4 = restTitle.kj4;
        
            pkg.rlink1 = restLinks.kj1;
            pkg.rlink2 = restLinks.kj2;
            pkg.rlink3 = restLinks.kj3;
            pkg.rlink4 = restLinks.kj4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.KJ && pkg.sel2 == "" && el.textContent == "No Noodle"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.sashimi;
            pkg.rDes = resultDes.sashimi;
            pkg.foodimg = imgs.sashimi;
            pkg.popupImg = imgs.sashimi;
            
        } else {
            pkg.rTitle = resultTitle.mandu;
            pkg.rDes = resultDes.mandu;
            pkg.foodimg = imgs.mandu;
            pkg.popupImg = imgs.mandu;
            
        }
        
            pkg.recTitle1 = restTitle.kj1;
            pkg.recTitle2 = restTitle.kj2;
            pkg.recTitle3 = restTitle.kj3;
            pkg.recTitle4 = restTitle.kj4;
        
            pkg.rlink1 = restLinks.kj1;
            pkg.rlink2 = restLinks.kj2;
            pkg.rlink3 = restLinks.kj3;
            pkg.rlink4 = restLinks.kj4;
            
        result_icon3.style.display = "none";
    }
    
    /*=========================  WESTERN  ==================================*/
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.meat && el.textContent == "Bread"){
        pkg.sel3 = selection.bread;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.cheeseburger;
            pkg.rDes = resultDes.cheesburger;
            pkg.foodimg = imgs.cheeseburger;
            pkg.popupImg = imgs.cheeseburger;
            
        } else {
            pkg.rTitle = resultTitle.pepperonipizza;
            pkg.rDes = resultDes.pepperoniPizza;
            pkg.foodimg = imgs.pepperonipizza;
            pkg.popupImg = imgs.pepperonipizza
        }
        
            pkg.recTitle1 = restTitle.west1;
            pkg.recTitle2 = restTitle.west2;
            pkg.recTitle3 = restTitle.west3;
            pkg.recTitle4 = restTitle.west4;
        
            pkg.rlink1 = restLinks.west1;
            pkg.rlink2 = restLinks.west2;
            pkg.rlink3 = restLinks.west3;
            pkg.rlink4 = restLinks.west4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.meat && el.textContent == "No Bread"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.salmongreeksalad;
            pkg.rDes = resultDes.salmonGreek;
            pkg.foodimg = imgs.salmongreeksalad;
            pkg.popupImg = imgs.salmongreeksalad;
            
        } else {
            pkg.rTitle = resultTitle.steak;
            pkg.rDes = resultDes.steakWedge;
            pkg.foodimg = imgs.steak;
            pkg.popupImg = imgs.steak;
            
        }
        
            pkg.recTitle1 = restTitle.west1;
            pkg.recTitle2 = restTitle.west2;
            pkg.recTitle3 = restTitle.west3;
            pkg.recTitle4 = restTitle.west4;
        
            pkg.rlink1 = restLinks.west1;
            pkg.rlink2 = restLinks.west2;
            pkg.rlink3 = restLinks.west3;
            pkg.rlink4 = restLinks.west4;
        
        result_icon3.style.display = "none";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.veggie && el.textContent == "Soup"){
        pkg.sel3 = selection.soup;
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.minestronesoup;
            pkg.rDes = resultDes.minstrone;
            pkg.foodimg = imgs.minestronesoup;
            pkg.popupImg = imgs.minestronesoup;
            
        } else {
            pkg.rTitle = resultTitle.squashsoup;
            pkg.rDes = resultDes.butternut;
            pkg.foodimg = imgs.squashsoup;
            pkg.popupImg = imgs.squashsoup;
            
        }
        
            pkg.recTitle1 = restTitle.west1;
            pkg.recTitle2 = restTitle.west2;
            pkg.recTitle3 = restTitle.west3;
            pkg.recTitle4 = restTitle.west4;
        
            pkg.rlink1 = restLinks.west1;
            pkg.rlink2 = restLinks.west2;
            pkg.rlink3 = restLinks.west3;
            pkg.rlink4 = restLinks.west4;
        
        result_icon3.style.display = "inline-block";
    }
    
    if(pkg.sel1 == selection.western && pkg.sel2 == selection.veggie && el.textContent == "No Soup"){
        pkg.sel3 = "";
        var num1 = Math.random(),
            num2 = Math.random();
        if(num1 < num2){
            pkg.rTitle = resultTitle.quinoasalad;
            pkg.rDes = resultDes.quinoa;
            pkg.foodimg = imgs.quinoasalad;
            pkg.popupImg = imgs.quinoasalad;

        } else {
            pkg.rTitle = resultTitle.kalepesto;
            pkg.rDes = resultDes.kalePesto;
            pkg.foodimg = imgs.kalepesto;
            pkg.popupImg = imgs.kalepesto;
            
        }
        
            pkg.recTitle1 = restTitle.west1;
            pkg.recTitle2 = restTitle.west2;
            pkg.recTitle3 = restTitle.west3;
            pkg.recTitle4 = restTitle.west4;
        
            pkg.rlink1 = restLinks.west1;
            pkg.rlink2 = restLinks.west2;
            pkg.rlink3 = restLinks.west3;
            pkg.rlink4 = restLinks.west4;
        result_icon3.style.display = "none";
    }
         
    
    proxy.sel3 = pkg.sel3;
    proxy.rTitle = pkg.rTitle;
    proxy.rDes = pkg.rDes;
    proxy.foodimg = pkg.foodimg;
    proxy.popupImg = pkg.popupImg;
    proxy.recTitle1 = pkg.recTitle1;
    proxy.recTitle2 = pkg.recTitle2;
    proxy.recTitle3 = pkg.recTitle3;
    proxy.recTitle4 = pkg.recTitle4;
    proxy.rlink1 = pkg.rlink1;
    proxy.rlink2 = pkg.rlink2;
    proxy.rlink3 = pkg.rlink3;
    proxy.rlink4 = pkg.rlink4;
    
    stepPage.style.display = "none";
    resultPage.style.display = "grid";
}



/*=======   UI FUNCTIONS     ==========*/

function ChangeCtNameUI1(val){
    document.querySelector(".ca1").innerText = val;
}

function ChangeCtNameUI2(val){
    document.querySelector(".ca2").innerText = val;
}

function ChangeCtNameUI3(val){
    document.querySelector(".ca3").innerText = val;
}

function ChangeCtNameUI4(val){
    document.querySelector(".ca4").innerText = val;
}

function ChangePattern1UI(val){
    document.querySelector(".ca1").style.backgroundImage = "url(" + val + ")";
}

function ChangePattern2UI(val){
    document.querySelector(".ca2").style.backgroundImage = "url(" + val + ")";
}

function ChangePattern3UI(val){
    document.querySelector(".ca3").style.backgroundImage = "url(" + val + ")";
}

function ChangePattern4UI(val){
    document.querySelector(".ca4").style.backgroundImage = "url(" + val + ")";
}


function ChangeSel1IconUI(val){
    selIcon1.src = val;
    document.querySelector(".sel41").src = val;
}

function ChangeSel2IconUI(val){
    selIcon2.src = val;
    document.querySelector(".sel42").src = val;
}

function ChangeSel3IconUI(val){
    document.querySelector(".sel43").src = val;
}

function ChangeTitleUI(val){
    document.querySelector("#foodname").innerText = val;
    document.querySelector(".match-title").innerText = val;
}

function ChangeDesUI(val){
    document.querySelector("#rDes").innerText = val;
}

function ChangeFoodImgUI(val){
    document.querySelector(".final-img").style.backgroundImage = "url(" + val + ")";
    document.querySelector(".popup-img").src = val;
}

function TriggerPopUp(){
  finalImg.style.opacity= "0";
  popUp.style.opacity = "1";
  popUp.style.zIndex = "2";

}

function closeBtn(){
  popUp.style.opacity = "0";
  popUp.style.zIndex = "-1";
  finalImg.style.opacity = "1";
}

function ChangeRecTit1UI(val){
    document.querySelector(".res1").innerHTML = val;
//    document.querySelector(".res1")
}

function ChangeRecTit2UI(val){
    document.querySelector(".res2").innerHTML = val;
//    document.querySelector(".res1")
}

function ChangeRecTit3UI(val){
    document.querySelector(".res3").innerHTML = val;
//    document.querySelector(".res1")
}

function ChangeRecTit4UI(val){
    document.querySelector(".res4").innerHTML = val;
//    document.querySelector(".res1")
}

function ChangeLink1UI(val){
    document.querySelector(".res1").href = val;
}

function ChangeLink2UI(val){
    document.querySelector(".res2").href = val;
}

function ChangeLink3UI(val){
    document.querySelector(".res3").href = val;
}

function ChangeLink4UI(val){
    document.querySelector(".res4").href = val;
}




/*=================  BACK BUTTONS =========================*/

function BackToHome(){
    window.location.href = "index.html";
}

function BackToStep(){
    
    if(sessionStorage.getItem("pageNum") == 1){
        window.location.href = "index.html";
    }
    
    if(sessionStorage.getItem("pageNum") == 2){
        westernMove.style.transform = "translateX(0)";
        KJMove.style.transform = "translateX(0)";
        indianMove.style.transform = "translateX(0)";
        ca1Move.style.transform = "translateX(-180%)";
        ca2Move.style.transform = "translateX(-180%)";
        selMove.style.transform = "translateX(-180%)";
        step2But.classList.remove("step22");
        step1But.classList.add("step11");
        sessionStorage.setItem("pageNum", 1);
    }
    
    if(sessionStorage.getItem("pageNum") == 3){
        ca1Move.style.transform = "translateX(0)";
        ca2Move.style.transform = "translateX(0)";
        ca3Move.style.transform = "translateX(-180%)";
        ca4Move.style.transform = "translateX(-180%)";
        step3But.classList.remove("step33");
        step2But.classList.add("step22");
        selIcon2.style.display = "none";
        sessionStorage.setItem("pageNum", 2);
    }
}

function BackToStep1(){
    westernMove.style.transform = "translateX(0)";
    KJMove.style.transform = "translateX(0)";
    indianMove.style.transform = "translateX(0)";
    ca1Move.style.transform = "translateX(-180%)";
    ca2Move.style.transform = "translateX(-180%)";
    ca3Move.style.transform = "translateX(-180%)";
    ca4Move.style.transform = "translateX(-180%)";
    selMove.style.transform = "translateX(-180%)";
    step2But.classList.remove("step22");
    step3But.classList.remove("step33");
    step1But.classList.add("step11");
    selIcon2.style.display = "none";
    sessionStorage.setItem("pageNum", 1);
}

function BackToStep2(){
    if(sessionStorage.getItem("pageNum") == 3){
        ca1Move.style.transform = "translateX(0)";
        ca2Move.style.transform = "translateX(0)";
        ca3Move.style.transform = "translateX(-180%)";
        ca4Move.style.transform = "translateX(-180%)";
        step3But.classList.remove("step33");
        step2But.classList.add("step22");
        selIcon2.style.display = "none";
        sessionStorage.setItem("pageNum", 2);
    }
}

function BackToStep3(){
    stepPage.style.display = "grid";
    resultPage.style.display = "none";
}

function TryAgainBut(){
    resultPage.style.display = "none";
    stepPage.style.display = "grid";
    westernMove.style.transform = "translateX(0)";
    KJMove.style.transform = "translateX(0)";
    indianMove.style.transform = "translateX(0)";
    ca3Move.style.transform = "translateX(-180%)";
    ca4Move.style.transform = "translateX(-180%)";
    selMove.style.transform = "translateX(-180%)";
    step1But.classList.add("step11");
    step3But.classList.remove("step33");
    sessionStorage.setItem("pageNum", 1);
}



