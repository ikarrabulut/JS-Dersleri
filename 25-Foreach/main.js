const a = callBacka => {
  let yas = 23
  callBacka(23)
}

a(function(value){
  console.log(value)
})



let ogr = ["ahmet", "mehmet", "mahmut", "mustafa"]
ogr.forEach(function(){
  console.log("selam")
})



ogr.forEach(function(kisi, siraNo){
  console.log(`${siraNo}: ${kisi}`)
})




const bastir = (kisi, siraNo) => {
  console.log(`${siraNo}-> ${kisi}`)
}
ogr.forEach(bastir);