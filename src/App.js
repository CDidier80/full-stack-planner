// See notes on App.js in React-Router context, <Switch> and <Route> below 

import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import './styles/App.css';
import Home from './pages/Home'
import NavigationPanel from './components/NavigationPanel'
import PageOne from './pages/PageOne'
import PageTwo from  './pages/PageTwo'


class App extends Component {
  // inclusion of props is optional/situational
  constructor(props){
    super(props)
    this.state = {
        routePaths: {
          root: {path: "/", navLinkText: 'Home'},
          pageOne: {path: "/pageone", navLinkText: 'Page One'},
          pageTwo: {path: "/pagetwo", navLinkText: 'Page Two'}
        }
    }
  }

  // Optional - set the initial state or run any other code needed when the component finishes mounting
  // componentDidMount (){
  //   try {
  //       this.setState((prevState) => ({
  //          // set initial state here
  //          ({exampleKey : exampleValue})   
         
  //       }))
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }


  render() {
    let {root, pageOne, pageTwo} = this.state.routePaths
    return (
      <div className="app">
        <NavigationPanel className="navigationPanel" routePaths={this.state.routePaths}/>
        <Switch>
          <Route exact path={root.path} component={Home} />
          <Route path={pageOne.path} component={PageOne} />
          <Route path={pageTwo.path} component={PageTwo} />
        </Switch>
      </div>
    )}
  }

  export default App


// Option 2: functional-component version 
// note: using the function version prevents paths being passed as props from state,
// so remove pathRoutes from state and hard code them into each route and nav link

// function App() {
//   return (
//     <div className="App">
//       <Header className="links"/>
//       <main>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/pageone" component={PageOne} />
//           <Route path="/pagetwo" component={PageTwo} />
//         </Switch>
//       </main>
//     </div>
//   )
// }

// export default App




//                          Purpose and Hierarchy Position of App.js

// App.js is the 2nd highest javascript file in the tree hierarchy. Use it to set the routes and paths for 
// your application and connect them to their respective page components. App.js should be imported to 
// index.js for configuration and rendering.


//                          Notes on <Switch> and <Route> components

// These are components built in to React-Router to facilitate "multi-page" navigation. Switch components
// prevent the performance-hindering effects of rendering all routes simultaneously. Route components are used
// to connect the various pages of the application to a path. These paths are used to facilitate user navigation
// between the pages. Each Route component requires a path and component prop to function.
