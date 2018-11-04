import reducer from '../../app/reducers/userData-reducer'
import {
    authenticate,
    dontAuthenticate
} from "../../app/actions";

const initialState = {
    token: null,
    id: null,
    dni: null,
    username: null,
    firstname: null,
    lastname: null,
    firstNameAndLastName: null,
    email: null,
    role: null,
}

describe('UserData Reducer', () => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle AUTHENTICATE', () => {
        expect(reducer(initialState, authenticate('test token', 'test id', 'test dni', 'test username', 'test firstname', 'test lastname', 'test firstNameAndLastName', 'test email', 'test role'))).toEqual(
            {
                token: 'test token',
                id: 'test id',
                dni: 'test dni',
                username: 'test username',
                firstname: 'test firstname',
                lastname: 'test lastname',
                firstNameAndLastName: 'test firstNameAndLastName',
                email: 'test email',
                role: 'test role',
            }
        )
    })

    it('Should handle DONT_AUTHENTICATE', () => {
        expect(reducer(initialState, dontAuthenticate())).toEqual(initialState)
    })

})