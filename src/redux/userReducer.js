import {userApi} from "../api/api";


const SET_USERS = "SET-USERS";
const IS_FETCHING = "IS-FETCHING";
const SET_DESCRIPTION_ID = "SET-DESCRIPTION-ID";
const SET_SEARCH_TEXT = "SET-SEARCH-TEXT"
const FILTER_USERS = "FILTER-USERS"

let initialState = {
    users: [],
    filterUsers: [],
    isFetching: false,
    descriptionID: null,
    searchText: ""
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users:[...action.users],
                filterUsers: [...action.users]
            };
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            };
        case FILTER_USERS:
            if(!state.searchText) {
                return {
                    ...state,
                    filterUsers: state.users
                }
            }
            return {
                ...state,
                filterUsers: state.users.filter(u => u.id == state.searchText || u.firstName===state.searchText || u.lastName===state.searchText)
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_DESCRIPTION_ID:
            return {
                ...state,
                descriptionID: action.id
            };
        default:
            return state
    }
};


export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export const filterUsers = (searchText) => {
    return {
        type: FILTER_USERS,
        searchText
    }
};

export const isFetching = (isFetching) => {
    return {
        type:IS_FETCHING,
        isFetching
    }
};

export const setDescriptionId = (id) => {
    return {
        type: SET_DESCRIPTION_ID,
        id
    }
};

export const setSearchText = (searchText) => {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    }
};

export const getUsers = () =>{
 return (dispatch) => {
     dispatch(isFetching(true));
     userApi.getUsers().then((data) => {
         dispatch(setUsers(data.data));
         dispatch(isFetching(false));
     });
 }
};





export default usersReducer;