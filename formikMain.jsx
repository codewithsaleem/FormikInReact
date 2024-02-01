import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DisplayDetails from "./formikDisplayDetails";
import PersonForm from "./formikPersonForm";
class MainComponent extends Component {
    state = {
        persons: [
            { name: "Brad Williams", age: 24, country: "USA", tech: ["Javascript", "React"], currentStatus: "Student" },
            { name: "Anna Smith", age: 22, country: "Canada", tech: ["Javascript", "React", "Node.js"], currentStatus: "Working" },
        ]
    }
    handleSubmitPerson = (person, index) => {
        const { persons } = this.state;
        let person1 = [...persons];
        index ? person1[+index] = person : person1.push(person);
        this.setState({ persons: person1 })
    }
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/persons/add"
                        render={(props) => (<PersonForm {...props} onSubmit={this.handleSubmitPerson} />)}
                    />
                     <Route
                        path="/persons/:index/edit"
                        render={(props) => (<PersonForm {...props} persons={this.state.persons} onSubmit={this.handleSubmitPerson} />)}
                    />
                    <Route
                        path="/"
                        render={(props) => (<DisplayDetails {...props} persons={this.state.persons} />)}
                    />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;