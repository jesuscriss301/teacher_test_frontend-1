const url='http://localhost:8080/users/'
  function buscarusuario() {
    var c =document.querySelector("#buscarid")
    var i =url+c.value
    consulta(i)
  }

  function usuarios(){
    consultaAll(url)
  }

  function consultapost(){
    var c =document.querySelector("#buscarid")
    var i = c.value
    let datos={
      userName: "pepito",
      userCode: 115184222,
      identifyCardNumber: 122445218,
      email: i+"@ufps.edu.co",
      password: "brayan123",
      admin: true}

    console.log(i);
      fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
          "Content-Type":"application/json; charset=UTF-8"}
          })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  function consulta(i){
    fetch(i)
      .then(response => response.json())
      .then(data =>print(data));
  }
  function consultaAll(i){
    fetch(i)
      .then(response => response.json())
      .then(data =>printAll(data));
  }


  function print(data) {

    var text = document.querySelector("#teachers")
    var str =""
    for(var i in data){
      str += data[i] + "\n";
    }
  text.value=str;
}
function printAll(data) {

  var text = document.querySelector("#teachers")
  var str =""
  for(var i in data){
    for(var j in data[i]){
      str += data[i][j] + "\n";
  }
  "\n"
}
text.value=str;
}
