const menu = document.querySelector("#listdown");
const menuicon = document.querySelector(".menuIcon");
menuicon.addEventListener("click", function(){
    if(menu.style.right == "-100%")
        menu.style.right = "10%";
    else{
        menu.style.right = "-100%";
    }
       
})




