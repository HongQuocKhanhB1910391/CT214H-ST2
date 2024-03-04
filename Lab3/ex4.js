function getValue() {
    var a = document.getElementById("inputA").value;
    var b = document.getElementById("inputB").value;
    var c = document.getElementById("inputC").value;

    var errorA = document.getElementById("errorA");
    var errorB = document.getElementById("errorB");
    var errorC = document.getElementById("errorC");

if (a === "") {
                errorA.innerHTML = "Không được bỏ trống";
            } else if (parseFloat(a) === 0) {
                errorA.innerHTML = "A phải khác 0!";
            } else {
    
                a = parseFloat(a);
                b = parseFloat(b);
                c = parseFloat(c);
                var delta = b * b - 4 * a * c;

                

                if (delta > 0) {
                    document.getElementById("deltaResult").innerHTML = "Delta: " + delta + " > 0";
                    var root1 = (-b + Math.sqrt(delta)) / (2 * a);
                    var root2 = (-b - Math.sqrt(delta)) / (2 * a);
                    document.getElementById("root1").innerHTML = "x1 = " + root1;
                    document.getElementById("root2").innerHTML = "x2 = " + root2;
                } else if (delta === 0) {
                document.getElementById("deltaResult").innerHTML = "Delta: " + delta + " = 0";
                    var root = -b / (2 * a);
                    document.getElementById("root").innerHTML = "x =  " + root;
                } else {
                document.getElementById("deltaResult").innerHTML = "Delta: " + delta + " < 0";
                    document.getElementById("result").innerHTML = "Phương trình vô nghiệm.";
                }
            }

            errorB.innerHTML = b === "" ? "Không được bỏ trống" : "";
            errorC.innerHTML = c === "" ? "Không được bỏ trống" : "";

    if (a === "" || b === "" || c === "") {
                document.getElementById("result").innerHTML = "";
                return;
    }
    


    
}