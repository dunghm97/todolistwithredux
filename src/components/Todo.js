import {Row, Tag, Checkbox} from "antd";

import { useState } from "react";    

import {useDispatch} from 'react-redux';

import todoSlice from "./TodosSlice";
// import {toggleTodoStatus} from "../redux/actions"

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'Gray'
}

function Todo({id, name, priority, completed}) {
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch();
    const toggleCheckbox = () => {
        setChecked(!checked)
        //dispatch(toggleTodoStatus(id))

        //redux toolkit
        dispatch(todoSlice.actions.toggleTodoStatus(id))
    }
    return (
        <>
            <Row 
                justify='space-between' 
                style={{
                    marginBottom: 3, ...(checked ? {opacity: 0.5, textDecoration: 'line-through'} : {})
                }}
            >
                <Checkbox checked={checked} onChange={toggleCheckbox}>
                    {name}
                </Checkbox>
                <Tag color={priorityColorMapping[priority]} style={{margin: 0}}>
                    {priority}
                </Tag>
            </Row>
        </>
    )
}

export default Todo;