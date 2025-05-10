import React, {Component} from 'react';
import './ItemDetails.css';

export default class ItemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    updateItem() {
        const {itemId, getData} = this.props
        if (!itemId) {
            return
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item
                })
            })
    }

    render() {

        const {item} = this.state
        if (!item) {
            return <span className="h4">Select an item from a list</span>
        }

        const {name, image} = item

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image} alt="Item image"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
