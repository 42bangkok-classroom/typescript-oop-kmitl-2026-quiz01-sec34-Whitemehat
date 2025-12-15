
const num = Number(process.argv[2]);
if(isNaN(num)){
    process.exit(0);
}
for(let i = 0; i <= num ;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}