// rename file as needed

// non-page components are used as subcomponents pages to fill them with content

import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/NavigationPanel.css'

function NavigationPanel (props) {
    let {root, pageOne, pageTwo} = props.routePaths
    return (
        <nav className="navPanel">
          <h2 className='navHeader'>React Router</h2>
          <div className="linkWrapper">
            <NavLink className="navLink" exact to={root.path} activeClassName='active'>{root.navLinkText}</NavLink>
            <NavLink className="navLink" to={pageOne.path} activeClassName="active">{pageOne.navLinkText}</NavLink>
            <NavLink className="navLink" to={pageTwo.path} activeClassName="active">{pageTwo.navLinkText}</NavLink>
          </div>
        </nav>
    )
  }

export default NavigationPanel




  // Option 2: class-component version 



// class NavigationPanel extends Component {
//     // inclusion of props depends on whether app.js passes any
//     constructor(props){
//       super(props)
//       this.state = {
//           key: "value"
//       }
//     }
  
    
// //  Optional - set the initial state or run any other code needed when the component finishes mounting
//     componentDidMount (){
//       try {
//           this.setState((prevState) => ({
//              // set initial state here
//           }))
//       } catch (error) {
//           console.log(error)
//       }
//     }
  
//     render() {
//       return (
//         <nav>
//           <NavLink exact to='/' activeClassName='active'>Home</NavLink>
//           <NavLink to='/posts' activeClassName="active">Posts</NavLink>
//           <NavLink to='/About' activeClassName="active">About</NavLink>
//         </nav>
//       )}
//     }
  
//     export default NavigationPanel
  
  