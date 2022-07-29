function cal(opt){
    var a=document.getElementById('first').value;
    var b=document.getElementById('second').value;
    var output=document.getElementsByClassName('output')[0];
    if(a==0||b==0){
        out="Enter values";
    }
    else if(opt=="add"){
        out=Number(a)+Number(b);
        out=`sum of two numbers is ${out}`
    }
    else if(opt=="sub"){
        out=Number(a)-Number(b);
        out=`subtraction of two numbers is ${out}`
    }
    else if(opt=="mul"){
        out=Number(a)*Number(b);
        out=`multiplication of two numbers is ${out}`
    }
    else if(opt=="div"){
        out=Number(a)/Number(b);
        out=`divsion of two numbers is ${out}`
    }
    else if(opt=="per"){
        out=Number(a)%Number(b);
        out=`percentage of two numbers is ${out}`
    }
    else{
    out=`enter valid numbers`
    }
    output.innerText=out
}

function clears(){
    var c="output";
    document.getElementById('first').value=" ";
    document.getElementById('second').value=" ";
    document.getElementsByClassName('output')[0].innerText=`${c}`
}

function bsb(){
    var a=document.getElementById('first').value;
    a=a.replace(/ /g,'');
    a=a.slice(0,-1);
    document.getElementById('first').value=a;

    var b=document.getElementById('second').value;
    b=b.replace(/ /g,'');
    b=b.slice(0,-1);
    document.getElementById('second').value=b;
}