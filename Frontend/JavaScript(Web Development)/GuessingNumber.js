let max=prompt("Enter the max number:");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter Your guess");

while(true)
{
    if(guess==random){
        console.log("Congrats!!!! random number is",random)
        break;
    }

    else if(guess=="Quite")
    {
        console.log("Quiting the game.....");
    }

    else if(random < guess){
        guess=prompt("You Guess large value: Please try again")
    }

    else if(random > guess){
        guess=prompt("You Guess small value: Please try again")
    }

}