//that is the class component for props
import React ,{Component} from "react";
class AboutClass extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        
          count2: 2 
      }
    }
    
    

    render(){
        return(
            <div>
                {/* <h1>name:{this.props.name}
                    location:{this.props.location}
                </h1> */}
                
                <h1>{this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({
                       count2: this.state.count2+1
                    })
                }}>Click me</button>
            </div>
            

        )

    }
}
export default AboutClass


//that is the functional component for props

// import React from 'react'

// function AboutClass({name,location}) {
//   return (
//     <div>{name}
//     {location}</div>
//   )
// }

// export default AboutClass