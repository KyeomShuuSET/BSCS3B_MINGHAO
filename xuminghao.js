// console.log(fetch('https://0.soompi.io/wp-content/uploads/2024/07/14232104/wonwoo-arena-3.png')
// .then(response =>{
//     console.log(response)
//     return response.blob()
// })
// .then(blob=>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })
// .catch(error=>{
//     console.log(error)
// }))









const content = document.querySelector("#content")

window.addEventListener("load",() => {
    getUsers();
})


function getUsers(){

    let html=" "

    // fetch("http://localhost:5000/api/members", {mode:"cors"}//cross origin offline
    fetch("http://localhost:5000/api/members", {mode:"cors"})//cross origin
    
    .then((response)=>{
        console.log(response)
        return response.json();
    })

    .then((data)=>{
        data.forEach((element)=>{
            html += `<li> ${element.first_name} ${element.last_name} </li>`
        })
        content.innerHTML = html
    })

    .catch((error)=>{
        console.log(error)
    })


}