import React, { Component } from "react";
import { Field, Formik, Form, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

const validationEmployee = yup.object().shape({
    empId: yup.number("Must be number").required("Number is required").min(1, "Minimum 1").max(100, "Max 100"),
    bills: yup.array().of(
        yup.object().shape({
            amount: yup.number("Amount must be number").required("Amount is required").integer("Any integer"),
            purpose: yup.string("String").required("Purpose is required").min(5, "Minimum 5 characters is required")
        })
    )
})

class EmpForm extends Component {
    render() {
        const { employee } = this.props;
        const { index } = this.props.match.params;
        let emp = index ? employee[+index] : {};

        return (
            <Formik initialValues={{
                empId: emp.empId || "",
                bills: emp.bills || [],
            }}
                validationSchema={validationEmployee}
                onSubmit={(values) => {
                    this.props.onSubmit(values);
                    this.props.history.push("/");
                }}
            >
                {({ values, errors }) => (
                    <Form>
                        <div className="form-group">
                            <label>EmpId</label>
                            <Field name="empId" type="number" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="empId"/></div>
                        </div>
                        <FieldArray
                            name="bills"
                            render={(arrayHelpers) => (
                                <div>
                                    {values.bills.map((ele, index) => (
                                        <div className="row mb-2" key={index}>
                                            <div className="col-7">
                                                <Field name={`bills[${index}].amount`} type="number" placeholder="Enter amount" className="form-control" />
                                            </div>
                                            <div className="col-2">
                                                <Field name={`bills[${index}].purpose`} type="text" placeholder="Enter purpose" className="form-control" />
                                            </div>
                                            <div className="col-2 align-middle">
                                                <button type="button" className="btn btn-sm btn-warning mr-2" onClick={() => arrayHelpers.remove(index)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-success mb-2" onClick={() => arrayHelpers.push("")}>Add amount and purpose</button>
                                    <div className="text-danger">
                                        {typeof errors.bills === "string" ? errors.bills : errors.bills ? errors.bills.reduce((acc, curr) => (acc ? acc : curr ? curr.amount || curr.purpose : acc), "") : ""}
                                    </div>
                                </div>
                            )}
                        />
                        <div className="form-group">
                            <button className="btn btn-primary mr-2" type="submit">{index ? "Update" : "Add"}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}
export default EmpForm;