import React from "react";

const category_78 = ({filterItems, categories }) => {
    console.log('categories',categories);
    return(
        <div className="btn-container">
            { categories.map((category, index) => {
                return(
                    <button key={index} type="button" className="filter-btn" onClick={() => filterItems(category) }>{category}</button>
                )
            }) }

      </div>
    )
}

export default category_78;