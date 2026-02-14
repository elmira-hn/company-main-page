let price_product=[13000,12000,142560,234455,123333];  //add send cost
// let price_product=[13000,12000,142560,234455,123333,2000000]; //free send
let sum=0;
let i;
for( i=0; i<price_product.length; i++)
{
    sum=sum+price_product[i];
}
if(sum>1000000)
{
    alert("free send")
}
else
{
    let send_cost=20000;
    sum=sum+send_cost;
    alert("add send cost")
}
alert(final_cost)
alert("final cost"+ sum)