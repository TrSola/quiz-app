const senior = document.querySelector('.senior');
// const wrap = document.querySelector('.wrap')


senior.addEventListener('click', function(e){
    console.log(e.target.nodeName);
    if((e.target.nodeName)=="SPAN"){
  alert("要畢業囉~加油!");
}
  else{
    alert('試試點其他地方');
}
}
)
