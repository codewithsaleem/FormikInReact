import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationDelievery = yup.object().shape({
    name: yup.string().required("Name is required...").min(5, "Name should have at least 5 characters"),
    gender: yup.string().required("Gender is required..."),
    delievery: yup.string().required("Delievery option is required..."),
    payment: yup.array().required("Payment is required...").min(1, "Choose at least 1 payment").max(2, "Not more than 2 payment selected"),
    slot: yup.string().required("Select slot...")
})

// const deliveryValidate = (values) => {
//     let errors = {};
//     if (!values.name) errors.name = "Name is required";
//     else if (values.name.length < 5) errors.name = "Name should have at least 5 characters"
//     if (!values.gender) errors.gender = "Gender is required";
//     if (!values.delievery) errors.delievery = "Delievery Option is required";
//     if (values.payment.length === 0) errors.payment = "Choose at least 1 payment";
//     else if (values.payment.length > 2) errors.payment = "Not more than 2 payment selected";
//     if (!values.slot) errors.slot = "Select slot";
//     return errors;
// }

class DelieveryForm extends Component {
    state = {
        delieverySlot: ["10AM-2PM", "2PM-6PM", "6PM-10PM", "Before 10AM"],
        genderAll: ["Male", "Female"],
        delieveryLocation: ["Home", "Office", "Pickup"],
        paymentOptions: ["Credit Card", "Debit Card", "Saving Card"]
    }
    render() {
        const { persons } = this.props;
        const { index } = this.props.match.params;
        let person = index ? persons[+index] : {};
        console.log(person)

        let { delieverySlot, genderAll, delieveryLocation, paymentOptions } = this.state;
        let delieverySlot1 = delieverySlot.map((c1) => ({ value: c1, display: c1 }))
        delieverySlot1.unshift({ value: "", display: "Select the Slot" })
        return (
            <Formik initialValues={{
                name: person.name || "",
                gender: person.gender || "",
                delievery: person.delievery || "",
                payment: person.payment || [],
                slot: person.slot || "",
            }}
                // validate={deliveryValidate}
                validationSchema={validationDelievery}
                onSubmit={(values) => {
                    this.props.onSubmit(values, index);
                    this.props.history.push("/")
                }}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label>Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="name" /></div>
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">Gender</label>
                            {genderAll.map((ele, index) => (
                                <div className="form-check form-check-inline" key={index}>
                                    <Field name="gender" type="radio" value={ele} className="form-check-input">
                                    </Field>
                                    <label className="form-check-label">{ele}</label>
                                </div>
                            ))}
                            <div className="text-danger"><ErrorMessage name="gender" /></div>
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">Delivery Location</label>
                            {delieveryLocation.map((ele, index) => (
                                <div className="form-check form-check-inline" key={index}>
                                    <Field name="delievery" type="radio" value={ele} className="form-check-input">
                                    </Field>
                                    <label className="form-check-label">{ele}</label>
                                </div>
                            ))}
                            <div className="text-danger"><ErrorMessage name="delievery" /></div>
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">Payment Options</label>
                            {paymentOptions.map((ele, index) => (
                                <div className="form-check " key={index}>
                                    <Field name="payment" type="checkbox" value={ele} className="form-check-input">
                                    </Field>
                                    <label className="form-check-label">{ele}</label>
                                </div>
                            ))}
                            <div className="text-danger"><ErrorMessage name="payment" /></div>
                        </div>
                        <div className="form-group">
                            <label>Delievery Slot</label>
                            <Field name="slot" as="select" className="form-control">
                                {delieverySlot1.map((c1) => <option value={c1.value} key={c1.display}>{c1.display}</option>)}
                            </Field>
                            <div className="text-danger"><ErrorMessage name="slot" /></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        </div>
                    </Form>
                )}

            </Formik>
        )
    }
}
export default DelieveryForm;