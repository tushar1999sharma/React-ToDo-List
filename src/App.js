import React from 'react'; //import react
import './App.css'; //import css

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newItem: "",
            list: []
        }
    }

    addToDo(task){
       if(task !== ""){
           const newItem = {
               id: Date.now(),
               value: task,
               isDone: false
            };
            //don't change state item directly
            const list = [...this.state.list]; //append all item into list
            list.push(newItem);
            //now we can update state item using setState 
            this.setState({
                list,
                newItem: ""
            });
       } 
    }

    deleteToDo(id){
        const list = [...this.state.list];
        const updatelist = list.filter(item => item.id !== id);
        this.setState({
            list: updatelist
        });
    }

    updateInput(input){
        this.setState({
            newItem: input
        });
    }
    
    render(){
        return(
            <div>
                <div className="container">
                    <h1>To-Do List</h1>
                    <input id="new" type="text" placeholder="Add New Todo"
                        required 
                        value={this.state.newItem} 
                        onChange={e => this.updateInput(e.target.value)}
                        onKeyPress={(e) => {if(e.which === 13) this.addToDo(this.state.newItem)}}
                    />         
                         
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li key={item.id}>
                                    <span className="del"> <button className="btn-del" onClick={() => this.deleteToDo(item.id)}>Delete</button> </span>
                                    {/* <input type="checkbox" name="check" className="checker" checked={item.isDone} /> */}
                                    {item.value}
                                </li>
                            );
                        })}
                    </ul>    
                </div>
            </div>
        )
    }
} 

export default App;
