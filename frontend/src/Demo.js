import React,{Component} from 'react' ;
import ReactDom from 'react-dom';
import 'tachyons'
class Demo extends Component{
    render(){
        return <div>
                <h1 className="tc shadow-4  grow">Hello  {this.props.name}</h1>
                <p>Heiuwhiuwh :)</p>
            </div>
        
    }
}
// function Demo(props) {
//     return (
//         <div>
//             <h1>Hello woels {props.name}</h1>
//         </div>
//     );
// }
export default Demo