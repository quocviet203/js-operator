
var a = Number(prompt ("nhap a"));
var b= Number(prompt ("nhap b"));

document.writeln('tong='+(a+b))
document.writeln('hieu='+(a-b))
document.writeln('thuong='+(a/b))
document.writeln('tich='+(a*b)+'<br>')
function roundNumber(num,dec){
return Math.round(a*Math.pow(10,dec))/Math.pow(10,dec);

}
//document.writeln(roundNumber)
//var c=a,b;
//if(a>b){
  //  document.writeln(true)
//}else 
//if(a<b){
  //  document.writeln(true)
//}else if(a=>b){
  //  document.writeln(true)
//}else if(a>=b){
  //  document.writeln(true)
//}
var c1=a>b;
document.write('so sánh1 : '+c1+'<br>')
var c2=a<b;
document.write('so sánh2 : '+c2+'<br>')
var c3=a>=b;
document.write('so sánh3 : '+c3+'<br>')
var c4=a<=b;
document.write('so sánh4 : '+c4+'<br>')



