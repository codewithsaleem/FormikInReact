import React, { Component } from "react";
class DisplayDetails extends Component {
    addPerson = () => {
        this.props.history.push("/persons/add");
    }
    handleEditPerson = (index) => {
        this.props.history.push(`/persons/${index}/edit`);
    }
    render() {
        let { persons } = this.props;
        return (
            <React.Fragment>
                <h2>Details of persons</h2>
                {persons.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-2 border">{ele.name}</div>
                        <div className="col-2 border">{ele.age}</div>
                        <div className="col-2 border">{ele.country}</div>
                        <div className="col-2 border">{ele.tech.join(",")}</div>
                        <div className="col-2 border">{ele.currentStatus}</div>
                        <div className="col-2 border">
                            <button className="btn btn-warning m-1" onClick={() => this.handleEditPerson(index)}>Edit</button>
                        </div>
                    </div>
                ))}

                <button className="btn btn-primary mt-3" onClick={() => this.addPerson()}>Add New Person</button>
            </React.Fragment>
        )
    }
}
export default DisplayDetails;