import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {filterUsers, setSearchText} from "../redux/userReducer";
import Search from "./Search";



class SearchContainer extends React.Component {

    render() {
        return (<>
              <Search usersPage={this.props.usersPage}
                      setSearchText={this.props.setSearchText}
                      filterUsers={this.props.filterUsers}/>
            </>
        )
    }
}

    const mapStateToProps = (state) => {
        return {
            usersPage: state.usersPage
        }
    };

export default compose(connect(mapStateToProps,{setSearchText,filterUsers}))(SearchContainer);
