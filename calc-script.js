   function dis(x){
    document.getElementById("d").value +=x;
}
				
function clr(){
    document.getElementById("d").value = "";
}
function res(){
    var y=eval(document.getElementById("d").value);
    document.getElementById("d").value=y;
}