var url="https://mycakestudio.herokuapp.com/cakes"

function getcakes(){
    fetch(url,{method:'GET'})
    .then((response)=>response.json())
    .then((data)=>{
        for(i=0;i<data.length;i++){
            console.log(data[i])
            var element=document.createElement('h1');
            var TextNode=document.createTextNode(data[i].cakeName)
            element.appendChild(TextNode)
            document.getElementById('cakeName').appendChild(element)
        }
    })
}