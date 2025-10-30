class calc{
    constructor(atoo, btoo){
    this.atoo = atoo ;
    this.btoo = btoo 

    }



    add () {
        console.log(" nemeh this.atoo",this.atoo)
        console.log("nemeh his.btoo",this.btoo)
        return this.atoo+this.btoo;
    }

    subtract () {

        console.log("this.atoo",this.atoo)
        console.log("his.btoo",this.btoo)
        return this.atoo-this.btoo;
    }

    multiply () {
        return this.atoo*this.btoo;
    }

    divide () {
        return this.atoo/this.btoo;
    }
}




const addd = document.getElementById("addBtn").addEventListener("click", () => {
    const atoo = Number(document.getElementById("atoo").value);
    const btoo = Number(document.getElementById("btoo").value);

    const clc = new calc(atoo, btoo);


    document.getElementById("result").textContent = 
    `Result: ${clc.add()}`
})


const subtractt = document.getElementById("subtractBtn").addEventListener("click", () =>{
    const atoo = Number(document.getElementById("atoo").value);
    const btoo = Number(document.getElementById("btoo").value);

    const clc = new calc(atoo, btoo);   

    document.getElementById("result").textContent = 
    `Result: ${clc.subtract()}`
})






const multi = document.getElementById("multiplyBtn").addEventListener("click", () => {
    const atoo = Number(document.getElementById("atoo").value);
    const btoo = Number(document.getElementById("btoo").value);

    const clc = new calc(atoo, btoo);

    document.getElementById("result").textContent = 
    `Result: ${clc.multiply()}`
})
    

const dividee = document.getElementById("divideBtn").addEventListener("click", () => {
    const atoo = Number(document.getElementById("atoo").value);
    const btoo = Number(document.getElementById("btoo").value);

    const clc = new calc(atoo, btoo);

     if(btoo === 0){
        document.getElementById("result").textContent = 
        `Result:Undefined`
        return; 
     }

    document.getElementById("result").textContent = 
    `Result: ${clc.divide()}`
})


