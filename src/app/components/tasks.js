import React, { Component } from 'react';
import '../../public/css/tasks.css';

class Tasks extends Component{
    constructor(){
        super();
        this.state = {
            title: "",
            description: "",
            tasks: [],
            _id: ''
        };
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    }

    fetchTasks(){
        fetch('/api/tasks')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    tasks: data
                });
            })
            .catch(err => console.log(err));
    }

    componentDidMount(){
        this.fetchTasks()
    }

    handleChange(e){
        const { name, value} = e.target
        this.setState({
            [name]: value
        });
    }


    addTask(e){

        if(this.state._id){
            fetch(`/api/tasks/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    title: '',
                    description: '',
                    _id: ''
                });
                this.fetchTasks();
            })
            .catch(err => console.log(err))

        }else{
            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then( res => res.json())
            .then( data => {
                console.log(data);
                this.setState({
                    title: '',
                    description: ''
                });
                this.fetchTasks();
                
            })
            .catch(err => console.log(err));
        }
        
        

        e.preventDefault();
    }

    deleteTask(id){
        if( confirm('Estás seguro?')){
            fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then( res => res.json())
                .then(data => {
                    console.log(data)
                    this.fetchTasks();
                })
                .catch(err => console.log(err));
        }
    }

    editTask(id){
        fetch(`/api/tasks/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                _id: id
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Ingresar Tarea</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="col-md-12 field">
                                                <input value={this.state.title} name="title" type="text" onChange={this.handleChange}  className="form-control" placeholder="Título Tarea"></input>
                                                <br />
                                            </div>
                                            <div className="field col-md-12">
                                                <textarea value={this.state.description} name="description" onChange={this.handleChange} type="text" className="form-control" placeholder="Descripción Tarea"></textarea>
                                                <br />
                                            </div>
                                            <div className="col-md-12">
                                                <button name="submit" type="submit" className="btn btn-primary form-control">{ this.state._id ? 'Actualizar': 'Guardar'}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Título</th>
                                        <th>Descripción</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button id="btn-edit" onClick={() => this.editTask(task._id)} className="btn btn-primary"><span><i className="fas fa-edit"></i></span></button>
                                                        <button id="btn-delete" onClick={() => this.deleteTask(task._id)} className="btn btn-primary"><span><i className="fas fa-trash-alt"></i></span></button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tasks;