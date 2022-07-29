function op(opt){
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
        out=`division of two numbers is ${out}`
    }
    else if(opt=="per"){
        out=Number(a)%Number(b);
        out=`percentage of two numbers is ${out}`
    }
    else{
        out=`Enter valid Numbers`
    }
    output.innerText=out
}


function cb(first){
    document.getElementById('first').value=" ";
    document.getElementById('second').value=" ";
    document.getElementsByClassName('output')[0].innerText=`${output}`
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

    function num(a){
    
    if(a==1){
        var a=document.getElementById('first').value+=1;}
    else if(a==2){
        document.getElementById('first').value+=2;
    }
    else if(a==3){
        document.getElementById('first').value+=3;
    }else if(a==4){
        document.getElementById('first').value+=4;
    }
    else if(a==5){
        document.getElementById('first').value+=5;
    }
    else if(a==6){
        document.getElementById('first').value+=6;
    }
    else if(a==7){
        document.getElementById('first').value+=7;
    }
    else if(a==8){
        document.getElementById('first').value+=8;
    }
    else if(a==9){
        document.getElementById('first').value+=9;
    }else if(a==0){
        document.getElementById('first').value+=0;
    }
}