import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import DispalyEmp from "./formikFieldArrayDisplayEmp";
import EmpForm from "./formikFieldArrayFormEmp";
class MainComponent extends Component {
    state = {
        employee: [
            {
                empId: 1,
                bills: [{ amount: 20, purpose: "Saving amount" }]
            },
            {
                empId: 2,
                bills: [{ amount: 15, purpose: "Credit amount" }]
            }
        ]
    }
    handleSubmitEmployee = (emp, index = "") => {
        const { employee } = this.state;
        let employee1 = [...employee];
        index ? employee1[+index] = emp : employee1.push(emp);
        this.setState({ employee: employee1 })
    }
    render() {
        let { employee } = this.state;
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/addNewEmp"
                        render={(props) => (<EmpForm {...props} employee={employee} onSubmit={this.handleSubmitEmployee} />)}
                    />
                    <Route
                        path="/emp/:index/edit"
                        render={(props) => (<EmpForm {...props} employee={employee} onSubmit={this.handleSubmitEmployee} />)}
                    />
                    <Route
                        path="/"
                        render={(props) => (<DispalyEmp {...props} employee={employee} />)}
                    />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;