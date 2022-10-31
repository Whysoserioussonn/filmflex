import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
    <Main />
    <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
    <Row rowID="2" title="Now Playing in a Theater Near You" fetchURL={requests.requestNowPlaying} />
    <Row rowID="3"  title="Top-Rated" fetchURL={requests.requestTopRated} />
    <Row rowID="4" title="Action" fetchURL={requests.requestAction} />    
    <Row rowID="5" title="Animation" fetchURL={requests.requestAnimation} />
    <Row rowID="6" title="Comedy" fetchURL={requests.requestComedy} />
    <Row rowID="7" title="Drama" fetchURL={requests.requestDrama} />
    <Row rowID="8" title="Family" fetchURL={requests.requestFamily} />
    <Row rowID="10" title="Music" fetchURL={requests.requestMusic} />
    <Row rowID="11" title="Mystery" fetchURL={requests.requestMystery} />
    <Row rowID="9" title="Spooky" fetchURL={requests.requestSpooky} />
    <Row rowID="13" title="TV Movies" fetchURL={requests.requestTVMovie} />
    <Row rowID="14" title="War" fetchURL={requests.requestWar } />
    <Row rowID="15" title="Western" fetchURL={requests.requestWestern } />
    

    </>
  )
}

export default Home