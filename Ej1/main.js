var numero=[0,1,2,3,4,5,6,7,8,9,10];
var res=[];
numero.reverse();
for(var i=0;i<numero.length;i++)
{
	if(numero[i] % 2==0){
		res.push(numero[i]);
	};
};
console.log(res);