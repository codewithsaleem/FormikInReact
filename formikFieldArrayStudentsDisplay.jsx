import React, { Component } from "react";
class DispalyStud extends Component {
    handleAddNewStud = () => {
        this.props.history.push("/addNewStud")
    }
    handleEdit = (index) => {
        this.props.history.push(`/stud/${index}/edit`)
    }
    render() {
        let { stud } = this.props;
        return (
            <div className="container">
                <h2>Display the details</h2>
                {stud.map((l1, index) => (
                    <div className="row border" key={index}>
                        <div className="col-2 border">{l1.course}</div>
                        <div className="col-6 border">
                            {l1.students.map((l2, index) => `${l2.name} - ${l2.quiz1}-${l2.quiz2}`).join(",")}
                        </div>
                        <div className="col-4 border">
                            <button className="btn btn-sm btn-warning m-1" onClick={() => this.handleEdit(index)}>Edit</button>
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary mt-2" onClick={() => this.handleAddNewStud()}>Add New Students</button>
            </div>
        )
    }
}
export default DispalyStud;