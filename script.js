function validatePsiInput() {
    var input = document.getElementById("psiInput");
    var value = parseInt(input.value, 10);
    
    if (value < 1) {
      input.value = 1; // Set to minimum
    } else if (value > 100) {
      input.value = 100; // Set to maximum
    }
  }
  function validateMassInput() {
    var input = document.getElementById("massInput");
    var value = parseInt(input.value, 10);
    
    if (value < 0) {
      input.value = 0; // Set to minimum
    } else if (value > 10) {
      input.value = 10; // Set to maximum
    }
  }
  function validateAreaInput() {
    var input = document.getElementById("areaInput");
    var value = parseInt(input.value, 10);
    
    if (value < 0) {
      input.value = 0; // Set to minimum
    } else if (value > 10) {
      input.value = 10; // Set to maximum
    }
  }
  function validateVolumeInput() {
    var input = document.getElementById("volumeInput");
    var value = parseInt(input.value, 10);
    
    if (value < 0) {
      input.value = 0; // Set to minimum
    } else if (value > 100) {
      input.value = 100; // Set to maximum
    }
  }
document.getElementById("calculateButton").addEventListener("click", function() {
    var v = 0;
    var g = 9.81;
    var R = 0;
    var vBarrel = 0;
    var V = 0;
    var t = 0;
    
    let P = document.getElementById("psiInput")
    let A = document.getElementById("areaInput")
    let m = document.getElementById("massInput")
    let vTank = document.getElementById("volumeInput")
    P = parseFloat(P.value) * 6894.76; // Convert PSI to Pascals
    A = parseFloat(A.value) * 0.00064516; // Convert square inches to square meters
    m = parseFloat(m.value) * 0.453; // Convert mass to kg 
    vTank = parseFloat(vTank.value) * 0.0000163871; //convert the tank volume to cubic meters

    V = vTank/(vTank+vBarrel);
    V = Math.pow(V, 1.4);
    P = P*V;

    v = 4 * P * A * 0.4;
    v = v/2;
    v = Math.sqrt(v);

    R = (v*v)/g;
    R = R*3.28;
    t = R/v;
    t = t/3.28

    t = Math.round(Number(t));
    R = Math.round(R);
    document.getElementById("distanceLabel").textContent = "DISTANCE = "+R+" FT";
    document.getElementById("timeLabel").textContent = "TIME = "+t+" S";
});
