const color = String(process.argv[2]);
if(color[0] == 'r' || color[0] == 'R'){
    console.log("Stop");
}
else if(color[0] == 'y' || color[0] == 'Y'){
    console.log('Caution');
}
else if(color[0] == 'g' || color[0] == 'G'){
    console.log('Go');
}
else{
    console.log('Unknown');
}