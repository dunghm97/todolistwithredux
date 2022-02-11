import Todo from "./Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Row, Col, Input, Button, Select, Tag} from "antd";

// import {addTodo} from '../redux/actions'
import {todosRemainingSelector} from '../redux/selector'
import {v4 as uuidv4 } from 'uuid';
import todoSlice from "./TodosSlice";
function TodoList() {
    const dispatch = useDispatch()
    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')
    const todoList = useSelector(todosRemainingSelector)
    // const searchText = useSelector(searchTextSelector)
    const handleAddWork = () => {
        // dispatch(addTodo({
        //     id: uuidv4(),
        //     name: todoName,
        //     priority: priority,
        //     checked: false
        // }))

        //Redux toolkit
        dispatch(todoSlice.actions.addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            checked: false
        }))


        setTodoName('');
        setPriority('Medium');
    }
    return (
        <>
            <Row style={{height: 'calc(100% - 40px)'}}>
                <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                    {todoList.map(todo => {
                        return <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} priority={todo.priority} />
                    })}
                </Col>
                <Col span={24}>
                    <Input.Group style={{display: 'flex'}} compact>
                        <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                        <Select defaultValue="Medium" value={priority} onChange={(e) => setPriority(e)}>
                            <Select.Option value="High" label="High">
                                <Tag color="red">High</Tag>
                            </Select.Option>
                            <Select.Option value="Medium" label="Medium">
                                <Tag color="blue">Medium</Tag>
                            </Select.Option>
                            <Select.Option value="Low" label="Low">
                                <Tag color="gray">Low</Tag>
                            </Select.Option>
                        </Select>
                        <Button type="primary" onClick={handleAddWork}>Add</Button>
                    </Input.Group>
                </Col>
            </Row>
        </>
    )
}

export default TodoList;