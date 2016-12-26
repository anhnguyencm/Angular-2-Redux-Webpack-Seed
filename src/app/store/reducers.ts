/**
 * Created by talgvili on 20/12/2016.
 */
import {combineReducers} from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { sessionReducer } from './session/session.reducer';
import {IAppState} from "./store";
import {articlesReducer} from "./articles/articles.reducer";
import {usersReducer} from "./users/users.reducer";

export default combineReducers<IAppState>({
    counter: counterReducer,
    session: sessionReducer,
    articlesReducer: articlesReducer,
    usersReducer: usersReducer,
});