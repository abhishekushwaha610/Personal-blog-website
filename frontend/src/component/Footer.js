import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class Footer extends Component{
    constructor(props)
	{
		super(props);
		this.state={show:false};
    }
    
    render(){
        return (
            <div className="black card card-body green">
                <p className="tc f3 b bgreen black rounded-pill" >&copy;abhiishek_kushwaha</p>
                <div className="d-flex justify-center ">
                    <a href="https://www.github.com/abhishekushwaha610/"  target="_"> <i className="fa fa-github-alt f1 grow green"></i> </a>
                    <a href="https://www.instagram.com/abhiishek_kushwaha/"  target="_"> <i className="fa fa-instagram f1 grow green mx-4"></i> </a>
                    <a href="https://www.linkedin.com/in/abhiishek-kushwaha/"  target="_"> <i className="fa fa-linkedin  f1 grow green"></i> </a>
                </div>
                
                <p className="tc mt-4">Find me.</p>
            </div>
            )
        }
        
}
export default Footer