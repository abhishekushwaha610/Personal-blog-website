import React,{Component} from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import Postservice from "./Postservice";

const postservice = new Postservice();

class Post extends Component{
    constructor(){
        super()
        this.state = {posts:[],data: 'none'}
        this.fetch = this.fetch.bind(this)
    }
    componentWillMount() {
        this.loadBlog(); 
        this.fetch() 
    }
    
    async loadBlog(){
        postservice.getAllPost().then(promise =>{
            this.setState({posts:promise});
        })
    }
    fetch(slug){
        if (!slug){slug = this.props.match.params.slug}else{
            const val  = document.getElementById("progress");
            val.style.display = "flex";
        
        }
        postservice.getPost(slug).then(promise => {
            const data = promise;
            this.setState({data:data})
            this.hide()
            document.title = data.title
        })
    }
        hide(){
            const val  = document.getElementById("progress");
            val.style.display = "none"}

    render(){
        return(
            <div className="black m-0 pt-4 jumbotron">
                <Navbar blog={"line"}/>
                <p className="bgreen p-2 b mb-0 rounded  text-danger">post/{this.state.data.title}</p>
                <div className="progress" id= "progress" style={{display:"none"}}>
                    <div className="progress-bar black progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                </div>    
                
                <div className="col-md-11 mt-5 ">
                    <div className="card-deck">
                        <div className="card col-md-3 black green  px-0">
                            <h5 className="card-header line Fira white"><b>List of Content</b></h5>
                
                            {this.state.posts.map(value => (
                                <Link to={`/${value.slug}`} onClick={() => (this.fetch(value.slug)) } className="list-group-item list-group-item-action black green Fira">{value.title}</Link>
                            ))}
                        </div>
                        <div className="card Fira black green">
                            <div className="card-header line">{this.state.data.tag}</div>
                            <div className="card-body">
                                <h3>{this.state.data.title}</h3>
                                
                                <span className="tl" dangerouslySetInnerHTML={{__html: this.state.data.description}} />
                            </div>
                            <div className="card-footer text-muted">{this.state.data.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post