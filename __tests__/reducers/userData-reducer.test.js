import reducer from '../../app/reducers/userData-reducer'
import {
    authenticate,
    dontAuthenticate
} from "../../app/actions";

const initialState = {
    bearerToken: null,
    id: null,
    dni: null,
    username: null,
    firstname: null,
    lastname: null,
    firstnameAndLastname: null,
    email: null,
    role: null,
}

describe('UserData Reducer', () => {

    it('Should return default state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('Should handle AUTHENTICATE', () => {
        expect(reducer(initialState, authenticate('test bearerToken', 'test id', 'test dni', 'test username', 'test firstname', 'test lastname', 'test firstnameAndLastname', 'test email', 'test role'))).toEqual(
            {
                bearerToken: 'test bearerToken',
                id: 'test id',
                dni: 'test dni',
                username: 'test username',
                firstname: 'test firstname',
                lastname: 'test lastname',
                firstnameAndLastname: 'test firstnameAndLastname',
                email: 'test email',
                role: 'test role',
            }
        )
    })

    it('Should handle DONT_AUTHENTICATE', () => {
        expect(reducer(initialState, dontAuthenticate())).toEqual(initialState)
    })

})