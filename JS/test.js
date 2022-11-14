function runIntervalOnArray(array){
    let arrayCounter = 0;
    if(Array.isArray(array)){
       const interval =  setInterval(()=> {
            if(arrayCounter < array.length){
                console.log(array[arrayCounter++]);
            } else {
                clearInterval(interval);
            }
        }, 1000);
    }
}

const arr = [1,2,3,4,5,6,7,8,9];


let timemark = Date.now();//Date.now() returner klokkeslettet i millisekunder. Timemark skal huske når du begynte å ta tiden
let currenttime = timemark; //Denne skal vi bruke for å holde styr på hva tiden er
const delay = 1000; //denne er konstant. Det er pausen, delay'et vårt.

let counter = 0;

let run = true;
while(run){//du må lage en betingelse selv
    currenttime=Date.now();
    let timepassed = currenttime-timemark;
    if(timepassed >= delay){
        console.log(`time passed ${++counter}`);
        timemark = currenttime;
    }
}