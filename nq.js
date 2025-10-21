export



const nq = () => {
    
    let computerNumber=Math.floor(Math.random()*10)+1;

    let userNumber=window.prompt( "ta toogoo oruulna uu")
        
        let i = 0;

        gameStart();


        if (userNumber === computerNumber) {
            window.alert(" You win")
        }
        while (i<3) {
        if (userNumber < computerNumber) {
            window.alert("computerNumber is high")

        }
        window.alert("userNumber is high")
        userNumber;
        i++;
    
    }
    if(i === 3) 
        console.log("You lost!")
    }

     


gameStart ();