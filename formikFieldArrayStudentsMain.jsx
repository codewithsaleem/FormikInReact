import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import DispalyStud from "./formikFieldArrayStudentsDisplay";
import FieldArrayForm from "./formikFieldArrayStudentsForm";
class MainComponent extends Component {
    state = {
        stud: [
            {
                course: "Javascript",
                students: [{ name: "Jack", quiz1: "A", quiz2: "B" }, { name: "Sam", quiz1: "A", quiz2: "B" }, { name: "Bob", quiz1: "A", quiz2: "B" }]
            },
            {
                course: "React",
                students: [{ name: "David", quiz1: "A", quiz2: "B" }, { name: "Brevis", quiz1: "A", quiz2: "B" }, { name: "Kites", quiz1: "A", quiz2: "B" }]
            }
        ]
    }
    handleSubmitStud = (student, index = "") => {
        const { stud } = this.state;
        let stud1 = [...stud];
        index ? stud1[+index] = student : stud1.push(student);
        this.setState({ stud: stud1 })
    }
    render() {
        let { stud } = this.state;
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/addNewStud"
                        render={(props) => (<FieldArrayForm {...props} stud={stud} onSubmit={this.handleSubmitStud} />)}
                    />
                    <Route
                        path="/stud/:index/edit"
                        render={(props) => (<FieldArrayForm {...props} stud={stud} onSubmit={this.handleSubmitStud} />)}
                    />
                    <Route
                        path="/"
                        render={(props) => (<DispalyStud {...props} stud={stud} />)}
                    />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;