let btn = document.querySelector("#btn")

 let randomColor =()=>{
    let val = "1234567890ABCDEF"
    let hash ="#"

    for (i=0 ;i<6 ; i++){

        hash = hash+val[Math.floor(Math.random()* val.length)]

    }
    return hash
 }
 console.log(randomColor());


let changeColor = () => {
    document.body.style.backgroundColor = randomColor()
}

btn.addEventListener("click", changeColor)