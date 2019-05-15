var results = [
    {
        category:["western", "indian"],
        title:"Sula Indian",
        links:"blahblah google search",
        desc:"blah blah bla",
        imgs:"img/whatever.jpg"
        //....
    },
    {
        category:["western", "indian"],
        title:"Sula Indian",
        links:"blahblah google search",
        desc:"blah blah bla",
        imgs:"img/whatever.jpg"
        //....
    }
];
 
var filteredFood = results.filter(function(obj, i){
    
    return (obj.title == pkg.sel1 && obj.category.indexOf(pkg.sel2) != -1);
})

//ui function
for (var i=0; i<filteredFood.length; i++){
    var newImg = createElement("")
    newImg.src = filterdFood[i].imgs;
}