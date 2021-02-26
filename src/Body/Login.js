import{Component, state, getUserData} from "react";
import axios from 'axios';

class Login extends Component{
    state = {
        username : "",
        password : ""
    }

    getUserData = (e) => {
        e.preventDefault();
        const data = {
            username : this.state.username,
            password : this.state.password
        }
        axios.post("http://localhost:90/customer/login", data)
        .then(response=>{
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.getUserData}>
                    <p>Username : <input type = "text" value = {this.state.username}
                    onChange = {(event)=>{this.setState({username : event.target.value})}}/></p>
                    <p>Password : <input type = "password" value = {this.state.password}
                    onChange = {(event)=>{this.setState({password : event.target.value})}}/></p>

                    <p><input type = "submit" value = "Login"/></p>
                </form>
            </div>
        )
    }
}
export default Login;