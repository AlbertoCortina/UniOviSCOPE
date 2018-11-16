import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Notification from '../custom/custom-notification'
import deleteNotificationAction from '../../actions/deleteNotification-action'

const mapStateToProps = (state, props) => {
    return {
       notifications: state.notifications,
    }
}

const mapDispatchToProps = (dispatch) => {
    const actions = {
        deleteNotification: deleteNotificationAction,
    }
    return bindActionCreators(actions, dispatch)
}

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification)

export default NotificationContainer