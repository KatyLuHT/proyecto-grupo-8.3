let puntaje=0 ;

  function abrirFormulario2() {
    document.getElementById("formulario1").style.display = "none";
    document.getElementById("formulario2").style.display = "block";

    // concatenamos hola con el dato que se ingreso
    document.getElementById('h1_holaNombre').innerHTML ="Hola "+ document.getElementById("ingresenombre").value;
  }

  function abrirpreguntaG1() { 
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("preguntaG1").style.display = "block";

    document.getElementById("Formulario_Resultado_Cultura").style.display = "none";
    document.getElementById("Formulario_Resultado_Gastronomia").style.display = "none";
  }

  function abrirpreguntaG2() {

    document.getElementById("preguntaG1").style.display = "none";
    document.getElementById("preguntaG2").style.display = "block";
  }

  function abrirpreguntaG3() {

    document.getElementById("preguntaG2").style.display = "none";
    document.getElementById("preguntaG3").style.display = "block";

  }

  function abrirpreguntaC1() {
    document.getElementById("formulario2").style.display = "none";
    document.getElementById("preguntaC1").style.display = "block";

    document.getElementById("Formulario_Resultado_Cultura").style.display = "none";
    document.getElementById("Formulario_Resultado_Gastronomia").style.display = "none";
  }

  function abrirpreguntaC2() {

    document.getElementById("preguntaC1").style.display = "none";
    document.getElementById("preguntaC2").style.display = "block";
  }

  function abrirpreguntaC3() {

    document.getElementById("preguntaC2").style.display = "none";
    document.getElementById("preguntaC3").style.display = "block";
  }
  
  function ObtenerResultados() {
    //GASTRONOMIA: Pregunta 1 
    if(document.getElementById('rd_pg1_A').checked){ 
      puntaje++;
      document.getElementById('respuesta_correcta_GA').innerHTML ="a) "+ document.getElementById("rd_pg1_A").value;
      document.getElementById("rd_pg1_A").checked = false;
    }
    if(document.getElementById('rd_pg1_B').checked){
      document.getElementById('respuesta_correcta_GA').innerHTML ="a) - ";
      document.getElementById("rd_pg1_B").checked = false;
    }
    if(document.getElementById('rd_pg1_C').checked){
      document.getElementById('respuesta_correcta_GA').innerHTML ="a) - ";
      document.getElementById("rd_pg1_C").checked = false;
    }
    //GASTRONOMIA: Pregunta 2
    if(document.getElementById('rd_pg2_B').checked){
      document.getElementById('respuesta_correcta_GB').innerHTML ="b) "+ document.getElementById("rd_pg2_B").value;
      puntaje++;
      document.getElementById("rd_pg2_B").checked = false;
    }
    if(document.getElementById('rd_pg2_A').checked){
      document.getElementById('respuesta_correcta_GB').innerHTML ="b) - ";
      document.getElementById("rd_pg2_A").checked = false;
    }
    if(document.getElementById('rd_pg2_C').checked){
      document.getElementById('respuesta_correcta_GB').innerHTML ="b) - ";
      document.getElementById("rd_pg2_C").checked = false;
    }

    //GASTRONOMIA: Pregunta 3
    if(document.getElementById('rd_pg3_C').checked){
      puntaje++;
      document.getElementById('respuesta_correcta_GC').innerHTML ="c) "+ document.getElementById("rd_pg3_C").value;
      document.getElementById("rd_pg3_C").checked = false;
    }
    if(document.getElementById('rd_pg3_A').checked){
      document.getElementById('respuesta_correcta_GC').innerHTML ="c) - ";
      document.getElementById("rd_pg3_A").checked = false;
    }
    if(document.getElementById('rd_pg3_B').checked){
      document.getElementById('respuesta_correcta_GC').innerHTML ="c) - ";
      document.getElementById("rd_pg3_B").checked = false;
    }
    //CULTURA: Pregunta 1 
    if(document.getElementById('rd_pc1_A').checked){
      puntaje++;
      document.getElementById('respuesta_correcta_CA').innerHTML ="a) "+ document.getElementById("rd_pc1_A").value;
      document.getElementById("rd_pc1_A").checked = false;
    }
    if(document.getElementById('rd_pc1_B').checked){
      document.getElementById('respuesta_correcta_CA').innerHTML ="a) -";
      document.getElementById("rd_pc1_B").checked = false;
    }
    if(document.getElementById('rd_pc1_C').checked){
      document.getElementById('respuesta_correcta_CA').innerHTML ="a) -";
      document.getElementById("rd_pc1_C").checked = false;
    }
    //CULTURA: Pregunta 2
    if(document.getElementById('rd_pc2_A').checked){
      puntaje++;
      document.getElementById('respuesta_correcta_CB').innerHTML ="b) "+ document.getElementById("rd_pc2_A").value;
      document.getElementById("rd_pc2_A").checked = false;
    }
    if(document.getElementById('rd_pc2_B').checked){
      document.getElementById('respuesta_correcta_CB').innerHTML ="b) -";
      document.getElementById("rd_pc2_B").checked = false;
    }
    if(document.getElementById('rd_pc2_C').checked){
      document.getElementById('respuesta_correcta_CB').innerHTML ="b) - ";
      document.getElementById("rd_pc2_C").checked = false;
    }
    //CULTURA: Pregunta 3
    if(document.getElementById('rd_pc3_C').checked){
      puntaje++;
      document.getElementById('respuesta_correcta_CC').innerHTML ="c) "+ document.getElementById("rd_pc3_C").value;
      document.getElementById('rd_pc3_C').checked = false;
    }
    if(document.getElementById('rd_pc3_A').checked){
      document.getElementById('respuesta_correcta_CC').innerHTML ="c) - ";
      document.getElementById('rd_pc3_A').checked = false;
    }
    if(document.getElementById('rd_pc3_B').checked){
      document.getElementById('respuesta_correcta_CC').innerHTML ="c) - ";
      document.getElementById('rd_pc3_B').checked = false;
    }
  }

  function enviarG() {
    document.getElementById("preguntaG3").style.display = "none";//ocultar div pregunta 3
    document.getElementById("Formulario_Resultado_Gastronomia").style.display = "block";// aparece formulario .. 
    ObtenerResultados();
    if(puntaje==3){
      document.getElementById('h2_puntajeTotal_G').innerHTML ="¡Felicidades, obtuviste "+puntaje+"/3!";
    }
    if(puntaje>0 && puntaje<3){
      document.getElementById('h2_puntajeTotal_G').innerHTML ="Bien, obtuviste  "+puntaje+"/3";
    }
    if(puntaje==0){
      document.getElementById('h2_puntajeTotal_G').innerHTML ="Perdiste, obtuviste  "+puntaje+"/3";
    }
    //Aqui reiniciamos el puntaje a cero 
    puntaje=0
  }

  function enviarC() {
    document.getElementById("preguntaC3").style.display = "none";
    document.getElementById("Formulario_Resultado_Cultura").style.display = "block";
    ObtenerResultados(); //1 busca los checbox selecciondos, 2 da puntaje solo si es correcto , 3 da un valor al id del p si es correcta y 4 deseleccionar el checkbox
    if(puntaje==3){
      document.getElementById('h2_puntajeTotal_C').innerHTML ="¡Felicidades, obtuviste "+puntaje+"/3!";
    }
    if(puntaje>0 && puntaje<3){ // rango 1 - 2 
      document.getElementById('h2_puntajeTotal_C').innerHTML ="Bien, obtuviste  "+puntaje+"/3";
    }
    if(puntaje==0){
      document.getElementById('h2_puntajeTotal_C').innerHTML ="Perdiste, obtuviste  "+puntaje+"/3";
    }
      //Aqui reiniciamos el puntaje a cero 
    puntaje = 0;
  }
