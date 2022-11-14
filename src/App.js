import React from 'react';
import "./Style.css";

class App extends React.Component{
  render(){
    return(
      <div class="abc"><center>
       <Button text="WELCOME!!!"/></center>
       <img src="http://www.emiratessands.com/wp-content/themes/emirate/images/service-center1.jpg" class="img-fluid" width="100%" height="500" alt=""></img>
       {/* <marquee width="60%" direction="left" height="100px">
This is a sample scrolling text that has scrolls in the upper direction.
</marquee> */}
<a href="https://rzp.io/l/VFKhxGnCKG">Razor Pay</a>
      </div>
    )   }
}
class Button extends React.Component{
  state={
    textflag:false,
  }
  ToggleButton(){
    this.setState(
      {textflag:!this.state.textflag}
    );
  }
  render(){
    return(
      <div>
        <center><button onClick={()=>this.ToggleButton()}>
          {this.state.textflag===false? "Hide":"Display"}
        </button></center>
        {!this.state.textflag&&this.props.text}
      </div>
    )
  }
}
export default App;