import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Weather from './components/Weather';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      txtColor: 'dark',
      bgBack: 'white',
      changeText: 'Enable',
    }

  }

  changeMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark',
        txtColor: 'light',
        bgBack: 'black',
        changeText: 'Disable',
      })
      document.body.style.backgroundColor = 'rgb(2, 0, 20)';
      document.body.style.color = 'white';
      document.getElementById('weather-container').style.backgroundColor = 'rgb(2, 0, 20)';
      document.getElementById('display-news').style.backgroundColor = 'rgb(2, 0, 20)';
      document.getElementById('card1').style.backgroundColor = 'rgb(8, 8, 8)';
      document.getElementById('card2').style.backgroundColor = 'rgb(8, 8, 8)';
      document.getElementById('card3').style.backgroundColor = 'rgb(8, 8, 8)';
      document.getElementById('weather-nav').style.backgroundColor = 'rgb(8, 8, 6)';

    }
    else {
      this.setState({
        mode: 'light',
        txtColor: 'dark',
        bgBack: 'white',
        changeText: 'Enable',
      })
      document.body.style.backgroundColor = 'rgb(184, 250, 250)';
      document.body.style.color = 'black';
      document.getElementById('weather-container').style.backgroundColor = 'rgb(204, 204, 204)';
      document.getElementById('display-news').style.backgroundColor = 'rgb(204, 204, 204)';
      document.getElementById('card1').style.backgroundColor = 'white';
      document.getElementById('card2').style.backgroundColor = 'white';
      document.getElementById('card3').style.backgroundColor = 'white';
      document.getElementById('weather-nav').style.backgroundColor = 'rgb(204, 204, 204)';

    }
  }

  render() {

    return (
      <div>
        <Router>

          <Navbar mode={this.state.mode} changeMode={this.changeMode} txtColor={this.state.txtColor} changeText={this.state.changeText} />

          <div className='hero'>

            <div>
              <Weather mode={this.state.mode} />
            </div>

            <div>
              <Routes>

                <Route exact path="/" element={<News pagesize={9} category={'General'} key={'general'} bgBack={this.state.bgBack} />}></Route>

                <Route exact path="/general" element={<News pagesize={9} category={'General'} key={'general'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/business" element={<News pagesize={9} category={'Business'} key={'business'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/entertainment" element={<News pagesize={9} category={'Entertainment'} key={'entertainment'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/health" element={<News pagesize={9} category={'Health'} key={'health'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/science" element={<News pagesize={9} category={'Science'} key={'science'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/sports" element={<News pagesize={9} category={'Sports'} key={'sports'} bgBack={this.state.bgBack} />}> </Route>

                <Route exact path="/technology" element={<News pagesize={9} category={'Technology'} key={'technology'} bgBack={this.state.bgBack} />}> </Route>

              </Routes>
            </div>

          </div>

        </Router>
      </div>
    )
  }
}

