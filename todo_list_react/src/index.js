import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let todo_list = [
    {index:1,value: "learn CSS"},
    {index:2, value: "learn React"}
]


class ToDoHeader extends React.Component {
    render () {
        return <h1>Todo list</h1>;
    }
}

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
        }

    }
    render() {
        return(
            <form onSubmit={this.onSubmit} className="form-inline">
                <p>Enter new job:</p>
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


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {todo_list: todo_list};
    }
    addElement = (newTask)=>{
        todo_list.push({
            index: todo_list.length+1,
            value: newTask
        });

        this.setState({todo_list: todo_list})
    }

    removeItem = (index) => {
        todo_list.splice(index, 1);
        this.setState({todo_list: todo_list})
    }
    render() {
        return(
            <div id="main">
                <ToDoHeader />

                <NewElement addElement={this.addElement} />
                <ToDoList items={this.props.initItems} removeItem={this.removeItem}/>

            </div>
        )
    }
}

ReactDOM.render(<App initItems={todo_list}/>, document.getElementById('root'))


