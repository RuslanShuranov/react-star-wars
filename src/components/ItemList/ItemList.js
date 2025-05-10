import React from 'react';

import './ItemList.css';

const ItemList = (props) => {

    const { 
        data, 
        info, 
        onItemSelected, 
        onNextPage, 
        onPrevPage, 
        children: renderLabel 
    } = props;

    const items = data.map((item) => {
        const { id } = item;
        const label = renderLabel(item);

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return (
        <div>
            <ul className="item-list list-group">
                {items}
            </ul>
            {info && (
                <div className="pagination-controls d-flex justify-content-between align-items-center mt-3">
                    <button 
                        className="btn btn-secondary"
                        onClick={onPrevPage}
                        disabled={!info.prev}>
                        Previous
                    </button>
                    <span>Page {info.page} of {Math.ceil(info.total / info.limit)}</span>
                    <button 
                        className={"btn btn-secondary"}
                        onClick={onNextPage}
                        disabled={!info.next}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ItemList;
