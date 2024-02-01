import React, { Component } from "react";
class DisplayDetails extends Component {
    addPerson = () => {
        this.props.history.push("/delievery/add");
    }
    handleEditPerson = (index) => {
        this.props.history.push(`/delievery/${index}/edit`);
    }
    render() {
        let { persons } = this.props;
        return (
            <React.Fragment>
                <h2>Details of delievery</h2>
                <div className="row bg-dark text-white">
                        <div className="col-2 border">Name</div>
                        <div className="col-2 border">Gender</div>
                        <div className="col-2 border">Delievery</div>
                        <div className="col-2 border">Payments</div>
                        <div className="col-2 border">Slot</div>
                        <div className="col-2 border">
            
                        </div>
                    </div>
                {persons.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-2 border">{ele.name}</div>
                        <div className="col-2 border">{ele.gender}</div>
                        <div className="col-2 border">{ele.delievery}</div>
                        <div className="col-2 border">{ele.payment.join(",")}</div>
                        <div className="col-2 border">{ele.slot}</div>
                        <div className="col-2 border">
                            <button className="btn btn-warning m-1" onClick={() => this.handleEditPerson(index)}>Edit</button>
                        </div>
                    </div>
                ))}

                <button className="btn btn-primary mt-3" onClick={() => this.addPerson()}>Add New Delievery</button>
            </React.Fragment>
        )
    }
}
export default DisplayDetails;