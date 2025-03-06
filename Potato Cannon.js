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
    console.log(F);
    a = F/m;
  
    v = a*0.4;
    v = Math.sqrt(v);
  
    vx = vx*v;
    vy = vy*v;
  
    tUp = vy/g;
    tTotal = 2*tUp;
  
    R = vx*tTotal;
    R = R*3.28; //Convert meters to feet
    R = Math.round(R);
    document.getElementById("distanceLabel").textContent = "DISTANCE = "+R+" FT";
});