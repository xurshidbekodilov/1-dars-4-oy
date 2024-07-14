//Osonroq Masalalar

//1-Masala Berilgan sonni ikkiga bo'lib, natijani butun qismiga oshiring va qoldig'ini hisoblang

/*
let number = +prompt('Ixtiyoriy son kiriting');
let qoldiq, butun_qism;
butun_qism=Math.trunc(number/2);
qoldiq=number-butun_qism*2;
console.log('Butun qism '+butun_qism);
console.log('qoldiq '+ qoldiq);
*/


//2-masala Berilgan ikkita sonning birinchi son ikkinchi sondan katta bo'lsa, ko'paytmasini, kichik bo'lsa, yig'indisini, teng bo'lsa ayirmasini toping

/*
let num1 = +prompt('birinchi sonni kiriting');
let num2 = +prompt('ikkinchi sonni kiriting');
if (num1>num2){
    console.log(num1*num2);
}
else{
    if(num1<num2){
        console.log(num1+num2);
    }
    else{
        console.log(0);
    }
}
*/


//3-masala Berilgan sonning faktorialini toping

/*
let number = +prompt('ixtiyoriy musbat son kiriting');
let result = 1;
if (number<0){
    console.log('Manfiy sonlar uchun faktorial mavjud emas');
}
else if (number===0 || number===1){
    consolo.log(1);
}
else{
for( let i=2; i<=number; i++){    
        result*=i;
    }
    console.log(result);
}
*/


//4-masala Berilgan uchta sonning kvadratlari yig'indisini toping

/*
let num1 = +prompt('birinchi sonni kiriting');
let num2 = +prompt('ikkinchi sonni kiritng');
let num3 = +prompt('uchinchi sonni kiriting');
let result;
result = num1*num1+num2*num2+num3*num3;
console.log(result);
*/


//5-masala  Berilgan ikki sonning darajasini hisoblang (a^b)

/*
let num1 = +prompt('birinchi sonni kiriting');
let num2 = +prompt('ikkinchi sonni kiriting');
let result;
result=Math.pow(num1,num2);
console.log(result);
*/


//6-masala Berilgan sonning kvadrat ildizini hisoblab, natijani eng yaqin butun songa yaxlitlang

/*
let number = +prompt('ixtiyoriy son kiriting');
let x, result;
x=Math.sqrt(number);
result=Math.round(x);
console.log(result);
*/


//7-masala Berilgan ikki sonni ketma-ket 5 marta ko'paytiring va natijalarni alohida chop eting

/*
let num = +prompt('son kiriting');
let result = 1;
for(let i=1; i<=5; i++){
    result= result*num;
    console.log(result);
}
*/

//8-masala Berilgan sonni 10 ga ko'paytirib, natijadan 7 ni ajratib oling

/*
let num = +prompt('son kiriting');
let result;
result=num*10-7;
console.log(result);
*/


//9-masala Berilgan sonning uchinchi darajali ildizini toping

/*
let num = +prompt('son kiriting');
let result;
result=Math.pow(num, 1/3);
console.log(result);
*/


//10-masala Berilgan uchta sonning o'rtacha geometrik qiymatini hisoblang

/*
let num1 = +prompt('birinchi sonni kiriting');
let num2 = +prompt('ikkinchi sonni kiriting');
let num3 = +prompt('uchinchi sonni kiriting');
let result;
result=Math.pow((num1*num2*num3), 1/3);
console.log(result);
*/



//Qo'shimcha masalalar


//1-masala Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlang

/*
let L = +prompt('uzunlikni santimetrlardagi qiymatini kiriting');
let result;
result=Math.trunc(L/100);
console.log(result);
*/


//2-masala Og'irlik M kilogramda berilgan. Undagi to'liq tonnalar sonini aniqlang

/*
let M = +prompt('Ogirlikni kg dagi qiymatini kiriting');
let result;
result=Math.trunc(M/1000);
console.log(result);
*/


//3-masala Faylning hajmi baytlarda berilganUndagi to'liq kilobaytlarni toping(1kb=1024bayt)

/*
let Bayt = +prompt('fayl xajmini baytlarda kiriting')
let result;
result=Math.trunc(Bayt/1024);
console.log('Fayldagi toliq kilobaytlar soni '+result);
*/


//4-masala A va B (A>B) musbat sonlar berilgan. A kesmada B kesmani necha marta joylashtirish mumkinkinligini aniqlang

/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let result;
result=Math.trunc(A/B);
console.log(result);
*/


//5-masala A va B (A>B) musbat sonlar berilgan. A kesmada B kesmani necha marta joylashtirish mumkinkinligini va A kesmada B kesmaning joylashmagan qismini toping

/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let result1,result2;
result1=Math.trunc(A/B);
result2=A-result1*B;
console.log(result1);
console.log(result2);
*/


//6-masala Ikki xonali son berilgan . Uning o'nliklar va birliklar xonasidagi sonlarni toping

/*
let num = +prompt('Ikki xonali son kiriting');
let onlar, birlar;
if(num>9 && num<100){
    onlar=Math.trunc(num/10);
    birlar=num%10;
    console.log(onlar + ' ta onlik');
    console.log(birlar+ ' ta birlik');
}
else{
    console.log('Ikki xonali son emas')
}
*/


//7-masala Berilgam ikki xonali sonni raqamlar yig'indisini toping

/*
let num = +prompt('Ikki xonali son kiriting');
let result;
if(num>9 && num<100){
    result=(Math.trunc(num/10))+(num%10);
    console.log(result);
}
else{
    console.log('ikki honali son emas');
}
*/


//8-masala Berilgan ikki xonali sonni raqamlar almashtirilganda hosil bo'ladigan sonni aniqlang

/*
let number = +prompt('ikki xonali son kiriting');
let result;
if (number>9 && number<100){
    result=((number%10)*10)+(Math.trunc(number/10));
    console.log(result);
}
else{
    console.log('ikki honali son emas');
}
*/


//9-masala Uch xonali son berilgan. Uning 3 xonali sonlar honasidagi raqamni aniqlang

/*
let number = +prompt('Uch honali son kiriting');
let result;
if(number>99 && number<1000){
    result=Math.trunc(number/100);
    console.log(result);
}
else{
    console.log('Uch xonali son emas');
}
*/


//10-masala Berilgan 3 xonali sonni birliklar va o'nliklar xonasidagi raqamlarini toping

/*
let number = +prompt('Uch xonali son kiriting');
let birlar, onlar;
if(number>99 && number<1000){
    birlar=(number%100)%10;
    onlar=(Math.trunc(number/10))%10;
    console.log('birlar xonasidagi raqam '+birlar);
    console.log('onlar honasidagi raqam '+onlar)
}
else{
    console.log('Uch xonali son emas');
}
*/



//11-masala Uch xonali son berilgan. Uning raqamlar yig'indisini aniqlang

/*
let num = +prompt('Uch xonali son kiriting');
let res;
if(num>99 && num<1000){
    res=(Math.trunc(num/100))+((Math.trunc(num/10))%10)+((num%100)%10);
    console.log(res);
}
else{
    console.log('Uch xonali son emas');
}
*/


//12-masala Uch xonali son berilgan. Raqamli teskari yozilsa qanday son hosil bo'lishini toping

/*
let num = +prompt('Uch xonali son kiriting');
let res;
if(num>99 && num<1000){
    res=(Math.trunc(num/100))+((Math.trunc(num/10))%10)*10+((num%100)%10)*100;
    console.log(res);
}
else{
    console.log('Uch xonali son emas');
}
*/


//13-masala Berilgan 3 xonali sonni chapdan birinchi raqamini o'chirib o'ng tomoniga yozilganda hosil bo'lgan sonni toping

/*
let num=+prompt('Uch xonali son kiriting');
let res;
if(num>99 && num<1000){
    res=(Math.trunc(num/100))+((Math.trunc(num/10))%10)*100+((num%100)%10)*10;
    console.log(res);
}
else{
    console.log('Uch xonali son emas');
}
*/
