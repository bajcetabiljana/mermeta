
function addClass(el) {
    // brisanje klase selected sa prethodno izabranih
    const collection = document.getElementsByClassName("selected");
    for (old of collection) {
       // old.className = "";
        //ovako ce da obrise sve classe 
        //ili
        old.classList.remove("selected");
        //ovako brise samo klasu selected

    }
    // stavljanje klase selected na element
    el.classList.add("selected");
}




function saznajVise(){
    const el = document.querySelector(".info h1");
    el.classList.add("huge");
}


function toggleDisplayBlock(el){
    var st = getComputedStyle(el);
           
    if(st.display === "block") {
        el.style.display = "none";
    }
    else {
        el.style.display = "block";
    } 
}
function toggleMenu() {
var el = document.getElementById("toggle");
   toggleDisplayBlock(el);
   el = document.getElementById("toggle2");
   toggleDisplayBlock(el);
}


  
  
  
  




  
  
  
  
  
  
  
  