import React, { Component } from 'react';
import List from './component/list'
import axios from 'axios'
import Search from './component/search'
import './App.css';

class App extends Component {

  state = {
    images: []
  }

  search = async (input) => {
    const sonuc = await axios.get(`https://pixabay.com/api/?key=14600389-81324494a61fa0d81fd4bc70c&q=${input}&image_type=photo`)
    this.setState({images: sonuc.data.hits})
  }


  render() {
    return (
      <div className='container'>
         <Search search={this.search}/>
         <List images={this.state.images}/>
      </div>
    );
  }
}

export default App;