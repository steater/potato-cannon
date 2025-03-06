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
document.getElementById("calculateButton").addEventListener("click", function() {
    var F = 0
    var a = 0;
    var v = 0;
    var vx = 0.7071067811865476;
    var vy = 0.7071067811865476;
    var tUp = 0;
    var tTotal = 0;
    var g = 9.81;
    var R = 0;
    
    let P = document.getElementById("psiInput")
    let A = document.getElementById("areaInput")
    let m = document.getElementById("massInput")
    P = parseFloat(P.value) * 6894.76; // Convert PSI to Pascals
    A = parseFloat(A.value) * 0.00064516; // Convert square inches to square meters
    m = parseFloat(m.value); // Convert mass to a number
    F = P*A;

    a = F/m;
  
    v = a*0.4;
    v = Math.sqrt(v);
  
    vx = vx*v;
    vy = vy*v;
  
    tUp = vy/g;
    tTotal = 2*tUp;
  
    R = vx*tTotal;
    R = R*3.28; //Convert meters to feet
    tTotal = Math.round(tTotal);
    R = Math.round(R);
    document.getElementById("distanceLabel").textContent = "DISTANCE = "+R+" FT";
    document.getElementById("timeLabel").textContent = "TIME = "+tTotal+" S";
});
