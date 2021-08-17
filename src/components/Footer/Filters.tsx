import React, {useState} from "react";

import * as constants from "../../utils/constants"
import {connect} from "react-redux";

interface FilterPropsType {
    changeShowContent:(filterType:string)=>void

}

const Filters = ({changeShowContent}:FilterPropsType) => {
    const[filterType,setFilterType]=useState('All')

    const handleClick = (filterType:string) => {
    changeShowContent(filterType)
        setFilterType(filterType)
    }

    return (
        <ul className='filters'>
            {Object.keys(constants.FILTERS_TYPES).map((key) => (
                <li key={key}>
                    <a href={'#/'} className={filterType === key ? 'selected' : 'display:none'}
                       onClick={() => handleClick(key)}
                    >
                        {key}
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default Filters
