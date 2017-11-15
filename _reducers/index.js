
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { alert } from './alert.reducer';
import { header } from './header.reducer';
import { footer } from './footer.reducer';
// import people from './people.reducer';

const rootReducer = combineReducers({
    alert,
    header,
    footer,
    form: formReducer
});

export default rootReducer;