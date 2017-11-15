import { userConstants } from '../_constants';
import { userService } from '../_services';

import { alertActions } from './';

export const userActions = {
    login,
    logout,
    create,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(function(res) {
                // console.log(res);
                if (res.ack == 'ok') {
                    dispatch(success(res));
                    // history.push('/');
                } else {
                    dispatch(failure(res.msg));
                    dispatch(alertActions.error(res.msg));
                }
            });
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function create(user) {
    return dispatch => {

        // prepare data
        const userData = {
            username: user.username || '',
            display_name: user.display_name || '',
            email: user.email || '',
            password: user.password || '',
            access_level: user.access_level || 50
        };

        userService.create(userData)
            .then(function(res){
                console.log(res);
                if (res.ack == 'ok') {
                    // console.log(res);
                    // history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                } else {
                    dispatch(alertActions.error(res.msg));
                }
            });
    };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(function(res) {
                console.log(res);
                if (res.ack == 'ok') {
                    dispatch(success(users));
                } else {
                    dispatch(failure(res.msg));
                    dispatch(alertActions.error(res.msg));
                }
            });
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}