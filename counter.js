

let counter =0;

const increase = document.getElementById("plus");
const decrease =  document.getElementById("minus");
const clear =  document.getElementById("reset");
 const x =   document.getElementById("counter")
const h1 = document.getElementById("span");



const plus = () =>{
    counter++;
    h1.innerText = counter;

};

const minus =()=> {
    counter--;
    h1.innerText = counter;
};

const reset =() => {
    counter=0;

    h1.innerText = counter;
}

increase.addEventListener("click", plus);
decrease.addEventListener("click", minus);
clear.addEventListener("click", reset);



