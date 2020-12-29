import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {getUsers, setDescriptionId} from "../redux/userReducer";
import {compose} from "redux";
import Preloader from "../preloader/Preloader";

class UsersContainer extends PureComponent {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (<>
                {this.props.usersPage.isFetching && <Preloader/>}
                <Users usersPage={this.props.usersPage} setDescriptionId={this.props.setDescriptionId}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

export default compose(connect(mapStateToProps, {getUsers, setDescriptionId}))(UsersContainer);
