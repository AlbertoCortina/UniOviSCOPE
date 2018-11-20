import json from '../../package'

// Constantes
export const APP_NAME = json.name
export const APP_VERSION = json.version
export const APP_AUTHOR = json.author

//API URLs
export const API_URL = 'http://ec2-52-203-177-158.compute-1.amazonaws.com:8080/UniOviSCOPE'
// export const API_URL = 'http://192.168.1.48:8080/uniovi-scope'
export const LOG_IN_URL = API_URL + '/common/logIn'
export const FIND_USER_DETAILS_URL = API_URL + '/common/findUserDetails?userName={0}'
export const FIND_LAST_YEAR_SUBJECTS_URL = API_URL + '/student/findLastYearSubjects?studentId={0}'
export const FIND_LAST_YEAR_SUBJECTS_SESSIONS_URL = API_URL + '/student/findLastYearSubjectSessions?studentId={0}&&subjectId={1}&&groupType={2}'
export const FIND_STUDENT_SESSION_ATTENDANCE_URL = API_URL + '/student/findStudentSessionAttendance?studentId={0}&&sessionId={1}'
export const VERIFY_ATTENDANCE_CERTIFICATE_URL = API_URL + '/student/verifyAttendanceCertificate'
export const CERTIFY_ATTENDANCE_URL = API_URL + '/student/certifyAttendance'

/**
 * Función creada para emular String.format()
 */
if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
