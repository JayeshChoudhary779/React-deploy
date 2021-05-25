import React from 'react';
import {add,diff,prod} from "./calc"
function Calculator(){
    return (
    <ol style={{fontSize:"40px"}}>
        <li>sum is {add(4,40)}</li>
        <li>diff is {diff(4,40)}</li>
        <li>prod is {prod(4,40)}</li>
    </ol>
    )
}

export default Calculator;