import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import DescriptionUser from "./DescriptionUser";
import {setDescriptionId} from "../redux/userReducer";



class DescriptionsUserContainer extends React.Component {

    render() {
        return (<>
              <DescriptionUser usersPage={this.props.usersPage} setDescriptionId={this.props.setDescriptionId}/>
            </>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            usersPage: state.usersPage
        }
    };

export default compose(connect(mapStateToProps,{setDescriptionId}))(DescriptionsUserContainer);
