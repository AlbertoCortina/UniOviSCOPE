import * as actions from '../../app/actions'

describe('Action Creators', () => {

    it('Should create loading action', () => {
        const expectedAction = {
            type: actions.LOADING
        }
        expect(actions.loading()).toEqual(expectedAction)
    })

    it('Should create notLoading action', () => {
        const expectedAction = {
            type: actions.NOT_LOADING
        }
        expect(actions.notLoading()).toEqual(expectedAction)
    })

})