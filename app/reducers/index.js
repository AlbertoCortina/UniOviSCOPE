import {combineReducers} from 'redux'
import isLoadingAppReducer from './isLoadingApp-reducer'
import userDataReducer from './userData-reducer'
import errorReducer from './error-reducer'
import settingsReducer from './settings-reducer'
import subjectsReducer from './subjects-reducer'
import sessionsReducer from './sessions-reducer'
import attendanceCertificateReducer from './attendanceCertificate-reducer'

const reducers = combineReducers({
    isLoading: isLoadingAppReducer,
    userData: userDataReducer,
    errors: errorReducer,
    settings: settingsReducer,
    subjects: subjectsReducer,
    sessions: sessionsReducer,
    attendanceCertificate: attendanceCertificateReducer
})

export default reducers