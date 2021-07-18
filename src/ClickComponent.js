import React, { Component, Fragment } from 'react';

class ClickComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'rahul',
            lsName:'sharma'
        }
        console.log(this)
       // this.myClickHandler = this.myClickHandler.bind()
    }

    myClickHandler(){
        this.setState({
            name:"rahul2",
            lsName:"sh"
        })
     
    }

    render(){
        return(
           
            <Fragment>
                <button onClick={this.myClickHandler.bind(this)}>Click Me !</button>
                <h1>{this.state.name}</h1>
                <h1>{this.state.lsName}</h1>
            </Fragment>
        )
    }
}



export default  ClickComponent;