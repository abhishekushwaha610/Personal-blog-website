import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    // constructor(props){
    //     super(props)
        
    // }
    render(){
        
        return (
        <nav className="navbar navbar-expand-lg py-3 black green">
            <a className="navbar-brand success " href="/">Abhishek Kushwaha</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNavAltMarkup">
                <div className=" navbar-nav ml-auto" >
                    <Link to="/" className={`nav-link green ${this.props.home}`} >Home <span className="sr-only">(current)</span></Link>
                    <Link to="/blog" className={`nav-link green mx-5 ${this.props.blog}`} to="/blog">Blog</Link>
                    <Link to= "/feedback" className={`nav-link green mr-5 ${this.props.feedback}`} href="/feedback">Feedback</Link>
                    {/* <a className="nav-item nav-link disabled" href="#">Disabled</a>  */}
                    
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar
