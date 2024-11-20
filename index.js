const content = document.querySelector('#content')

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html = ""
    // fetch("http://localhost:1804/api/hello", { mode: "cors" })
    fetch("https://bscs3a-api-crud-22f1.onrender.com/api/hello",{mode: "cors"})
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          html += `<li>${element.first_name} ${element.last_name}</li>`;
        });
        content.innerHTML = html;
      })

      .catch((error) => {
        console.log(error);
      });
}