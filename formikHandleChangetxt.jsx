import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

class FormikText extends Component {
    render() {
        return (
            <Formik initialValues={{ txt1: "txt1", txt2: "txt2" }}>
                {({ values, handleChange, handleBlur }) => (
                    <React.Fragment>
                        <Field name="txt1"
                            onChange={(e) => {
                                console.log(
                                    "onchange",
                                    e.currentTarget.name,
                                    e.currentTarget.value
                                )
                                values.txt2 = e.currentTarget.value;
                                handleChange(e);
                            }}
                        />
                        <Field name="txt2"
                            onChange={(e) => {
                                console.log(
                                    "onchange",
                                    e.currentTarget.name,
                                    e.currentTarget.value
                                )
                                values.txt1 = e.currentTarget.value;
                                handleChange(e);
                            }}
                        />
                    </React.Fragment>
                )}
            </Formik>
        )
    }
}
export default FormikText;