
const input = String(process.argv[2]);
let have_n = false;
let have_u = false;
let have_l = false;
if(input.length >= 8){
    for(let i = 0;i<input.length;i++){
        if(input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90)have_u=true;
        if(!isNaN(Number(input[i])))have_n=true;
        if(input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122)have_u=true;
    }
}
if(have_u && have_n && have_l){
    console.log('Valid');
}
else{
    console.log('Invalid');
}