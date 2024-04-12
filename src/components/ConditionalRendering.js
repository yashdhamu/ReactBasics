import React, {Component} from 'react';

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    //Short circuit operator
    render() {
        return this.state.isLoggedIn && <div>Welcome User</div>
    }

    //Ternary conditional operator
    // render() {
    //     return (
    //         this.state.isLoggedIn ? <div>Welcome User</div> : <div>Welcome Guest</div>
    //     )
    // }

    //Element variables
    // render() {
    //     let message;
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome User</div>
    //     } else {
    //         message = <div>Welcome Guest</div>
    //     }

    //     return (
    //         message
    //     )
    // }

    // render() {
    //     if (this.state.isLoggedIn) {
    //         return (
    //             <div>Welcome User</div>
    //         )
    //     }else{
    //         return (
    //             <div>Welcome Guest</div>
    //         )
    //     }
    // }
}

export default ConditionalRendering;