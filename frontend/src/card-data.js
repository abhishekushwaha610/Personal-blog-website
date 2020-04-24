
import React, { Component } from 'react'
import Blogservice from './Blogservice'

const blogservice = new Blogservice();
export default class DetailBlog extends Component {
    constructor(props){
        super(props)
        
        this.state = {data:[]}
        this.fetch = this.fetch.bind(this)
    }
    componentWillMount(){
        this.fetch()
    }
    fetch(){
        console.log(this.props.id)
        blogservice.getBlog(this.props.id).then(promise => {
            const data = promise;
            this.setState({data:data})
            console.log(data)
        
        })
    }
    render() {
        return (
            <div className="card Fira black green">
                <div className="card-header line">{this.state.data.tag}</div>
                <div className="card-body">
                    <h3>{this.state.data.title}</h3>
                    {this.state.data.description}
                </div>
                <div className="card-footer text-muted">{this.state.data.time}</div>
            </div>
        )
    }
}


