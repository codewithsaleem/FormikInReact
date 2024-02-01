import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const personValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required...").min(6, "Name should have minimum 6 characters"),
    age: yup.number().typeError("Age should be a number...").required("Age is required").min(0, "Age can not be less than 0").max(100, "Age can not be greater than 100"),
    country: yup.string().required("Country is required..."),
    tech: yup.array().min(1, "Choose at least 1 technology..."),
    currentStatus: yup.string().required("Current Status is required..."),
})

// const personValidate = (values) => {
//     const errors = {};
//     if (!values.name) errors.name = "Name is required";
//     else if (values.name.length < 6) errors.name = "Name should have minimum 6 characters";
//     if (!values.age) errors.age = "Age is required";
//     else if (isNaN(+values.age)) errors.age = "Age should be a number";
//     else if (+values.age < 0) errors.age = "Age can not be less than 0";
//     else if (+values.age > 100) errors.age = "Age can not be greater than 100";
//     if (!values.country) errors.country = "Country is required";
//     if (values.tech.length === 0) errors.tech = "Choose at least 1 technology";
//     if (!values.currentStatus) errors.currentStatus = "Current Status is required";
//     return errors;
// }

class PersonForm extends Component {
    state = {
        countries: ["USA", "France", "Canada", "India", "England", ""],
        technologies: ["Javascript", "React", "Angular", "Node.js"],
        currentStatuses: ["Student", "Working", "Looking for a job"]
    }
    render() {
        const { persons } = this.props;
        const { index } = this.props.match.params;

        let person = index ? persons[+index] : {};
        const { countries, technologies, currentStatuses } = this.state;
        let countries1 = countries.map((c1) => ({ value: c1, display: c1 }))
        countries1.unshift({ value: "", display: "Select the country" })
        return (
            <Formik initialValues={{
                name: person.name || "",
                age: person.age || "",
                country: person.country || "",
                tech: person.tech || [],
                currentStatus: person.currentStatus || ""
            }}
                // validate={personValidate}
                validationSchema={personValidationSchema}
                onSubmit={(value) => {
                    this.props.onSubmit(value, index);
                    this.props.history.push("/");
                }}>
                {() => (
                    <Form>
                        <h2>Details of the person</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="name" /></div>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <Field name="age" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="age" /></div>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <Field name="country" as="select" className="form-control">
                                {countries1.map((c1) => <option value={c1.value} key={c1.display}>{c1.display}</option>)}
                            </Field>
                            <div className="text-danger"><ErrorMessage name="country" /></div>
                        </div>
                        <div className="form-group">
                            <label className="m-0 pr-3">Technologies known</label>
                            {technologies.map((ele, index) => (
                                <div className="form-check form-check-inline" key={index}>
                                    <Field name="tech" type="checkbox" value={ele} className="form-check-input">
                                    </Field>
                                    <label className="form-check-label">{ele}</label>
                                </div>
                            ))}
                            <div className="text-danger"><ErrorMessage name="tech" /></div>
                        </div>
                        <div className="form-group">
                            <label className="m-0 pr-3">Current Status</label>
                            {currentStatuses.map((ele, index) => (
                                <div className="form-check form-check-inline" key={index}>
                                    <Field name="currentStatus" type="radio" value={ele} className="form-check-input">
                                    </Field>
                                    <label className="form-check-label">{ele}</label>
                                </div>
                            ))}
                            <div className="text-danger"><ErrorMessage name="currentStatus" /></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">{index ? "Update Details" : "Add"}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}
export default PersonForm;