function oneToTen(time) {
    // Implement the function here
    let value =1;
    let print = setInterval(()=>{
        console.log(value);
        value++;
        if(value > 10){
           clearInterval(print);      
        }
    },time*1000)

}
timeIntervalueToPrint = 1; //in minutes
oneToTen(timeIntervalueToPrint)