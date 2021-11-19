//Selectores
const result = document.querySelector("#sectionResult");
const optGroupIdioma = document.querySelector("#selFilterData #lang");
const optGroupContinente = document.querySelector("#selFilterData #continent");
const optGroupCurrencies = document.querySelector("#selFilterData #currency");
const buttonSearch = document.querySelector("#btnSearchInd");

const selectOrder = document.querySelector("#selFilterOrder");
const selectResults = document.querySelector("#selFilterResults");

const inpSearch = document.querySelector("#searchSection");

const URL_PATH = "https://restcountries.com/v2/";

//Variable para utilizar API de localStorage
const storage = window.localStorage;

const vars = {
    result,
    optGroupIdioma,
    optGroupContinente,
    buttonSearch,
    optGroupCurrencies,
    selectOrder,
    selectResults,
    inpSearch,
    URL_PATH,
    storage
}

export default vars;