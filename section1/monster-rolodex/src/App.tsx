import React,{Component} from 'react';
import './App.css';
import {Monster} from "./gInterface.js"
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
// interface Monster{
//   name :string;
//   id : number;
//   email:string;
// }
interface State{
  monsters:Monster[];
  searchField:string;
}
class App extends Component<{},State>{
  constructor(prop:{}){
    super(prop)
    this.state ={
      monsters : [],
      searchField : "",
    }
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters:users}))
  }
  
  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter((item)=>{return item.name.toLowerCase().includes(searchField.toLowerCase())})
    return (
      <div className='App'>
      
      <SearchBox  
      placeholder ="Search Monsters"
      handleSearch={(e)=>this.setState({searchField: e.target.value})}/>
      <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
