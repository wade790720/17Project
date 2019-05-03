import "../src/assets/style.sass"
import React, { createElement } from 'react';
import ReactDOM from "react-dom";
import Button from "components/Button";
import Card from "components/Card";
import Dialogs from "components/Dialogs";
import { uniqueKey } from "utils/uniqueKey";
const style = {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
};

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: "",
            orders: [],
            dialogsToggle: false
        }
    }

    clickCard = (id) => {
        this.setState({ currentId: id });
        this.toogleDialogs();
    }

    toogleDialogs = () => {
        this.setState({ dialogsToggle: !this.state.dialogsToggle });
    }

    add = () => {
        this.setState({ currentId: "" });
        this.toogleDialogs();
    }

    addNewOrder = (newOrder) => {
        const id = uniqueKey();
        this.setState({
            orders: [
                ...this.state.orders,
                {
                    ...newOrder,
                    id: uniqueKey()
                }
            ]
        });
        localStorage.setItem(id, JSON.stringify(newOrder.items));
    }

    updateCardInfo = (newOrder) => {
        this.setState({
            orders: this.state.orders.map(order => (order.id === newOrder.id ? newOrder : order)),
        });
        localStorage.setItem(newOrder.id, JSON.stringify(newOrder.items));
    }

    handeleSave = order => {
        if (order.id === '') {
            this.addNewOrder(order);
        } else {
            this.updateCardInfo(order);
        }
        this.toogleDialogs();
    };

    render() {
        const { currentId, orders, dialogsToggle } = this.state;
        return (
            <article>
                <h1 className="main-title">Daily Drinks</h1>
                <main>
                    <div className="card-list">
                        {orders.map((order, inx) =>
                            <Card
                                key={order.id}
                                index={inx}
                                order={order}
                                onClick={() => this.clickCard(order.id)}
                            />
                        )}
                    </div>
                </main>
                {dialogsToggle &&
                    createElement(Dialogs, {
                        onSave: this.handeleSave,
                        onCancel: this.toogleDialogs,
                        ...currentId && { order: orders.filter(order => order.id === this.state.currentId)[0] }
                    })
                }
                <Button circle={true} style={style} onClick={this.add} />
            </article>
        );
    }
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);