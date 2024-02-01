import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class FormikNum extends Component {
    handleNumberChanges = (e, values, handleChange) => {
        let { name, value } = e.currentTarget;
        switch (name) {
            case "num1": values.num2 = values.total - +value; break;
            case "num2": values.num1 = values.total - +value; break;
            case "total":
                values.num1 = +value / 2;
                values.num2 = +value / 2;
                break;
        }
        handleChange(e);
    }
    render() {
        return (
            <Formik initialValues={{ num1: 0, num2: 0, total: 0 }}>
                {({ values, handleChange }) => (
                    <React.Fragment>
                        <Field name="num1"
                            type="number"
                            onChange={(e) => { this.handleNumberChanges(e, values, handleChange) }}
                        />
                        <Field name="num2"
                            type="number"
                            onChange={(e) => { this.handleNumberChanges(e, values, handleChange) }}
                        />
                        <Field name="total"
                            type="number"
                            onChange={(e) => { this.handleNumberChanges(e, values, handleChange) }}
                        />
                    </React.Fragment>
                )}
            </Formik>
        )
    }
}
export default FormikNum;