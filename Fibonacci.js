function Fibonacci(numberOfItems){
    var output = [];
    if(numberOfItems ===1){
        output = [0];
    }else if(numberOfItems ===2){
        output = [0,1];
    }else{
        output = [0,1];
        for(var i=2 ; i<numberOfItems ; i++){
            output.push(output[output.length-2]+ output[output.length-1]);
        }
    }
    return output;
}
output1 = Fibonacci(8);
console.log(output1);


