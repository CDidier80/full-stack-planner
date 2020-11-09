// rename file as needed

// non-page components are used as subcomponents pages to fill them with content
// repurpose this file by deleting returned html and it's css

import React, { Component } from 'react'
import '../styles/ComponentOne.css'


class ComponentOne extends Component {
    // inclusion of props depends on whether app.js passes any
    constructor(props){
      super(props)
      this.state = {
          routePaths: "value"
      }
    }
  
    
 // Optional - set the initial state or run any other code needed when the component finishes mounting
    // componentDidMount (){
    //   try {
    //       this.setState((prevState) => ({
    //          // set initial state here
    //       }))
    //   } catch (error) {
    //       console.log(error)
    //   }
    // }
  
    render() {
      let scrollArr = []
      for(let i=0; i<20; i++) {
        scrollArr.push(
          {className:`scrollItem item${i}`,
          scrollText: `Item ${i + 1}`
        })}

      return (
        <section className='dropdown'>
          <div className='dropdownHeader'>
            <h3 className='compOneText'>Component One</h3>
            <p className='subtitle'>A dropdown menu</p>
          </div>
          <div className="scroll">
            {scrollArr.map((scroll, index) => <div className={scroll.className}>{scroll.scrollText}</div>)}
          </div>
          <div className='scrollFooter'>"cool beans"</div>
        </section>
      )
    }
}
  
    export default ComponentOne
  
  
  // Option 2: functional-component version 
  
  // function ComponentOne(props) {
    // return (
    //     <header className="componentOneWrapper">
    //         <h1>This is Component One</h1>
    //         <p>Change the file and jsx/html content as needed</p>
    //     </header>
  //   )
  // }
  
  // export default ComponentOne;