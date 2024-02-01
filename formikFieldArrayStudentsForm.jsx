import React, { Component } from "react";
import { Field, Form, FieldArray, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const validationNameItems = yup.object().shape({
    course: yup.string().required("Course is required"),
    students: yup.array().of(
        yup.object().shape({
            name: yup.string().required("Name is required").min(3, "Minimum 3 characters"),
            quiz1: yup.string().required("Quiz1 is required"),
            quiz2: yup.string().required("Quiz2 is required"),
        }),
    ).required("course are required").min(3, "Min 3 array")
})

class FieldArrayForm extends Component {
    render() {
        let { stud } = this.props;
        let { index } = this.props.match.params;
        let stu = index ? stud[+index] : {}

        let quiz01 = ["A", "B", "C", "D"]
        let quiz02 = ["A", "B", "C", "D"]

        return (
            <Formik initialValues={{
                course: stu.course || "",
                students: stu.students || []
            }}
                validationSchema={validationNameItems}
                onSubmit={(values) => {
                    this.props.onSubmit(values, index);
                    this.props.history.push("/");
                }}
            >
                {({ values, errors }) => (
                    <Form>
                        <h2>Details of Course List</h2>
                        <div className="form-group">
                            <label>Course</label>
                            <Field name="course" type="text" className="form-control" />
                            <div className="text-danger"><ErrorMessage name="course" /></div>
                        </div>
                        <FieldArray
                            name="students"
                            render={(arrayHelpers) => (
                                <div>
                                    {values.students.map((ele, index) => (
                                        <div className="row mb-2" key={index}>
                                            <div className="col-6">
                                                <Field name={`students[${index}].name`} type="text" placeholder="Enter name" className="form-control" />
                                            </div>
                                            <div className="col-2">
                                                <Field name={`students[${index}].quiz1`} as="select" values={quiz01} className="form-control">
                                                    <option value="">Select Quiz1</option>
                                                    {quiz01.map((option, optionIndex) => (
                                                        <option key={optionIndex} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Field>
                                            </div>
                                            <div className="col-2">
                                                <Field name={`students[${index}].quiz2`} as="select" values={quiz02} className="form-control">
                                                    <option value="">Select Quiz2</option>
                                                    {quiz01.map((option, optionIndex) => (
                                                        <option key={optionIndex} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Field>
                                            </div>
                                            {/* <div className="col-2">
                                                <Field name={`students[${index}].quiz1`} type="text" placeholder="Enter quiz1" className="form-control" />
                                            </div>
                                            <div className="col-2">
                                                <Field name={`students[${index}].quiz2`} type="text" placeholder="Enter quiz2" className="form-control" />
                                            </div> */}
                                            <div className="col-2 align-middle">
                                                <button type="button" className="btn btn-sm btn-warning mr-2" onClick={() => arrayHelpers.remove(index)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-success mb-2" onClick={() => arrayHelpers.push("")}>Add name to course List</button>
                                    <div className="text-danger">
                                        {typeof errors.students === "string" ? errors.students : errors.students ? errors.students.reduce((acc, curr) => (acc ? acc : curr ? curr.name || curr.quiz1 || curr.quiz2 : acc), "") : ""}
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