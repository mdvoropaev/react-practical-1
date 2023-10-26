import './App.css';
import { Component } from 'react';
import Person from '../person/person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: [
        { id: '0001', name: 'Alvin', phone: '+7800 000 00 00', career: 'IT', email: 'test@test.com', meeting: '20.12 - 12:00' },
        { id: '0002', name: 'Mike', phone: '+7800 111 11 11', career: 'rich', email: 'mike@test.com', meeting: '25.12 - 12:00' },
        { id: '0003', name: 'Trevor', phone: '+7800 222 22 22', career: 'hillbilly', email: 'trevor@test.com', meeting: '' },
        { id: '0004', name: 'Franklin', phone: '+7800 333 33 33', career: 'gangster', email: 'franklin@test.com', meeting: '' }
       ]
    }
  }

  onValueChange = (id, value) => {
     this.setState(({data}) => {
        const item = data.find(item => item.id === id);
        const newItem = {...item, meeting: value};
        const index = data.indexOf(item);
        const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
        return{
         data: newData
        }
     })
  }

  render() {
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id,value)} />
    });
    return (
      <table className='responsive-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Career</th>
            <th>Email</th>
            <th>Meeting</th>
          </tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
    );
  }
}

export default App;
