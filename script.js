// console.log("hi")
let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi",
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin",
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C",
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia",
    }
]

var button = document.getElementById("submit");
button.addEventListener("click", hitApi);

async function hitApi() {
  console.log("inside hitapi");
  //var country= document.getElementById("input").value;

  let data = countriesInfo;

  //console.log(country)
  if (data !== null) {
    data.forEach((element) => {
      printData(element);
    });
  } else {
    alert("Enter corect country name");
  }
}

function printData(element) {
  console.log(element.flag);
  var row = document.getElementById("row");
  row.innerHTML =
  row.innerHTML +
    `<div class="col-4">
        <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="${element.flag}" alt="Card image cap">
         <div class="card-body">
        <p class="card-text">${element.population}</p>
        <p class="card-text">${element.capital}</p>
        <p class="card-text">${element.country}</p>
        </div>
        </div>
    </tr>`;
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
