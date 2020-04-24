import React, { Component } from 'react';
import PostCard from "./PostCard"
import Navbar from './Navbar';


class Blog extends Component{
    componentDidMount(){
        document.title = "Blog | Abhishek"
    }
    render(){
        return (
            <div className="black m-0 pt-4 jumbotron">
            <Navbar blog={"line"}/>

                <div className="container ">
                    <h2 className="green line mb-5" align="center">Some Blog</h2>
                    <div className="card-columns">
                    <PostCard/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog 