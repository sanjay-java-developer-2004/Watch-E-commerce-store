let showsearch=document.getElementById("search-bar")
function show(){
    showsearch.style.display="block";
}
function remove(){
    showsearch.style.display="none"
}


let showbar=document.getElementById("show-nav-bar")
let tongle=document.getElementById("nav-bar-tongle")

function shownavbar(){
    showbar.style.display="flex"
    tongle.style.display="none"
}

function removenavbar(){
    showbar.style.display="none"
    tongle.style.display="flex"
}