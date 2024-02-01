import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ShoppingList from "./formikFieldArrayShoppingList";
import FieldArrayForm from "./formikFieldArrayForm";
class MainComponent extends Component {
    state = {
        lists: [
            {
                name: "List1",
                items: [{ item: "Colgate", qty: 2 }, { item: "Pepsi", qty: 3 }, { item: "Maggi", qty: 5 }],
            },
            {
                name: "List2",
                items: [{ item: "Nutties", qty: 3 }, { item: "Coca Cola", qty: 1 }],
            },
        ]
    }
    handleSubmitList = (list, index = "") => {
        const { lists } = this.state;
        let lists1 = [...lists];
        index ? lists1[+index] = list : lists1.push(list);
        this.setState({ lists: lists1 })
    }

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route
                        path="/shoppingList/add"
                        render={(props) => (<FieldArrayForm {...props} lists={this.state.lists} onSubmit={this.handleSubmitList} />)}
                    />
                    <Route
                        path="/shoppingList/:index/edit"
                        render={(props) => (<FieldArrayForm {...props} lists={this.state.lists} onSubmit={this.handleSubmitList} />)}
                    />
                    <Route
                        path="/"
                        render={(props) => (<ShoppingList {...props} lists={this.state.lists} />)}
                    />
                </Switch>
            </div>
        )
    }

}
export default MainComponent;