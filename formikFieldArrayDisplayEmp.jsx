import React, { Component } from "react";
class DispalyEmp extends Component {
    handleAddNewEmp = () => {
        this.props.history.push("/addNewEmp")
    }
    handleEdit = (index) => {
        this.props.history.push(`/emp/${index}/edit`)
    }
    render() {
        let { employee } = this.props;
        return (
            <div className="container">
                <h2>Display the details</h2>
                {employee.map((l1, index) => (
                    <div className="row border" key={index}>
                        <div className="col-2">{l1.empId}</div>
                        <div className="col-6">
                            {l1.bills.map((l2, index) => `${l2.amount} - ${l2.purpose}`).join(",")}
                        </div>
                        <div className="col-4">
                            <button className="btn btn-sm btn-warning m-1" onClick={() => this.handleEdit(index)}>Edit</button>
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary mt-2" onClick={() => this.handleAddNewEmp()}>Add New employee</button>
            </div>
        )
    }
}
export default DispalyEmp;