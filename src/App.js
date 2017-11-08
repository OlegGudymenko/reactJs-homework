import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './components/App.css';
import TasksList from './components/TasksList';
import Categories from './components/Categories';

const App = (props) =>  {
  const{ selectedCategory } = props
  console.log(selectedCategory, 'props id')

  return(
    <div className="App">
      <div className='container'>
        <div className='row'>
          <Categories />
            {selectedCategory ? <TasksList/> : null }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
      selectedCategory: state.selectedCategory
  };
};

export default connect(mapStateToProps)(App)
