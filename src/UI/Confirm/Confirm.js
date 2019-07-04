import React, {Component} from 'react';
import './Confirm.css';

class Confirm extends Component{
  constructor(props){
    super(props)
    this.state={
      displayPopup:false
    }
  }

  myFunction =() => {
    console.log(this.state.displayPopup);
    this.setState({
          displayPopup:!this.state.displayPopup
        })
  }

  render(){
    let popup=<div></div>
    if(this.state.displayPopup){
      popup=(
            <div className="popuptext">
              <button  className="Danger" onClick={this.props.clicked}>Confirm</button>
              <button  className="Primary">Cancle</button>
            </div>
          )
    }
    return (
      <div className="popup" onClick={this.myFunction}>Delete
        {popup}
      </div>
    )
  }
}

export default Confirm;