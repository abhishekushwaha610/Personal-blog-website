import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Post from './Post';
// import axios from "axios";
import Postservice from './Postservice'

const postservice = new Postservice();

class PostCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
        blog:[],
    };
    this.allcards = this.allcards.bind(this);
    this.loadBlog = this.loadBlog.bind(this);
      }  
      
        componentWillMount() {
              this.loadBlog();
            }
          
            async loadBlog()
            {
        //   const promise = await axios.get("http://localhost:8000/api/blog/");
            postservice.getAllPost().then(promise => {
                // console.log(promise)
                const data = promise;
                this.setState({blog:data});
            })
                        
        }
        allcards() {
            const item = [];
            this.state.blog.map((value,index)=>{
                // console.log(index+" "+value.title);
                
                item.push(
                    <Link to={`/${value.id}`} className="card text-decoration-none green px-0 Fira black grow">
                    <div className="card-header line">{value.tag}</div>
                    <div className="card-body">
                        <h5 className="card-title">{value.title}df</h5>
                        <p>{value.descripition}</p>
                        <small className="text-muted">{value.time}</small>
                    </div>
                    <div className="card-footer Fira"></div>
                </Link>
            );
        })
        
        return item;
    }

    render(){
        return <this.allcards/>;
    }
}
    // function post_name(){
        //     let {slug} = useParams();
        //     return(
            //       <Post slug={slug}/>
            //     )
//   }

export default PostCard