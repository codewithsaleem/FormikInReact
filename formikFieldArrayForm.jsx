import React, { Component } from "react";
import { Field, Form, FieldArray, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const validationNameItems = yup.object().shape({
    name: yup.string().required("Name is required"),
    items: yup.array().of(
        yup.object().shape({
            item: yup.string().required("Product name is required").min(3, "Product name is too short"),
            qty: yup.number("Qty must be integer").required("Qty is required").integer("Must be number").min(1, "Minimum 1 qty"),
        }),
    ).required("Items are required").min(2, "Min 2 array in the shopping List")
})

class FieldArrayForm extends Component {
    render() {
        let { lists } = this.props;
        let { index } = this.props.match.params;
        let list = index ? lists[+index] : {}
        return (
            <Formik initialValues={{
                name: list.name || "",
                items: list.items || []
            }}
                validationSchema={validationNameItems}
                onSubmit={(values) => {
                    this.props.onSubmit(values, index);
                    this.props.history.push("/");
                }}
            >
                {({ values, errors }) => (
                    <Form>
                        <h2>Details of Shopping List</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="name" /></div>
                        </div>
                        <FieldArray
                            name="items"
                            render={(arrayHelpers) => (
                                <div>
                                    {values.items.map((ele, index) => (
                                        <div className="row mb-2" key={index}>
                                            <div className="col-7">
                                                <Field name={`items[${index}].item`} type="text" placeholder="Enter product name" className="form-control" />
                                            </div>
                                            <div className="col-2">
                                                <Field name={`items[${index}].qty`} type="text" placeholder="Quantiy" className="form-control" />
                                            </div>
                                            <div className="col-2 align-middle">
                                                <button type="button" className="btn btn-sm btn-warning mr-2" onClick={() => arrayHelpers.remove(index)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-success mb-2" onClick={() => arrayHelpers.push("")}>Add item to Shopping List</button>
                                    <div className="text-danger">
                                        {typeof errors.items === "string" ? errors.items : errors.items ? errors.items.reduce((acc, curr) => (acc ? acc : curr ? curr.item || curr.qty : acc), "") : ""}
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
export default FieldArrayForm;