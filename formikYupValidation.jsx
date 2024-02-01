import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const validationCompany = yup.object().shape({
    companyName: yup.string().required("Company name is mandatory").min(4, "companyName is a string with at least 4 characters"),
    email: yup.string().required("Email is mandatory").email("Email is a string of type email"),
    website: yup.string().required("Website is mandatory").url("Invalid website URL"),
    city: yup.array().required("City is mandatory").min(1, "Should have at least 1 value"),
    country: yup.string().required("Country is mandatory").min(3, "Country should have at least 3 characters")
});

class YupValidationForm extends Component {
    render() {
        return (
            <Formik initialValues={{
                companyName: "",
                email: "",
                website: "",
                city: "",
                country: ""
            }}
                validationSchema={validationCompany}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label>Company Name</label>
                            <Field name="companyName" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="companyName" /></div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <Field name="email" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="email" /></div>
                        </div>
                        <div className="form-group">
                            <label>Website</label>
                            <Field name="website" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="website" /></div>
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <Field name="city" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="city" /></div>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <Field name="country" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="country" /></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}
export default YupValidationForm;