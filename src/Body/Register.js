import{Component, state, sendUserData} from "react";
import axios from 'axios';

class Register extends Component{
    state = {
        fname : "",
        username : "",
        password : ""
    }

    sendUserData = (e) => {
        e.preventDefault();
        const data = {
            fname : this.state.fname,
            username : this.state.username,
            password : this.state.password
        }
        axios.post("http://localhost:90/customer/register", data)
        .then()
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.sendUserData}>
                    <p>First Name : <input type = "text" value = {this.state.fname} 
                    onChange = {(event)=>{this.setState({fname : event.target.value})}}/></p>
                    <p>Username : <input type = "text" value = {this.state.username}
                    onChange = {(event)=>{this.setState({username : event.target.value})}}/></p>
                    <p>Password : <input type = "text" value = {this.state.password}
                    onChange = {(event)=>{this.setState({password : event.target.value})}}/></p>

                    <p><input type = "submit" value = "SEND"/></p>
                </form>
            </div>
        )
    }
}
export default Register;