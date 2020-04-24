import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Feedback extends Component {
    componentDidMount(){
        document.title = "Feedback | Abhishek"
        const msg = document.getElementById("massgage");
        if(msg){document.getElementById("msg").innerHTML = msg.innerHTML;}
    }
    
    submitted(){
        document.getElementById("submitButton").style.display = "none";
        document.getElementById("submitLoading").style.display = "block";
    }
    render() {
        return (
            <div className="jumbotron black pt-4 mb-0">
            <Navbar feedback={"line"}/>
            <div className="bgreen p-3 f-4" id="msg"><b>Your Feedback is valuable for me.</b> </div>
                <div className="card Fira black container col-md-3 px-0 mt-4">
                    <div className="card-header Fira green">Feedback</div>
                    <div className="card-body">
                        <form className="form-group"  onSubmit = {this.submitted} action="/sending/" method="POST">
                            <input type="text" id= "name" name="name" className="form-control black Fira green mt-4" placeholder="name or email" required />
                            <textarea id="desc" name= "desc" className="form-control black Fira green my-4" placeholder= "Write" rows="5" required></textarea>
                            <button type="submit my-5" className="btn Fira bgreen col-md-12 mt-4 justify-content-center d-flex">
                                <span id="submitButton">Submit</span>
                                <div id="submitLoading" class="spinner-border " role="status" style={{display:'none'}}>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </button>
                        </form>
                    </div>
                    
                </div>

            </div>
        )
    }
}
