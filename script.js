console.log('hallo');
confirm('hallo')

let firstText = "this is a string";
let secondText = "another string";
let combinedText = `${firstText} and ${secondText}`;
console.log(combinedText);

let pureDecimal = 2;
let floatNumber = 2.24;

pureDecimal = 2+2;
floatNumber = 1+2+4;
console.log(pureDecimal)

let object ={
    name: "michael tamsil",
    universiy: "UIB",
    year: 2018,
    friends: ["Mark","Jessy","Shawn"]
};
console.log(object);
console.log(object.universiy);

moment.locale('id');
let tgl = moment();
console.log(moment().format('LLLL'));
let tgl2 = tgl.format('dddd, YYYY DD MMMM');
let pesan = `hari ini adalah ${tgl2}`
console.log(pesan);

let grade = window.prompt("MY grade is")
let result = '';
if (grade >= 90) {
    result ="A";
}
else if (grade >= 80){
    result ="B";
}
else if (grade >= 70)
{
    result ="c";
}
else if (grade >= 60)
{
    result ="D";
}
else
{
    result ="F";
}
window.alert (`your score is ${result}`)