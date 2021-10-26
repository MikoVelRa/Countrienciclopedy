const dictCountries = {
    Afganistán: "Afghanistan",
    Alandia: "Åland Islands",
    Albania: "Albania",
    Argelia: "Algeria",
    Samoa_Americana: "American Samoa",
    Andorra: "Andorra",
    Angola: "Angola",
    Anguilla: "Anguilla",
    Antártida: "Antarctica",
    Antigua_y_Barbuda: "Antigua and Barbuda",
    Argentina: "Argentina",
    Armenia: "Armenia",
    Aruba: "Aruba",
    Australia: "Australia",
    Austria: "Austria",
    Azerbaiyán: "Azerbaijan",
    Bahamas: "Bahamas",
    Bahrein: "Bahrain",
    Bangladesh: "Bangladesh",
    Barbados: "Barbados",
    Bielorrusia: "Belarus",
    Bélgica: "Belgium",
    Belice: "Belize",
    Benín: "Benin",
    Bermudas: "Bermuda",
    Bután: "Bhutan",
    Bolivia: "Bolivia (Plurinational State of)",
    Bonaire: "Bonaire, Sint Eustatius and Saba",
    Bosnia_y_Herzegovina: "Bosnia and Herzegovina",
    Botswana: "Botswana",
    Isla_Bouvet: "Bouvet Island",
    Brasil: "Brazil",
    Territorio_Británico_del_Océano_Índico: "British Indian Ocean Territory",
    Islas_Ultramarinas_Menores_de_Estados_Unidos: "United States Minor Outlying Islands",
    Islas_Vírgenes_del_Reino_Unido: "Virgin Islands (British)",
    Islas_Vírgenes_de_los_Estados_Unidos: "Virgin Islands (U.S.)",
    Brunei: "Brunei Darussalam",
    Bulgaria: "Bulgaria",
    Burkina_Faso: "Burkina Faso",
    Burundi: "Burundi",
    Camboya: "Cambodia",
    Camerún: "Cameroon",
    Canadá: "Canada",
    Cabo_Verde: "Cabo Verde",
    Islas_Caimán: "Cayman Islands",
    República_Centroafricana: "Central African Republic",
    Chad: "Chad",
    Chile: "Chile",
    China: "China",
    Isla_de_Navidad: "Christmas Island",
    Islas_Cocos_o_Islas_Keeling: "Cocos (Keeling) Islands",
    Colombia: "Colombia",
    Comoras: "Comoros", 
    Congo: "Congo",
    República_Democrática_del_Congo: "Congo (Democratic Republic of the)",
    Islas_Cook: "Cook Islands",
    Costa_Rica: "Costa Rica",
    Croacia: "Croatia",
    Cuba: "Cuba",
    Curazao: "Curaçao",
    Chipre: "Cyprus",
    República_Checa: "Czech Republic",
    Dinamarca: "Denmark",
    Yibuti: "Djibouti",
    Dominica: "Dominica",
    República_Dominicana: "Dominican Republic",
    Ecuador: "Ecuador",
    Egipto: "Egypt",
    El_Salvador: "El Salvador",
    Guinea_Ecuatorial: "Equatorial Guinea",
    Eritrea: "Eritrea",
    Estonia: "Estonia",
    Etiopía: "Ethiopia",
    Islas_Malvinas: "Falkland Islands (Malvinas)",
    Islas_Faroe: "Faroe Islands",
    Fiyi: "Fiji",
    Finlandia: "Finland",
    Francia: "France",
    Guayana_Francesa: "French Guiana",
    Polinesia_Francesa: "French Polynesia",
    Tierras_Australes_y_Antárticas_Francesas: "French Southern Territories",
    Gabón: "Gabon",
    Gambia: "Gambia",
    Georgia: "Georgia",
    Alemania: "Germany",
    Ghana: "Ghana",
    Gibraltar: "Gibraltar",
    Grecia: "Greece",
    Groenlandia: "Greenland",
    Grenada: "Grenada",
    Guadalupe: "Guadeloupe",
    Guam: "Guam",
    Guatemala: "Guatemala",
    Guernsey: "Guernsey",
    Guinea: "Guinea",
    Guinea_Bisáu: "Guinea-Bissau",
    Guyana: "Guyana",
    Haiti: "Haiti",
    Islas_Heard_y_McDonald: "Heard Island and McDonald Islands",
    Santa_Sede: "Vatican City",
    El_Vaticano: "Vatican City",
    Honduras: "Honduras",
    Hungría: "Hungary",
    Hong_Kong: "Hong Kong",
    Islandia: "Iceland",
    India: "India",
    Indonesia: "Indonesia",
    Costa_de_Marfil: "Ivory Coast",
    Iran: "Iran (Islamic Republic of)",
    Irak: "Iraq",
    Irlanda: "Ireland",
    Isla_de_Man: "Isle of Man",
    Israel: "Israel",
    Italia: "Italy",
    Jamaica: "Jamaica",
    Japón: "Japan",
    Jersey: "Jersey",
    Jordania: "Jordan",
    Kazajistán: "Kazakhstan",
    Kenia: "Kenya",
    Kiribati: "Kiribati",
    Kuwait: "Kuwait",
    Kirguizistán: "Kyrgyzstan",
    Laos: "Lao People's Democratic Republic",
    Letonia: "Latvia",
    Líbano: "Lebanon",
    Lesotho: "Lesotho",
    Liberia: "Liberia",
    Libia: "Libya",
    Liechtenstein: "Liechtenstein",
    Lituania: "Lithuania",
    Luxemburgo: "Luxembourg",
    Macao: "Macao",
    Macedonia: "North Macedonia",
    Madagascar: "Madagascar",
    Malawi: "Malawi",
    Malasia: "Malaysia",
    Maldivas: "Maldives",
    Mali: "Mali",
    Malta: "Malta",
    Islas_Marshall: "Marshall Islands",
    Martinica: "Martinique",
    Mauritania: "Mauritania",
    Mauricio: "Mauritius",
    Mayotte: "Mayotte",
    México: "Mexico",
    Micronesia: "Micronesia (Federated States of)",
    Moldavia: "Moldova (Republic of)",
    Mónaco: "Moldova (Republic of)",
    Mongolia: "Mongolia",
    Montenegro: "Montenegro",
    Montserrat: "Montserrat",
    Marruecos: "Morocco",
    Mozambique: "Mozambique",
    Myanmar: "Myanmar",
    Namibia: "Namibia",
    Nauru: "Nauru",
    Nepal: "Nepal",
    Países_Bajos: "Netherlands",
    Nueva_Caledonia: "New Caledonia",
    Nueva_Zelanda: "New Zealand",
    Nicaragua: "Nicaragua",
    Níger: "Niger",
    Nigeria: "Nigeria",
    Niue: "Niue",
    Isla_de_Norfolk: "Norfolk Island",
    Corea_del_Norte: "Korea (Democratic People's Republic of)",
    Islas_Marianas_del_Norte: "Northern Mariana Islands",
    Noruega: "Norway",
    Omán: "Oman",
    Pakistán: "Pakistan",
    Palau: "Palau",
    Palestina: "Palestine, State of",
    Panamá: "Panama",
    Papúa_Nueva_Guinea: "Papua New Guinea",
    Paraguay: "Paraguay",
    Perú: "Peru",
    Filipinas: "Philippines",
    Islas_Pitcairn: "Pitcairn",
    Polonia: "Poland",
    Portugal: "Portugal",
    Puerto_Rico: "Puerto Rico",
    Catar: "Qatar",
    Kosovo: "Republic of Kosovo",
    Reunión: "Réunion",
    Rumania: "Romania",
    Rusia: "Russian Federation",
    Ruanda: "Rwanda",
    San_Bartolomé: "Saint Barthélemy",
    Santa_Helena: "Saint Helena, Ascension and Tristan da Cunha",
    San_Cristóbal_y_Nieves: "Saint Kitts and Nevis",
    Santa_Lucía: "Saint Lucia",
    Saint_Martin: "Saint Martin (French part)",
    San_Pedro_y_Miquelón: "Saint Pierre and Miquelon",
    San_Vicente_y_Granadinas: "Saint Vincent and the Grenadines",
    Samoa: "Samoa",
    San_Marino: "San Marino",
    Santo_Tomé_y_Príncipe: "Sao Tome and Principe",
    Arabia_Saudita: "Saudi Arabia",
    Senegal: "Senegal",
    Serbia: "Serbia",
    Seychelles: "Seychelles",
    Sierra_Leona: "Sierra Leone",
    Singapur: "Singapore",
    San_Martín: "Sint Maarten (Dutch part)",
    República_Eslovaca: "Slovakia",
    Eslovenia: "Slovenia",
    Islas_Salomón: "Solomon Islands",
    Somalia: "Somalia",
    República_de_Sudáfrica: "South Africa",
    Islas_Georgias_del_Sur_y_Sandwich_del_Sur: "South Georgia and the South Sandwich Islands",
    Corea_del_Sur: "Korea (Republic of)",
    España: "Spain",
    Sri_Lanka: "Sri Lanka",
    Sudán: "Sudan",
    Sudán_del_Sur: "South Sudan",
    Surinam: "Suriname",
    Islas_Svalbard_y_Jan_Mayen: "Svalbard and Jan Mayen",
    Suazilandia: "Swaziland",
    Suecia: "Sweden",
    Suiza: "Switzerland",
    Siria: "Syrian Arab Republic",
    Taiwán: "Taiwan",
    Tayikistán: "Tajikistan",
    Tanzania: "Tanzania, United Republic of",
    Tailandia: "Thailand",
    Timor_Oriental: "Timor-Leste",
    Togo: "Togo",
    Islas_Tokelau: "Tokelau",
    Tonga: "Tonga",
    Trinidad_y_Tobago: "Trinidad and Tobago",
    Túnez: "Tunisia",
    Turquía: "Turkey",
    Turkmenistán: "Turkmenistan",
    Islas_Turks_y_Caicos: "Turks and Caicos Islands",
    Tuvalu: "Tuvalu",
    Uganda: "Uganda",
    Ucrania: "Ukraine",
    Emiratos_Árabes_Unidos: "United Arab Emirates",
    Reino_Unido: "United Kingdom of Great Britain and Northern Ireland",
    Estados_Unidos: "United States of America",
    Uruguay: "Uruguay",
    Uzbekistán: "Uzbekistan",
    Vanuatu: "Vanuatu",
    Venezuela: "Venezuela (Bolivarian Republic of)",
    Vietnam: "Vietnam",
    Wallis_y_Futuna: "Wallis and Futuna",
    Sahara_Occidental: "Western Sahara",
    Yemen: "Yemen",
    Zambia: "Zambia",
    Zimbabue: "Zimbabwe",
}

export default dictCountries;