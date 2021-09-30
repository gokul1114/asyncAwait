// console.log("hi")

var button = document.getElementById("submit");
button.addEventListener('click', hitApi)

async function hitApi(){
console.log("inside hitapi");
var country= document.getElementById("input").value;
console.log(country)
let data =  await fetch('https://api.covid19api.com/dayone/country/' + country)
console.log(data)
if(data.ok) {
let dataJson = await data.json();
dataJson.forEach(element => {
    console.log(element.Active + " " + element.Deaths)
});
}
else { 
   alert("Enter corect country name")
}

}

//--------------------------------------------------------------------------------------
// THIS IS AN EXAMPLE OF ASYNC AWAIT TO PRINT WETHER DATA OF ALL COUNTRIES. 

// async function hitApi(){
//     console.log("inside hitapi");
//     let data =  await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
//     if(data.ok) {
//     let dataJson = await data.json();
//     dataJson.forEach(element => {
//            printData(element)
//     });
//     }
//     else { 
//        alert("Enter corect country name")
//     }
    
//     }


// hitApi();

// async function printData(element) {
//     let cname = element.name;
//     let wetherData = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cname+"&appid=8446f4e553d8bab1cb671332cc5314e5")
//     wetherDataJson = await wetherData.json();
//     console.log(cname +` ${wetherDataJson.main.temp}`);

// }

// let fetchCountry = fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// .then(resp => console.log(resp.json()));