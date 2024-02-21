var show = false;
var selectCitysArray=[];
var checkboxes = document.getElementById("selectCheckboxs");
var selectCitys=document.getElementById("selectCitys");
var tpe=document.getElementById("tpe");
var ntpc=document.getElementById("ntpc");
var tyn=document.getElementById("tyn");
function addDelete(value) {
    var index = selectCitysArray.indexOf(value);
    if(index !== -1) {
        selectCitysArray.splice(index, 1); 
    } else {
        selectCitysArray.push(value); 
    }
}
function changeOption(){
    if(selectCitysArray.length>0){
        var text="";
        for(var i=0;i<selectCitysArray.length;i++){
            text=text+selectCitysArray[i]+",";
        }
        selectCitys.innerHTML=text;
        selectCitys.selected =true;
    }else{
        selectCitys.selected =false;
    }
}
tpe.addEventListener('click',function(){
    addDelete(tpe.value)
    changeOption();
});
ntpc.addEventListener('click',function(){
    addDelete(ntpc.value)
    changeOption();
});
tyn.addEventListener('click',function(){
    addDelete(tyn.value)
    changeOption();
});
function showCheckbox() {
    if (!show) {
        checkboxes.style.display = "block";
        show = true;
    } else {
        checkboxes.style.display = "none";
        show = false;
    }
}
function submitValue() {
    if(selectCitysArray.length==0){
        alert("請選擇城市");
    }else{
        alert(selectCitysArray);
    }
}
