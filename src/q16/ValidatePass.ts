
const input = String(process.argv[2]);
let have_n = false;
let have_u = false;
if(input.length >= 8){
    for(let i = 0;i<input.length;i++){
        if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90)have_u=true;
        if(!isNaN(Number(input[i])))have_n=true;
    }
}
if(have_u && have_n){
    console.log('Valid');
}
else{
    console.log('Invalid');
}