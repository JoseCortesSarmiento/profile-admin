import './App.css';

import Login from '../src/components/Login'
import CreateForm from '../src/components/CreateForm'
import List from '../src/components/List'


function App() {
  return (
    <div className="App">
      <Login></Login>
      <CreateForm></CreateForm>
      <List></List>
    </div>
  );
}

export default App;
