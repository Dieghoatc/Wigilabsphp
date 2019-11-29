import  React from  'react'

import Message from "./message";
import * as firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDc4uXTN_rmrVgNggk9juKyESFGk_JCRHU",
    authDomain: "wigilabs-75dca.firebaseapp.com",
    databaseURL: "https://wigilabs-75dca.firebaseio.com",
    projectId: "wigilabs-75dca",
    storageBucket: "wigilabs-75dca.appspot.com",
    messagingSenderId: "254082483269",
    appId: "1:254082483269:web:fd20c787681ecdd79dcf2c",
    measurementId: "G-50STY90WJG"
};

class Chat extends React.Component{
    constructor() {
        super();
        this.state = {
            notes: [

            ]
        }

        // Initialize Firebase
        this.app = firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        this.db = this.app.database().ref().child('notes')
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})

        console.log({
        value: e.target.value,
        name: e.target.name
        })
    }

    handleClick = e => {
        console.log("Buttom")
    }

    handleSubmit = e => {
        e.preventDefault()
        this.db.push().set({name: this.state.name ,message: this.state.message })
    }

    componentDidMount() {
        const notes = this.state.notes
        this.db.on('child_added', snap => {
            notes.push({
                id: snap.key,
                name: snap.val().name,
                message: snap.val().message
            })
            this.setState({notes})
        })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col col-md-6">
                        <h3>Envío</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Nombre</label>
                                <input
                                    onChange={this.handleChange}
                                    name = "name"
                                    value={this.state.notes.name}
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Mensaje</label>
                                <textarea
                                    onChange={this.handleChange}
                                    name="message"
                                    value={this.state.notes.message}
                                    className="form-control"
                                    rows="3">
                                </textarea>
                            </div>
                            <button onClick={this.handleClick} type="submit" className="btn btn-success">Enviar</button>
                        </form>
                    </div>
                    <div className="col col-md-6">
                        <h3>Recepción</h3>

                        <ul className="row">
                            {this.state.notes.map(note => (
                                <li className="col-12" key = {note.id}>
                                    <Message note={note}></Message>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        );
    }
}
export default Chat