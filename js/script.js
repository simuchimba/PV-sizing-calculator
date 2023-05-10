function calculate() {
  var power = document.getElementById("power").value;
  var time = document.getElementById("time").value;
  var power2 = document.getElementById("power2").value;
  var time2 = document.getElementById("time2").value;
  var power3 = document.getElementById("power3").value;
  var time3 = document.getElementById("time3").value;
  var power4 = document.getElementById("power4").value;
  var time4 = document.getElementById("time4").value;
  var power5 = document.getElementById("power5").value;
  var time5 = document.getElementById("time5").value;
  var power6 = document.getElementById("power6").value;
  var time6 = document.getElementById("time6").value;
  var power7 = document.getElementById("power7").value;
  var time7 = document.getElementById("time7").value;
  var result = document.getElementById("result");
  

   
    var energy = (power * time) + (power2 * time2) + (power3 * time3) + (power4 * time4) + (power5 * time5) + (power6 * time6) + (power7 * time7);
    result.innerHTML = (energy).toFixed() + "Wh";
  
}

reset.addEventListener("click", () => {
  
  power.value = "";
  time.value = "";
  power2.value = "";
  time2.value = "";
  power3.value = "";
  time3.value = "";
  power4.value = "";
  time4.value = "";
  power5.value = "";
  time5.value = "";
  power6.value = "";
  time6.value = "";
  power7.value = "";
  time7.value = "";
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});

function calculate1() {
  var power = document.getElementById("ku").value;
  var power2 = document.getElementById("po").value;
  var result1 = document.getElementById("result1");
  

  if (power && power2 ) {
    var energy = power * power2;
    
    result1.innerHTML = (energy).toFixed() + "Wh";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset2.addEventListener("click", () => {
  
  ku.value = "";
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});



function calculate2() {
  var power = document.getElementById("t").value;
  var power2 = document.getElementById("p").value;
  var result1 = document.getElementById("result2");
  

  if (power && power2 ) {
    var energy = power / power2;
    result1.innerHTML = (energy).toFixed() + "W";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset6.addEventListener("click", () => {
  
  t.value = "";
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});





function calculate3() {
  var power = document.getElementById("loadd").value;
  var power2 = document.getElementById("loaddd").value;
  var result1 = document.getElementById("result3");
  

  if (power && power2 ) {
    var energy = power / power2;
    result1.innerHTML = (energy).toFixed() + " pannels";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset7.addEventListener("click", () => {
  
  loadd.value = "";
  loaddd.value = "";
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});


function calculate4() {
  var power = document.getElementById("yes").value;
  var result1 = document.getElementById("result4");
  
  

  if (power  ) {
    var energy = power * 1.3;
    result1.innerHTML = (energy).toFixed() + "W";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset00.addEventListener("click", () => {
  
  yes.value = "";
  
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});



function calculate7() {
  var power = document.getElementById("ok").value;
  var power2 = document.getElementById("okk").value;
  var power3 = document.getElementById("okkk").value;
  var result1 = document.getElementById("result7");
  

  if (power && power2 && power3) {
    var energy = (power * power2) / (0.85 * 0.6 * power3);
    result1.innerHTML = (energy).toFixed() + "Ah";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset44.addEventListener("click", () => {
  
  ok.value = "";
  okk.value = "";
  okkk.value = "";

 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});

function calculate6() {
  var power = document.getElementById("kuunda").value;
  var power2 = document.getElementById("martha").value;
  var power3 = document.getElementById("chisanga").value;
  var result1 = document.getElementById("result6");
  

  if (power && power2 && power3) {
    var energy = (power * power2) /  power3;
    result1.innerHTML = (energy).toFixed() + "A";
  } else {
    result1.innerHTML = "Invalid";
  }
}

reset77.addEventListener("click", () => {
  
  kuunda.value = "";
  martha.value = "";
  chisanga.value = "";
 
 
  k1 = undefined;
  answer1.textContent = "\xa0";
});













