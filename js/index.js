//Write your Javascript code here
console.log("Shoppinglist")

function plus(a,b){
    return a + b
}

let result = plus(3,4)
console.log(result)


function findnode(id, type){
    let node = document.getElementById
    node.style.color = "red"
    node.style.backgroundColor = "black"
    node.style.fontSize = "30px"
    node.style.fontWeight = "bold"
    
    let nynode = document.createElement(type)
    nynode.innterText = "i am a new node"
    nynode.style.color = "blue"
    document.body.appendChild(nynode)

    return node

}