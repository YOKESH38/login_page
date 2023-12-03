import './App.css';
import Login from './component/login/Login';
import Registration from './component/registration/Registration';
import Table from './component/table/Table'

function App() {
  return (
    <div className="App">
      <Login/>
      <Registration/>
      <Table />
    </div>
  );
}

export default App;
