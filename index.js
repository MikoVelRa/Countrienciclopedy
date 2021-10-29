//Importes
import dictCountries from "./dictionary.js";
import vars from "./variables.js";

const {
  result,
  optGroupIdioma,
  optGroupContinente,
  optGroupCurrencies,
  selectOrder,
  selectResults,
  inpSearch,
  URL_PATH,
  storage
} = vars;

let resul = [];

//Objeto que gestionará la petición en turno y su respuesta.
const objRequest = {
  req: undefined,
  res: undefined
};

//IIFE que ejecutará la descarga de los datos.
(() => {
  if (!storage.getItem("lang") && !storage.getItem("currency") && !storage.getItem("continent")) {
    objRequest.req = getURL();
    console.log("Bajando data del server...");
    downloadData(objRequest.req);
  } else {
    console.log("Extrayendo data de storage");
    [...document.querySelectorAll("optgroup")].map(opt => {
      fillSelectGroups(JSON.parse(storage.getItem(opt.id)), opt);
    });
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
        alert("Please, input data");
        return;
      } 
    }
  });

  document.addEventListener("click", e => {
    if (e.target.id === "btnSearch") {} 
    else if (e.target.id === "btnSearchInd") {
        
    }
  });

  document.addEventListener("input", searchCountry)
});

function searchCountry(e){
  let countryTerm = e.target.value;
  if(countryTerm){
    countryTerm.replace(" ", "_");

    const regExp = new RegExp(`^${countryTerm}`, "i");
    const result = [...Object.keys(dictCountries)].filter(country => regExp.test(country))
    
    drawResults(result)

    resultList.classList.remove("hidden");
    resultList.classList.add("block");
  } else {
    resultList.classList.remove("block");
    resultList.classList.add("hidden");
  }
}

function drawResults(collection){
  const divContainerReults = document.querySelector('#resultList');
  clearResult(divContainerReults);
  collection.forEach( element => {
    const li = document.createElement('li');
    li.textContent = element;
    divContainerReults.appendChild(li)
  })
}

//Llamado a endpoint de API
function makeCallAPI(url) {
  fetch(url)
    .then(response => response.json())
    .then(resultado => objRequest.res = resultado)
    .catch(error => console.log(error));
}

function getURL(id = "all", value = "") {
  return URL_PATH.concat(id).concat(`/${value}`);
}

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

function storeData(selector, arrElements) {
  const arrayToStore = arrElements.map(option => [option.value, option.text]);

  storage.setItem(selector.id, JSON.stringify(arrayToStore));
}

function getBorders(obj) {
  resul = [];
  obj.forEach(result => {    
    let {borders} = result;
    if (borders) {
      fetchBorders(borders, result);
    } else {
      paintHTML(obj);
    }
  });
}

function fetchBorders(fronteras, country) {  
  console.log({fronteras, country})

  fronteras = fronteras.map(border => fetch(`https:restcountries.com/v2/alpha/${border}`));

  Promise.all(fronteras)
    .then(result => result.forEach((promise, index) => promise.json()
      .then(country => {
        fronteras[index] = country.name
      })
    ),
      country.borders = fronteras,
      resul.push(country)
    );

    setTimeout(() => {
      paintHTML(resul)
    }, 1500);
}

function paintHTML(res) {
  clearResult(result);
  res.forEach(country => {
    const {
      capital,
      borders,
      languages,
      name,
      population,
      region,
      area,
      flags: {
        png
      }
    } = country;  

    let fronteras = borders ? borders.join(", ") : "Sin fronteras";

    const card = document.createElement("div");
    card.classList.add("w-80", "mt-2", "ml-2", "rounded-lg", "bg-white");
    card.innerHTML += `
      <img src="${png}" width="320" height="213" alt="Bandera de ${name}">
      <div class="pl-2">
        <p class="text-xl pt-2"><strong>${name}</strong></p>
        <p><strong>Capital: </strong>${capital}</p>
        <p><strong>Área: </strong>${area}</p>
        <p><strong>Población: </strong>${population}</p>
        <p><strong>Región: </strong>${region}</p>
        <p><strong>Fronteras: </strong>${fronteras}</p>
        <p>
          <strong>Idiomas: </strong>
          ${languages.map(lang => lang.nativeName).join(", ")}
        </p>
      </div>
      
    `;

    result.appendChild(card);
  });

}

function clearResult(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
}