import React, { Component } from 'react';
import './App.css';
import Characters from './Characters.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    const nameArray = this.state.starwarsChars.map(index => {
      return index.name;
    });
    const genderArray = this.state.starwarsChars.map(index => {
      return index.gender;
    });
    const massArray = this.state.starwarsChars.map(index => {
      return index.mass;
    });
    const lukeSkywalker = nameArray[0];
    console.log(lukeSkywalker);
    console.log(genderArray);
    console.log(massArray);

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* This is the div for displaying the characters after passing each object from the array. 
        Work in Progress */}
        <div>
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={0}
             />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={1}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={2}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={3}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={4}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={5}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={6}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={7}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={8}  />
          <Characters 
            char={nameArray}
            gender={genderArray}
            mass={massArray}
            charNum={9}  />
        </div>
      </div>
    );
  }
}

export default App;
