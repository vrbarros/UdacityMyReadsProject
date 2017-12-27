import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import './App.css'
import Search from './search/Search'
import Shelf from './shelf/Shelf'
import fetchAll from './shelf/actions'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    return (<div className="app">
      <Route path='/' exact={true} render={() => (<Shelf key='shelf'/>)}/>
      <Route path='/search' exact={true} render={() => (<Search key='search'/>)}/>
    </div>)
  }
}

function mapStateToProps(state) {
  return {shelf: state.shelf}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAll: fetchAll
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp)
