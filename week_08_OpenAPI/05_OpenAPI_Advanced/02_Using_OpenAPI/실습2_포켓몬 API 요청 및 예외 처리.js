/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-advanced?file=src%2FApp.js
*/


/*
    index.js 코드
*/
import axios from 'axios';

var apiUrl = "https://pokeapi.co/api/v2/pokemon/"; // API 주소
var input = document.querySelector(".pokemon-input"); // 검색할 ID
var pokemonName = document.querySelector(".pokemon-name"); // 포켓몬 이름
var pokemonImage = document.querySelector(".pokemon-image"); // 포켓몬 사진

function getPokemonData() {
    // 위의 선언된 변수를 활용하여 지시사항에 따라 GET 요청을 해보세요.
    axios.get(apiUrl + input.value)
    .then(response => {
      pokemonName.innerHTML = response.data.forms[0].name;
      pokemonImage.src = response.data.sprites.front_default;
    })
    .catch(error => {
      pokemonName.innerHTML = "(An error has occurred.)";
      pokemonImage.src = "";
    })
}

var button = document.querySelector(".pokemon-button");
button.addEventListener("click", getPokemonData);