/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js.js":
/*!*************************!*\
  !*** ./src/index.js.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/profile.js */ \"./src/js/profile.js\");\n/* harmony import */ var _js_poke_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/poke.js */ \"./src/js/poke.js\");\n\n\n\n\nconst poke = function () {\n    Object(_js_poke_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"])();\n};\nif(localStorage.id == 2){\n    poke();\n}\nelse{\n    Object(_js_profile_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n}\n\nconst pokemonButton = document.getElementById('pokemon-button');\nconst infoButton = document.getElementById('info-button');\n\nfunction pokemon(){\n    poke();\n    localStorage.id = 2;\n}\n\npokemonButton.onclick = pokemon;\npokemonButton.removeEventListener('click', pokemon);\n\nfunction info(){\n    Object(_js_profile_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"])();\n    localStorage.id = 1;\n}\ninfoButton.onclick = info;\ninfoButton.removeEventListener('click', info);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js.js?");

/***/ }),

/***/ "./src/js/poke.js":
/*!************************!*\
  !*** ./src/js/poke.js ***!
  \************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\nfunction render() {\n    const content = document.getElementById('root');\n    content.className = 'second-page';\n    content.innerHTML = '';\n\t\n    let pokemonButton = document.getElementById('pokemon-button');\n    let infoButton = document.getElementById('info-button');\n    pokemonButton.className = 'button';\n    infoButton.className = 'button';\n    document.body.className = 'second';\n\t\n    let name = document.createElement('span');\n    name.className = 'poke-name';\n\t\n    let abilities = document.createElement('div');\n    let header = document.createElement('h1');\n    header.className = 'header';\n    header.innerHTML = \"Abilities\";\n\t\n\tlet photo = document.createElement('div');\n    photo.className = 'photo';\n\t\n    let img = document.createElement('img');\n    img.className = 'img';\n\t\n\tconst capitalize = (s) => {\n\tif (typeof s !== 'string') return ''\n\treturn s.charAt(0).toUpperCase() + s.slice(1)\n\t}\n\t\n    async function getPokemon() {\n        let id = Math.floor(Math.random() * (808));\n        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';\n        const response = await fetch(url, {method: 'GET'});\n        const json = await response.json();\n        name.innerHTML = capitalize(json.name)+'   #'+id.toString();\n\t\t\n        let array = [];\n        for (let i = 0; i < json.abilities.length; i++) {\n            array.push(json.abilities[i]);\n            let abilityName = json.abilities[i].ability.name;\n            let abilityURL = json.abilities[i].ability.url;\n\n            let div = document.createElement('div');\n            div.className = 'div';\n\t\t\t\n            let ability = document.createElement('span');\n            ability.className = 'ability';\n\t\t\t\n            let description = document.createElement('p');\n\t\t\timg.src = json.sprites.front_default;\n\t\t\t\n            description.className = 'description';\n            ability.innerHTML = capitalize(abilityName);\n\t\t\n            div.appendChild(ability);\n            content.appendChild(div);\n\t\t\t\n            async function apiCall(url) {\n                const response = await fetch(url, {method: 'GET'});\n                const json = await response.json();\n\t\t\t\t\n                let desr = json.effect_entries[0].effect;\n                description.innerHTML = desr;\n                div.appendChild(description);\n            }\n            await apiCall(abilityURL);\n            abilities.appendChild(div);\n        }\n    }\n\t\n    \n    getPokemon().then();\n\t\n    content.appendChild(name);\n\t\n\tphoto.appendChild(img);\n    content.appendChild(photo);\n    abilities.appendChild(header);\n    content.appendChild(abilities);\n}\n\n\n//# sourceURL=webpack:///./src/js/poke.js?");

/***/ }),

/***/ "./src/js/profile.js":
/*!***************************!*\
  !*** ./src/js/profile.js ***!
  \***************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\nfunction start(){\n    const content = document.getElementById('root');\n    let pokemonButton = document.getElementById('pokemon-button');\n    let infoButton = document.getElementById('info-button');\n    pokemonButton.className = 'button';\n    infoButton.className = 'button';\n    content.innerHTML = '';\n    content.className = 'first-page';\n    document.body.className = 'first';\n    \n   \n    let Info = document.createElement(\"p\");\n    Info.className = 'Profile-info';\n    Info.innerHTML = \"Чернышев Владислав</br>Студент группы M3308\";\n    content.appendChild(Info);\n \n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/profile.js?");

/***/ })

/******/ });