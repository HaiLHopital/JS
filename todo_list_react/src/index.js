import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//list of tasks
let todo_list = [
    {index:0,value: "learn CSS"},
    {index:1, value: "learn React"}
]

//header
class ToDoHeader extends React.Component {
    render () {
        return <h1>Todo list</h1>;
    }
}

//list of task instances
class ToDoList extends React.Component {
    render() {
        let items = this.props.items.map((item, index) =>{
            return(
                <ToDoElement key={index} item={item} index={index} removeItem={this.props.removeItem}/>
            );
        });
        return(
            <ul className="list-group"> {items}</ul>
        );
    }
}

//task instance
class ToDoElement extends React.Component {
    onClickClose = () => {
        let index = parseInt((this.props.index))
        this.props.removeItem(index)
    }
    render() {
        return(
            <li className={"list-group-item"}>
                <div>
                    <span>{this.props.item.value}</span>
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        )
    }
}

//new tak form
class NewElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {newTask : ""}
    }
    onChange = (event) => {
        this.setState({newTask: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        let Task = this.state.newTask;
        if(Task){
            this.props.addElement(Task);
            event.target.reset();
            this.setState({newTask: ""})
        }

    }
    render() {
        return(
            <form onSubmit={this.onSubmit} className="form-inline">
                <p>Enter new task:</p>
                <input
                    type="text"
                    className="form-control"
                    placeholder={"add new.."}
                    onChange={this.onChange}
                />
                <button type="submit"> Add </button>
            </form>
        )
    }
}

//control buttons, currently only clear list, probably will add a save button if I'll figure out how to work with json files
class ControlButtons extends React.Component{
    onClickClear = () => {
        this.props.clearList()
    }
    render(){
        return(
            <button type="button" onClick={this.onClickClear}>Clear List</button>
        )
    }
}

//building everything together, should probably be in diff file, but app is not that big so...
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todo_list: todo_list};
    }

    addElement = (newTask)=>{
        todo_list.push({
            index: todo_list.length,
            value: newTask
        });
        this.setState({todo_list: todo_list})
    }

    removeItem = (index) => {
        todo_list.splice(index, 1);
        this.setState({todo_list: todo_list})
    }

    clearList = () => {
        todo_list.map(()=>{
            while (todo_list.length>0){
                todo_list.pop()
            }
            })

        this.setState({todo_list: todo_list})
    }
    render() {
        return(
            <div id="main">
                <ToDoHeader />

                <NewElement addElement={this.addElement} />
                <ToDoList items={this.props.initItems} removeItem={this.removeItem}/>
                <ControlButtons clearList={this.clearList}/>
            </div>
        )
    }
}

ReactDOM.render(<App initItems={todo_list}/>, document.getElementById('root'))


