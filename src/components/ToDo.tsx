import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { FaCheck } from "react-icons/fa";

function ToDo() {
    return (
        <div style={{ alignItems: 'center', justifyContent: 'space-between ', flexDirection: 'row', display: 'flex ', border: '1px solid lightgrey', padding: '16px', marginTop: '25px', borderRadius: '5px' }}>
            <div>
                <p>Bu ilk todo</p>
            </div>
            <div>
                <TiDeleteOutline />
                <FaCheck />

            </div>
        </div>
    )
}

export default ToDo