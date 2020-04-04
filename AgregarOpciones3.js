  function listboxresult(){
    var spanresult = document.querySelector('#result');
    spanresult.value="";
    var x= document.querySelector("#sel");
    for(i=0; i<x.options.length; i++){
      if(x.options[i].selected === true){
        spanresult.value += x.options[i].value + " ";
        document.querySelector("#result").innerHTML = spanresult.value;
        document.querySelector("#result").style.color = 'green';
      }
    }
    if (document.querySelector("#result").value == ""){
       document.querySelector("#result").innerHTML = "Seleccione al menos una opcion...";
       document.querySelector("#result").style.color = 'red';
    }
  }