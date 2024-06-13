let rules= document.querySelector("#rules");
let icon= document.querySelector(".rules-head i");
let steps= document.querySelector("#steps");
let button=document.querySelectorAll("button");
let result=document.querySelector("#result");
let player=document.querySelector("#player");
let computer=document.querySelector("#computer");
let game=document.querySelector("#game");
let score=document.querySelector("#score");
let final=document.querySelector("#final");
let gif=document.querySelector("#gif");
// let again=document.querySelector("#again");
let btn=Array.from(button);
let num=-1;
let valUser=-3;
let valComp=-3
let comScore=0;
let plaScore=0;
// console.log(btn)
function again()
{
    game.classList.replace("d-block", "d-none")
    comScore=0
    plaScore=0
    result.innerHTML=``
    computer.innerHTML=`Computer Score: ${comScore}`
    player.innerHTML=`Player Score: ${plaScore}`
}
for(let i=0;i<3;i++)
    {
        // console.log(btn[i])
        btn[i].addEventListener('click', function(){
            if(comScore<3 && plaScore<3)
                {
                    num= Math.floor(Math.random()*3);
                    valUser=btn[i].getAttribute("play")-num;
                    valComp=num-btn[i].getAttribute("play");
                    if(btn[i].getAttribute("play")==num)
                        {
                            result.innerHTML=`It's a tie! Both chose ${btn[i].getAttribute("id")}`
                        }
                            // console.log(btn[i].getAttribute("play")-num)
                    else{
                        if(valUser==-2||valUser==1) 
                            {
                                plaScore++;
                                if(plaScore==3)
                                    {
                                        gif.setAttribute("src", "angry-bunny.gif")
                                        // gif.classList.remove("w-50")
                                        // gif.classList.add("w-50")
                                        gif.style.bottom="-10px"
                                        game.classList.replace("d-none", "d-block")
                                        score.innerHTML=`It's okay! You won`
                                        final.innerHTML=`Player Score: ${plaScore}</br>Computer Score: ${comScore}</br>
                                        <button class="btn btn-outline-light rounded-5 mt-5 w-50" onclick="again()">Play again</button>`
                                    }
                                else{
                                    result.innerHTML=`User wons, User: ${btn[i].getAttribute("id")}, Computer: ${(num==0)? 'Rock' : (num==1)? 'Paper' : 'Scissors'}`
                                    player.innerHTML=`Player Score: ${plaScore}`

                                }
                            }
                        else 
                        {
                            comScore++;
                            if(comScore==3)
                                {
                                    gif.setAttribute("src", "YaDQ.gif")
                                    // gif.classList.remove("w-25")
                                    // gif.classList.add("w-50")
                                    gif.style.bottom="0px"
                                    game.classList.replace("d-none", "d-block")
                                    score.innerHTML=`You Loserrrrrrrrrrr!!!!`
                                    final.innerHTML=`Player Score: ${plaScore}</br>Computer Score: ${comScore}</br>
                                        <button class="btn btn-outline-light rounded-5 mt-5 w-50" onclick="again()">Play again</button>`
                                }
                            else{
                                result.innerHTML=`Computer wons, User: ${btn[i].getAttribute("id")}, Computer: ${(num==0)? 'Rock' : (num==1)? 'Paper' : 'Scissors'}`
                                computer.innerHTML=`Computer Score: ${comScore}`
                            }
                        }
                    }
                }
            else{
                result.innerHTML=`game over`
            }
            // console.log(btn[i].getAttribute("play"))
        })
    }
rules.addEventListener("click", function(){
    if(steps.classList.contains("d-block")) 
        {
            icon.classList.replace("fa-caret-down", "fa-caret-right")
            steps.classList.replace("d-block", "d-none")
        }
    else
    {
        icon.classList.replace("fa-caret-right", "fa-caret-down")
        steps.classList.replace("d-none", "d-block")
    }
})
