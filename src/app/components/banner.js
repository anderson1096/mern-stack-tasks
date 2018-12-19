import React, { Component } from 'react';
import '../../public/css/banner.css';

class Banner extends Component{

    render(){
        return (
            <div className="jumbotron">
                <h1 className="display-4">Bienvenidos!</h1>
                <p className="lead">
                    Este es un sencillo ejemplo de una app desarrollada con el MERN (Mongo, Express, React y Nodejs) stack.
                </p>
                <a href="https://github.com/anderson1096/mern-stack-tasks.git" className="btn btn-primary"> Más info</a>
            </div>
        );
    }
}

export default Banner;