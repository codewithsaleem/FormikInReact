import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import FormikText from "./formikHandleChangetxt";
import FormikNum from "./formikNum1Num2Total";
import FormikCountry from "./formikHandleChangeCountry";
import YupValidationForm from "./formikYupValidation";
class MainComponent extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/"
                        render={(props) => (<FormikCountry {...props} />)}
                    />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;