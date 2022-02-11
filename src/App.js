import './App.css';
import { Typography, Divider } from "antd";
import Filters from "./components/Filters";
import TodoList from './components/TodoList';

const {Title} = Typography;

function App() {
  return (
    <div style={{
      width: 500,
      margin: '25px auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 20,
      boxShadow: '0 0 10px 4px #bfbfbf',
      borderRadius: 5,
      height: '90vh',
    }}>
      <Title style={{textAlign: 'center'}}>TODO APP With Redux</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
