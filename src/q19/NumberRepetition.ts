const num = Number(process.argv[2]);
for(let i = 1; i<=num;i++){
    let row = "";
    for(let j = 0; j < num;j++){
        row += String(i);
    }
    console.log(row);
}