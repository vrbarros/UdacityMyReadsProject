import React from 'react'
import {Route, Switch} from 'react-router'
import { withRouter } from 'react-router-dom'
import './App.css'

// redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// Import actions
import * as searchActions from './search/actions'
import * as shelfActions from './shelf/actions'

// Import the main components from the App
import Search from './search/Search'
import Shelf from './shelf/Shelf'

const ConnectedSwitch = connect(state => ({location: state.location}))(Switch)

class BooksApp extends React.Component {
  render() {
    return (<div className="app">
      <ConnectedSwitch>
        <Route path='/' exact render={() => (<Shelf key='shelf' {...this.props}/>)}/>
        <Route path='/search' exact render={() => (<Search key='search' {...this.props}/>)}/>
      </ConnectedSwitch>
    </div>)
  }
}

// Replicate all states to props
function mapStateToProps(state) {
  return {shelf: state.shelf, search: state.search}
}

// Dispatch actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...searchActions,
    ...shelfActions
  }, dispatch)
}

// Connect redux feature
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BooksApp))
