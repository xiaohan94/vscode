function add(){
    var num=3+2;
    alert(num);
}
function contxt(){
   var num=confirm("你好");
   for(;num==true;){
       confirm("你好");
   }
}
function rec(){
    window.open('http://www.imooc.com','_blank','width=400,height=500,menubar=no,toolbar=no');
}
function cls(){
    var mywin=window.open('http://www.imooc.com','_blank','width=400,height=500,menubar=no,toolbar=no');
    mywin.close();
}
function reh(){
    document.getElementById("zhu2-left").style.display="none";
}
function res(){
    document.getElementById("zhu2-left").style.display="block";
}
function add1(){
    document.getElementById("xlcd1").style.display="block";
}
function add2(){
    document.getElementById("xlcd2").style.display="block";
}
function add3(){
    document.getElementById("xlcd1").style.display="none";
}
function add4(){
    document.getElementById("xlcd2").style.display="none";
}