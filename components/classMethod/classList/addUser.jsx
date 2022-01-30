import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userDispatcher } from './reducer'

class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            userList: [],
        }
    }

    onChangeHandler = (e) => {
        this.setState({ userName: e.target.value })
    }

    componentDidMount = () => {
        if(this.state.userList === 0){
            return <span>No User Found</span>
        }else{
            this.setState({ userList: this.props.userList })
        }
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addUser(this.state.userName)
    }

    render() {
        const renderUserList = this.state.userList.map((user, i) => {
            return (
                <ul key={i} >
                    <li> {user} </li>
                </ul>
            )
        })
        return (
            <div>
                <div>
                    <form onSubmit={this.submitHandler.bind(this)} >
                        <input placeholder='Add User' onChange={this.onChangeHandler.bind(this)} value={this.state.userList} />
                        <button> Add </button>
                    </form>
                </div>
                <div>
                    {renderUserList}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (userName) => {
            dispatch(userDispatcher(userName))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userList,
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(AddUser)
