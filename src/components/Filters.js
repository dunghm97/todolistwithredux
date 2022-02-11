import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
// import { searchFilterChange, statusFilterChange, priorityFilterChange } from '../redux/actions';
import filtersSlice from './FiltersSlice'

const {Search} = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('All')
    const [priority, setPriority] = useState([])
    const handleSearchText = (e) => {
        setSearch(e.target.value)
        //dispatch(searchFilterChange(e.target.value))

        //Redux toolkit
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value))
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        //dispatch(statusFilterChange(e.target.value))

        //Redux toolkit
        dispatch(filtersSlice.actions.statusFilterChange(e.target.value))
    }
    const handlePriorityChange = (priority) => {
        setPriority(priority)
        //dispatch(priorityFilterChange(priority))

        //Redux toolkit
        dispatch(filtersSlice.actions.priorityFilterChange(priority))
    }
    return (
        <>
            <Row justify='center'>
                <Col span={24}>
                    <Typography.Paragraph style={{fontWeight: 'bold', marginBottom:3, marginTop: 10}}>
                        Search
                    </Typography.Paragraph>
                    <Search value={search} placeholder="Input search text..." onChange={handleSearchText} />
                </Col>
                <Col sm={24}>
                    <Typography.Paragraph style={{fontWeight: 'bold', marginBottom:3, marginTop:10}}>
                        Filter By Status    
                    </Typography.Paragraph>
                    <Radio.Group value={status} onChange={handleStatusChange}>
                        <Radio value="All">All</Radio>
                        <Radio value="Completed">Completed</Radio>
                        <Radio value="Todo">To do</Radio>
                    </Radio.Group>
                </Col>
                <Col span={24}>
                    <Typography.Paragraph style={{fontWeight: 'bold', marginBottom:3, marginTop: 10}}>
                        Filter By Priority
                    </Typography.Paragraph>
                    <Select value={priority} onChange= {handlePriorityChange}mode="multiple" allowClear placeholder="Please select" style={{width: '100%'}}>
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
                </Col>
            </Row>
        </>
    )
}