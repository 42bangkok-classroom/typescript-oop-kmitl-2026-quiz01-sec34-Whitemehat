const num = Number(process.argv[2]);
for(let i = 0;i<num;i++){
    let row = "";
    for(let j = 0;j<num;j++){
        if(i % 2 == 0){
            row += '1';
        }
        else{
            row += '0';
        }
    }
    console.log(row);
}