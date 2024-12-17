import React,{Component} from "react";

export class HelloComponent extends Component{

    render(){

        const x=10;
        return (
            <div>
                <h1>Welcome to my first component- {x}</h1>
            </div>
          
        )
    }

    

}