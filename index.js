//Importes
import dictCountries from "./dictionary.js";

//Selectores
const result = document.querySelector("#sectionResult");
const optGroupIdioma = document.querySelector("#selFilterData #lang");
const optGroupContinente = document.querySelector("#selFilterData #continent");
const optGroupCurrencies = document.querySelector("#selFilterData #currency");

const selectOrder = document.querySelector("#selFilterOrder");
const selectResults = document.querySelector("#selFilterResults");

const inpSearch = document.querySelector("#searchSection");

const URL_PATH = "https://restcountries.com/v2/";

//Variable para utilizar API de localStorage
const storage = window.localStorage;

//Objeto que gestionará la petición en turno y su respuesta.
const objRequest = {
  req: undefined,
  res: undefined
};

/*Gestión de eventos en torno al ciclo de vida del navegador
if (document.readyState === "loading") {
  objRequest.req = getURL();
  downloadData(objRequest.req);
}*/

//IIFE que ejecutará la descarga de los datos.
(() => {

  if(!storage.getItem('lang') && !storage.getItem('currency') && !storage.getItem('continent')){    
    objRequest.req = getURL();
    console.log("Bajando data del server...")
    downloadData(objRequest.req);
  } else {
    console.log("Extrayendo data de storage");
    [...document.querySelectorAll('optgroup')].map(opt => {
      fillSelectGroups(JSON.parse(storage.getItem(opt.id)), opt)      
    })
  }

})();

document.addEventListener("DOMContentLoaded", e => {

  document.addEventListener("change", e => {
    if (e.target.id === "selFilterData") {
      getURL(e.target.options[e.target.selectedIndex].parentNode.id, e.target.value);
    } else {
      objRequest.order = selectOrder.value;
      objRequest.results = parseInt(selectResults.value);
    }
  });

  document.addEventListener("submit", e => {
    e.preventDefault();

    const inputs = document.querySelectorAll(`#${e.target.id} *[class*=pl-2]`);

    for (let item of Object.values(inputs)) {
      if (!item.value) {
        alert("Please, input all data");
        return;
      } else {
        makeCallAPI(objRequest.req);
        setTimeout(() => {
          getResults(objRequest.res);
        }, 2000);
      }
    }
  });

  document.addEventListener("click", e => {
    if (e.target.id === "btnSearch") {} else if (e.target.id === "btnSearchInd") {
      const term = dictCountries[inpSearch.value.replace(" ", "_")];

      delete objRequest.order;
      delete objRequest.results;

      objRequest.req = getURL("name", term);
    }
  });
});

//Llamado a endpoint de API
function makeCallAPI(url) {
  fetch(url).then(response => response.json()).then(resultado => (objRequest.res = resultado));
}

function getURL(id = "all", value = "") {
  return URL_PATH.concat(id).concat(`/${value}`);
}

/*const endPoints = [
  "https://restcountries.com/v2/lang/es",
  "https://restcountries.com/v2/continent/europe",
  "https://restcountries.com/v2/all/"
];*/

//Descarga y transformación de la data obtenida
function downloadData(url) {
  makeCallAPI(url);

  const dataLangsMap = new Map();
  const dataContinentsMap = new Map();
  const dataCurrenciesMap = new Map();

  setTimeout(() => {
    const data = objRequest.res.map(country => ({langs: country["languages"], continent: country["region"], currency: country["currencies"]})).filter(c => c.currency !== undefined).map(langObject => {
      //debugger;
      const {langs, continent, currency} = langObject;
      for (let i = 0; i < langs.length; i++) {
        return {iso: langs[i]["iso639_1"], lenguaje: langs[i].name, continent, currIso: currency[i].code, denom: currency[i].name};
      }
    });

    //console.log(data);

    //Eliminación de datos repetidos
    data.forEach(obj => {
      dataLangsMap.set(obj["iso"], obj["lenguaje"]);
      dataCurrenciesMap.set(obj["currIso"], obj["denom"]);
      dataContinentsMap.set(obj.continent, obj.continent);
    });

    //Ordenamiento alfabético
    fillSelectGroups(Array.from(dataLangsMap).sort((a, b) => {
      if (a[1] > b[1]) 
        return 1;
      else if (a[1] < b[1]) 
        return -1;
      return 0;
    }), optGroupIdioma);

    fillSelectGroups(Array.from(dataContinentsMap).sort((a, b) => {
      if (a > b) 
        return 1;
      else if (a < b) 
        return -1;
      return 0;
    }), optGroupContinente);

    fillSelectGroups(Array.from(dataCurrenciesMap).sort((a, b) => {
      if (a > b) 
        return 1;
      else if (a < b) 
        return -1;
      return 0;
    }), optGroupCurrencies);
  }, 2000);
}

//Población de grupos dentro de los selectores
function fillSelectGroups(data, select) {
  const fragment = document.createDocumentFragment();

  //debugger;
  data.forEach(val => {
    const option = document.createElement("option");
    option.textContent = val[1];
    option.value = val[0];

    //debugger;
    fragment.appendChild(option);
    //console.log(val[1], val[0]);
  });

  select.appendChild(fragment);
  objRequest.res = undefined;
  
  storeData(select, [...select.children]);
}

function storeData(selector, arrElements){  
  const arrayToStore = arrElements.map( option => [option.value, option.text]);

  storage.setItem(selector.id, JSON.stringify(arrayToStore));
}

function getResults(obj) {
  clearResult();
  obj.forEach(country => {
    const {
      name,
      area,
      borders,
      capital,
      currencies,
      demonym,
      flag,
      languages,
      latlng,
      population,
      region,
      subregion
    } = country;

    result.innerHTML += `
    <div class="bg-white m-2">
      <img src="${flag}" alt="Bandera de ${name}" width="320" height="200"/>
      <div class="p-2">
        <p class="text-2xl overflow-visible">${name}</p>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Population:</strong> ${population}</p>      
        <p><strong>Continent:</strong> ${region}</p>
        <p><strong>Borders:</strong> ${borders.join(", ")}</p>
        <p><strong>Monedas:</strong> ${currencies.name} (${currencies.symbol})</p>                  
      </div>
    </div>
    `;

    console.log({borders, currencies, demonym, languages, latlng, subregion});
    
  });

  inpSearch.value = "";
}

function clearResult(){
  while(result.firstChild){
    result.removeChild(result.firstChild);
  }
}