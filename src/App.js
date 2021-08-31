import React from 'react'
import Header from './components/header/Header'
import Article from './components/article/Article'
import "./sass/main.scss"

const App = () => {
  return (
    <>
      <Header />
      <Article
        titletext="How to get a sexy body"
        bodytext="body of a sexy lady"
        authortext="Trude sin sexy body"
      />
      <Article
        titletext="Henrik er gammel i ryggen"
        bodytext="Slik får man ikke en sexy body"
        authortext="Narkolai"
      />
      <Article
        titletext="Men trygve derimot har en sexy body"
        bodytext="han har en sexy damekropp"
        authortext="Trude"
      />
    </>
  )
}

export default App

