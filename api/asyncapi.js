var url="https://mycakestudio.herokuapp.com/cakes"

async function getcakes(){
    var response=await fetch(url);
    var data=await response.json();
    data.map((item)=>{
        var element=document.createElement('h1')
        var TextNode=document.createTextNode(item.cake_name)
        element.appendChild(TextNode)
        element.value=item._id;
        document.getElementById('cakeName').appendChild(element)
    })
}