import React, { Component } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";

class FormikCountry extends Component {
    state = {
        locs: [
            {
                country: "India",
                cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"],
            },
            {
                country: "USA",
                cities: ["Los Angeles", "Chicago", "New York", "Seattle"],
            },
            {
                country: "France",
                cities: ["Paris", "Nice", "Lyon", "Cannes"],
            },
            {
                country: "Japan",
                cities: ["Tokyo", "Kyoto"],
            },
            {
                country: "China",
                cities: ["Shanghai", "Beijing", "Shenzen"],
            },
        ],
    };

    render() {
        const { locs } = this.state;

        return (
            <Formik initialValues={{ country: "", city: "" }}>
                {({ values, handleChange }) => (
                    <Form>
                        <div className="form-group">
                            <label>Country</label>
                            <Field
                                name="country"
                                as="select"
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option value="">Choose Country</option>
                                {locs.map((loc) => (
                                    <option value={loc.country} key={loc.country}>
                                        {loc.country}
                                    </option>
                                ))}
                            </Field>
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <Field
                                name="city"
                                as="select"
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option value="">Choose City</option>
                                {locs.find((loc) => loc.country === values.country)
                                    ?.cities.map((city) => (
                                        <option value={city} key={city}>
                                            {city}
                                        </option>
                                    ))}
                            </Field>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                )}
            </Formik>
        );
    }
}

export default FormikCountry;
