import React, {Component} from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(props)
	{
        super(props);
		this.state={show:false};
    }
    componentDidMount(){
        document.title = "Abhishek | Home"
    }
    render() {
        return   (
        <div className="jumbotron black pt-4 mb-0">
            <Navbar home={"line"}/>
            <div className="container  text-center">
                <img src="https://i1.wp.com/fudoushin.wordpress.com/files/2009/05/img_4693.jpg?resize=1200%2C800&crop=1" alt="" className="rounded-circle"  width="200" height="200"/>
                <h1 className="mt-3 green ">Abhishek Kushwaha </h1>
                <h5 className="text-success "> Hi, I am Programmer web Developer Competative Programer and Machine learner.</h5>
                <p className="green ">abhishekushwaha610@gmail.com</p>
                <p className="green ">+91-9039818826</p>
                <div className="mt-5">
                    <Link to="/blog"> <button className="btn btn-outline-light mr-4 col-md-2">View Blog</button></Link>
                    {/* <button className="btn btn-info">View Blog</button> */}
                </div>
            </div>
            <div className="container mt-5">
            
            <hr className="bgreen mt-5"/>
            <details className="green"> 
                <summary className="d-flex align-items-center">Is it Pesronal Blog?<span className="ml-auto"> &nabla;</span></summary>            
                 <p className="mt-3 text-light">Yes.. this my Pesronal site, where i share my expereince and knowlebge. </p>
                {/* <hr className="bgreen"/> */}
            </details>
            <hr className="bgreen "/>
            <details className="green"> 
                <summary className="d-flex align-items-center">Is it Pesronal Blog?<span className="ml-auto"> &nabla;</span></summary>            
                 <p className="mt-3 text-light">Yes.. this my Pesronal site, where i share my expereince and knowlebge. </p>
                <hr className="bgreen"/>
            </details>
            </div>
        </div>)
    }
}

export default Home
