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
function jsq(){
    var a=document.getElementById("txt1").value;//获取第一个输入框的值
    var b=document.getElementById("txt2").value;//获取第二个输入框的值
    var c=document.getElementById("set").value;//获取选择框的值
    var num=document.getElementById("txt3").value;//声明计算结果变量
    switch(c){
        case '+': num=parseInt(a)+parseInt(b);
        break;
        case '-': num=parseInt(a)-parseInt(b);
        break;
        case '*': num=parseInt(a)*parseInt(b);
        break;
        case '/': num=parseInt(a)/parseInt(b);
        break;
    }
    document.getElementById("txt3").value=num;//将计算结果输出
}
function clock(){
    var time=new Date();
    document.getElementById("clock").value=time;
}
var i=setInterval("clock()",1000);

var num=0,j;
function startCount(){
document.getElementById("count").value=num;
num=num+1;
j=setTimeout("startCount()",1000);
}
function stopCount(){
    clearTimeout(j);
    alert("您的计时结束!");
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