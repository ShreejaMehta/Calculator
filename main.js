
function binarytogray(num1)
{
    var num=document.getElementById("btg").value;
    let gray=" ";
    gray+=binary[0];
    for(let i = 1; i < num.length; i++)
    {
        
        gray += xor_c(num[i - 1], num[i]);
    }
    alert("Gray is"+gray);
}
