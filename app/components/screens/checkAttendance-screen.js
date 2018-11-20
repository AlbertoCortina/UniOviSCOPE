import React from 'react'
import {SectionList, Text, View} from 'react-native'
import {checkAttendanceStyles as styles} from '../../resources/styles'
import {Avatar, ListItem} from 'react-native-elements'
import I18n from '../../resources/i18n'

/**
 * Componente que se emplea cuando el estudiante no está matriculado en
 * ninguna asignatura.
 */
const EmptyList = (
    <View style={styles.emptyList}>
        <Text>{I18n.t('error_sin_asignaturas')}</Text>
    </View>
)

/**
 * Clase CheckAttendanceScreen.
 *
 * Componente para seleccionar una asignatura y ver sus detalles.
 *
 * @author Alberto Cortina Eduarte
 */
class CheckAttendanceScreen extends React.Component {

    getSubjectInitials = (subjectName) => {
        let words = subjectName.split(' ')
        let initials = '';
        words.forEach(word => {
            if (word.charAt(0) == word.charAt(0).toUpperCase()) {
                initials += word.charAt(0)
            }
        });
        return initials
    }

    componentDidMount() {
        this.props.getSubjects(this.props.bearerToken, this.props.idStudent)
    }

    render() {
        return (
            <View style={styles.sectionListContainer}>
                <SectionList renderItem={({item, index}) => (
                    <ListItem
                        underlayColor='#E9CF8E'
                        containerStyle={styles.itemContainer}
                        avatarContainerStyle={{paddingRight: 5}}
                        roundAvatar
                        title={
                            <Text style={styles.itemTitle}>
                                {item.denomination}
                            </Text>
                        }
                        subtitle={
                            <Text style={styles.itemSubtitle}>
                                {I18n.t('curso')}{item.course}
                            </Text>
                        }
                        avatar={
                            <View style={styles.avatarContainer}>
                                <Avatar
                                    overlayContainerStyle={styles.avatarOverLayContainer}
                                    titleStyle={styles.avatarTitle}
                                    medium
                                    rounded
                                    title={this.getSubjectInitials(item.denomination)}
                                    activeOpacity={0.7}/>
                            </View>
                        }
                        onPress={() => this.props.navigation.navigate('CheckAttendanceDetail', {
                            subject: item.denomination,
                            idSubject: item.id
                        })}
                    />
                )}
                             renderSectionHeader={({section}) => (
                                 <View style={styles.sectionContainer}>
                                     <Text style={styles.sectionTitle}>
                                         {section.title}
                                     </Text>
                                 </View>
                             )}
                             sections={[
                                 {
                                     data: this.props.subjects.filter(subject => subject.temporality === 'FIRST_SEMESTER').sort((a, b) => a.denomination.localeCompare(b.denomination)),
                                     title: I18n.t('primer_semestre')
                                 },
                                 {
                                     data: this.props.subjects.filter(subject => subject.temporality === 'SECOND_SEMESTER').sort((a, b) => a.denomination.localeCompare(b.denomination)),
                                     title: I18n.t('segundo_semestre')
                                 }
                             ]}
                             keyExtractor={(item, index) => item.code}
                             contentContainerStyle={{flexGrow: 1}}
                             ListEmptyComponent={<EmptyList/>}
                             refreshing={false}
                             onRefresh={() => this.props.getSubjects(this.props.bearerToken, this.props.idStudent)}>
                </SectionList>
            </View>
        )
    }

}

export default CheckAttendanceScreen