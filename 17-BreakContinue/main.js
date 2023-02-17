console.log("18 - 25 aralığındaki sayılar")

// Break sonlandır, Continue atla
for(let x=0; x<50; x++){
    if(x<18){
        continue;
    }else if(x == 26){
        break;
    }else{
        console.log(x);
    }
}