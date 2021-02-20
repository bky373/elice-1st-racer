/* 시작하기 전에,
   
    < 실습 환경 >
        https://stackblitz.com/edit/react-openapi-advanced?file=src%2FApp.js
*/


/*
    index.js 코드
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


/*
    Pagination.js 코드
*/
import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}


/*
    PokemonList.js 코드
*/
import React from 'react'

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}


/*
    App.js 코드
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PokemonList from './PokemonList'
import Pagination from './Pagination';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)


  const [] = useState()
  useEffect(() => {
    setLoading(true)
    let cancel;
    // 포켓몬 데이터를 불러오고 cancelToken을 함께 넘겨줍니다. 그리고 state를 설정하세요.
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
      setPokemon(response.data.results.map(p => p.name));
    });
    // 페이지 이동이 취소되는 경우 현재 페이지를 유지합니다.
    return () => cancel()
  }, [currentPageUrl])

  // 다음 페이지로 이동합니다.
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  // 이전 페이지로 이동합니다.
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }
  
  // 로딩 상태인 경우 로딩중을 출력합니다.
  if (loading) return "로딩중..."
  
  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
