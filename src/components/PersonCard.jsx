import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
            
        }
    }

    age = () => {
        this.setState({ 
            age: this.state.age + 1
        })
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        console.log(this.props.age)
        return(
            <div>
                <fieldset>
                <h1>{lastName}, {firstName}</h1>
                Age: {this.state.age}
                <br />
                Hair Color:{hairColor}
                <br />
                <button onClick={() => {this.age()} }>click me</button>
                <br />
                
                </fieldset>
            </div>
        );
    }
}

export default PersonCard;