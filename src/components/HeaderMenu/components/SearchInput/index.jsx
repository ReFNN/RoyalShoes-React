import React from 'react'
import './style.scss'

export default function SearchInput() {
  return (
    <>
        <div id="wrap">
            <form action="" autoComplete="on">
                <input id="search" name="search" type="text" placeholder="O que você procura?"/>
                <input id="search_submit" value="Rechercher" type="submit"/>
            </form>
        </div>
    </>
  )
}
