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