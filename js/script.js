function resetFormPerimeter() 
{
    document.getElementById("side1").value = "";
    document.getElementById("side2").value = "";
    document.getElementById("side3").value = "";
    document.getElementById("result-perimeter").innerHTML = "";
}

function resetFormArea()
{
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result-area").innerHTML = "";
}

function calculatePerimeter()
{
    let side1 = parseFloat(document.getElementById("side1").value);
    let side2 = parseFloat(document.getElementById("side2").value);
    let side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3))
    {
        document.getElementById("result-perimeter").innerHTML = "Masukkan Angka Terlebih Dahulu";
        return;
    }

    let perimeter = side1 + side2 + side3;
    let formula = "Keliling = Sisi 1 + Sisi 2 + Sisi 3"
    document.getElementById("result-perimeter").innerHTML = formula +"<br>" + "Keliling =" + side1 + "+" + side2 + "+" + side3 +"<br>" + "K =" + perimeter;

}

function calculateArea() 
{
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height))
    {
        document.getElementById("result-area").innerHTML = "Masukkan Angka Terlebih Dahulu";
        return;
    }

    let area = 0.5 * base * height
    let formula = "Luas = 0.5 x Alas x Tinggi"
    document.getElementById("result-area").innerHTML = formula + "<br>" + "Luas = 0.5x" + base + "x" + height + "<br>" + "Luas = " + area;
}
