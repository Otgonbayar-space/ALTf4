export



const nq = () => {
    
     const computerNumber = () => {
        return Math.floor(Math.random() * 10) + 1
     }

     const userNumber = () => {
        window.prompt( "ta toogoo oruulna uu")
        
        let i = 0

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

     }
}

gameStart();