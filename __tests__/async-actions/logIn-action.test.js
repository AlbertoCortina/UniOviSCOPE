import * as actions from '../../app/actions/index'
import logInAction from '../../app/actions/logIn-action'
import fetchMock from 'fetch-mock'
import {FIND_USER_DETAILS_URL, LOG_IN_URL} from '../../app/util'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('LogIn Action Tests', () => {
    let store

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        jest.resetModules()
    })

    test('Should dispatch loading and noConnection', (done) => {

        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.NO_CONNECTION}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(false);
                        })
                    }
                }
            }
        });

        store.dispatch(logInAction('UO123456', '123456'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)

    })

    test('Should dispatch loading and wrongCredentials', (done) => {

        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.WRONG_CREDENTIALS}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock.mock(LOG_IN_URL, 200)

        store.dispatch(logInAction('username', 'password'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)

            done()
        }, 1500)

    })

    test('Should dispatch loading and authenticate', (done) => {

        const expectedActions = [
            {type: actions.LOADING},
            {
                type: actions.AUTHENTICATE,
                bearerToken: 'bearerToken',
                id: 'id',
                dni: 'dni',
                username: 'username',
                firstname: 'firstname',
                lastname: 'lastname',
                firstnameAndLastname: 'firstname lastname',
                email: 'username@uniovi.es',
                role: 'role'
            }
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock
            .mock(LOG_IN_URL,
                {
                    headers: {
                        'Authorization': 'bearerToken'
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        userName: 'username',
                        password: 'password'
                    }
                })
            .mock(String.format(FIND_USER_DETAILS_URL, 'username'),
                {
                    headers: {
                        'Authorization': 'bearerToken'
                    },
                    id: 'id',
                    dni: 'dni',
                    userName: 'username',
                    firstName: 'firstname',
                    lastName: 'lastname',
                    role: 'role'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'bearerToken'
                    },
                })

        store.dispatch(logInAction('username', 'password'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)

            done()
        }, 1500)

    })

    test('Should dispatch loading and unknownError (fails log in' +
        ' request)', (done) => {

        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.UNKNOWN_ERROR}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock.mock(LOG_IN_URL, {throws: 'Server not found'})

        store.dispatch(logInAction('username', 'password'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)

    })

    test('Should dispatch loading and unknownError (fails find user details' +
        ' request)', (done) => {

        const expectedActions = [
            {type: actions.LOADING},
            {type: actions.UNKNOWN_ERROR}
        ]

        jest.mock('NetInfo', () => {
            return {
                isConnected: {
                    fetch: () => {
                        return new Promise((accept, resolve) => {
                            accept(true);
                        })
                    }
                }
            }
        });

        fetchMock
            .mock(LOG_IN_URL,
                {
                    headers: {
                        'Authorization': 'bearerToken'
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: {
                        userName: 'username',
                        password: 'password'
                    }
                })
            .mock(String.format(FIND_USER_DETAILS_URL, 'username'), {throws: 'Server not found'})

        store.dispatch(logInAction('username', 'password'))

        setTimeout(() => {
            expect(store.getActions()).toEqual(expectedActions)
            done()
        }, 1500)

    })

})