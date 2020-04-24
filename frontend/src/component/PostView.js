
// import React, { Component } from 'react'
// import Postservice from './Postservice'

// const postservice = new Postservice();

// function updateDetail(slug){
//     postservice.getPost(slug).then(promise => {
//     const data = promise;
//     console.log(data)
//     this.setState({data:data})
//     });
// }
// export {updateDetail};

// export default class DetailBlog extends Component {
//     constructor(props){
//         super(props)
        
//         this.state = {data:[]}
//         this.fetch = this.fetch.bind(this)
//         updateDetail = updateDetail.bind(this)
//     }
//     componentWillMount(){
//         this.fetch()
//     }
//     fetch(){
//         // console.log(this.props.id)
//         postservice.getPost(this.props.slug).then(promise => {
//             const data = promise;
//             this.setState({data:data})
//             // console.log(data)
        
//         })
//     }
//     render() {
//         return (
//             <div className="card Fira black green">
//                 <div className="card-header line">{this.state.data.tag}</div>
//                 <div className="card-body">
//                     <h3>{this.state.data.title}</h3>
//                     {this.state.data.description}
//                 </div>
//                 <div className="card-footer text-muted">{this.state.data.time}</div>
//             </div>
//         )
//     }
// }


