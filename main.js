var Birinci_Sayi = prompt('Ilk Sayini giriniz'); //23
var Ikinci_Sayi = prompt('Ikinci Sayiniz giriniz');
var pId = document.getElementById('pozel');

if (Birinci_Sayi == Ikinci_Sayi){
    pId.innerHTML = "Sayilar esittir"
} else if (Birinci_Sayi > Ikinci_Sayi){
    pId.innerHTML = "Birinci_Sayi büyüktür"
} else{
    pId.innerHTML ="Ikinci_Sayi büyüktür"
}