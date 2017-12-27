import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './App.css'
import Search from './search/Search'
import Shelf from './shelf/Shelf'
import * as shelfActions from './shelf/actions'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (<div className="app">
      <Route path='/' exact={true} render={() => (<Shelf key='shelf'/>)}/>
      <Route path='/search' exact={true} render={() => (<Search key='search'/>)}/>
    </div>)
  }
}

export default BooksApp
