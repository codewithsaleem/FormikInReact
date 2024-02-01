import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DelieveryForm from "./formikDelieveryForm";
import DisplayDetails from "./formikDelieveryDetails";
class MainComponent extends Component {
    state = {
        persons: [
            { name: "Amit", gender: "Male", delievery: "Office", payment: ["Credit Card", "Debit Card"], slot: "2PM-6PM" },
            { name: "Rohan", gender: "Male", delievery: "Home", payment: ["Saving Card", "Debit Card"], slot: "Before 10AM" },
            { name: "Pooja", gender: "Female", delievery: "Pickup", payment: ["Credit Card"], slot: "2PM-6PM" },
        ]
    }
    handleSubmit = (person, index) => {
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
                        path="/delievery/add"
                        render={(props) => (<DelieveryForm {...props} onSubmit={this.handleSubmit} />)}
                    />

                    <Route
                        path="/delievery/:index/edit"
                        render={(props) => (<DelieveryForm {...props} persons={this.state.persons} onSubmit={this.handleSubmit} />)}
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