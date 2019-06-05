import React, {useState} from 'react';
import { Select, Icon } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

const { Option } = Select;

const userDetails = [
  {
    name: 'Marina Augustine',
    email: 'marina@example.com',
    icon: 'android'
  },
  {
    name: 'Nick Giannopoulos',
    email: 'nick@example.com',
    icon: 'windows'
  },
  {
    name: 'Narayana Garner',
    email: 'narayan@example.com',
    icon: 'apple'
  },
  {
    name: 'Anita Gros',
    email: 'anita@example.com',
    icon: 'chrome'
  },
  {
    name: 'Megan smith',
    email: 'megan@example.com',
    icon: 'ie'
  }
]

function App() {

  const [selected, setSelected] = useState([])

  function handleChange(e) {
    console.log(e);
    setSelected(e);
  }

  return (
    <div className="App">
      <Select
        mode="multiple"
        style={{ width: '80%' }}
        placeholder=""
        onChange={handleChange}
        value={selected}
        autoClearSearchValue={true}
        multiple={true}
      >
        {userDetails.map((val, key) => {
          return (<Option value={val.name} key={key+1}><Icon type={val.icon} /> {val.name} <span className="option-email">{val.email}</span></Option>)
        })}
      </Select>
    </div>
  );
}

export default App;
