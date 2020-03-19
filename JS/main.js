//DOM
//querySelector = un elemento
//querySelectorAll = varios elementos

/*let links=document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});*/

let celdas=document.querySelectorAll("td");

celdas.forEach(function(td){
    td,addEventListener('click',function(){
        console.log("Click");
    })
});

