
let result='';
let cp='';
let op='';

function computerMovement(){
    // const  rn;
  

    const rn=Math.random();
  
    if(rn>=0 && rn<1/3)
    {
        op='paper';

    }
    else if(rn>=1/3 && rn<2/3){
        op='rock';
    }

    else{
        op='scissor';
    }

    return op;
}


function resultPaper(playerMovement){

    if(playerMovement==='scissor'){
        cp=computerMovement();
      

         
        if(cp==='paper'){
             result='you won';
         }
        else if(cp==='rock'){
             result='compuer won';
         }
        else{
             result='tie';
         }
         
          
    }

    else if(playerMovement==='rock')
    {   
        cp=computerMovement();
                
        if(cp==='paper'){
            result=' compuer won';
        }
        else if(cp==='rock'){
            result='tie';
        }
        else{
            result='you won';
        }
    }

    else if(computerMovement==='paper'){
        
        cp=computerMovement();
        if(cp==='paper'){
            result='tie';
        }
        else if(cp==='rock'){
            result='you won';
        }
        else{
            result='compuer won';
        }
    }

    alert(`computer put ${cp} and you put ${playerMovement} so ${result}`);

}


           


