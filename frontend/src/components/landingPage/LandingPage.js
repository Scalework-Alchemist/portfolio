import React, { Component } from 'react'
import { CheckerBoard } from '../checkerBoard/CheckerBoard';
import { Helloworld } from '../helloWorld/HelloWorld';


class LandingPage extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <Helloworld />
                <CheckerBoard />
            </div>
            
        )
    }
}
export default LandingPage;