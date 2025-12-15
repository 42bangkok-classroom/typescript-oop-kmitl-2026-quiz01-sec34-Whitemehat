const input = process.argv;
let max = -1000;
for(let i = 2;i< input.length;i++){
    let num = Number(input[i]);
    if(max < num){
        max = num;
    }
}
console.log(String(max));