
let counter = 1;
setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter ++;
    if(counter > 8)
    counter= 1;
 
},3000);
 

const nextBtn = document.querySelector("#next");
nextBtn.onclick = function(){
    counter += 1;
    if(counter > 8)
    counter= 1;
};

const prevBtn = document.querySelector("#prev");
prevBtn.addEventListener = function(){
    counter += -1;
    if(counter < 1)
    counter= 8;
};

