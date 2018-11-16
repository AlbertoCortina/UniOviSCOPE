/**
 * CheckAttendance Screen
 *
 * Pantalla de perfil a la aplicación.
 */
import React from 'react'
import {View, ScrollView, SectionList, StatusBar} from 'react-native'
import {Container, Content, Form, Item, Input, Label, Text, Button, TouchableWithoutFeedback, Row} from 'native-base';
import {profileStyles as styles, statusBarDarkGreenColor, lightGreen, darkGreen} from '../../resources/styles'
import I18n from "../../resources/i18n";
import ActivityIndicator from "../custom/custom-activityIndicator"
import {List, ListItem, SearchBar, Avatar} from 'react-native-elements'

let first_semester = {data: [], title: 'Primer semestre'}
let second_semester = {data: [], title: 'Segundo semestre'}

function quitarAcentos(origen) {
    return origen
        .replace(/á|Á/, 'a')
        .replace(/é|É/, 'e')
}

class CheckAttendanceScreen extends React.Component {

    componentDidMount() {
        this.props.getSubjects(this.props.bearerToken, this.props.idStudent)
    }

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

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: {lightGreen}}}>
                <StatusBar opaque animated backgroundColor={statusBarDarkGreenColor}/>
                <SectionList stlyle={{flex: 1}} renderItem={({item, index}) => (
                    <ListItem
                        underlayColor='#E9CF8E'
                        containerStyle={{flex: 1, backgroundColor: lightGreen,}}
                        avatarContainerStyle={{paddingRight: 5}}
                        roundAvatar
                        title={
                            <Text style={{
                                fontFamily: 'Montserrat',
                                color: '#000000',
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>{item.denomination}</Text>
                        }
                        subtitle={
                            <Text style={{
                                fontFamily: 'Montserrat',
                                fontSize: 14,
                            }}>Curso: {item.course}</Text>
                        }
                        avatar={
                            <View style={{paddingRight: 10}}>
                                <Avatar overlayContainerStyle={{backgroundColor: '#b7c9b9'}}
                                        titleStyle={{fontSize: 15}}
                                        medium
                                        rounded
                                        title={this.getSubjectInitials(item.denomination)}
                                        activeOpacity={0.7}/>
                            </View>
                        }
                    />
                )}
                             renderSectionHeader={({section}) => (
                                 <View style={{
                                     padding: 5,
                                     paddingTop: 10,
                                     paddingBottom: 10,
                                     backgroundColor: '#d3a01ecc'
                                 }}>
                                     <Text
                                         style={{
                                             fontFamily: 'Montserrat',
                                             fontWeight: 'bold',
                                             fontSize: 16
                                         }}> {section.title}</Text>
                                 </View>
                             )}
                             sections={[
                                 {
                                     data: this.props.subjects.filter(subject => subject.temporality === 'FIRST_SEMESTER').sort((a, b) => quitarAcentos(a.denomination).localeCompare(quitarAcentos(b.denomination))),
                                     title: 'Primer Semestre'
                                 },
                                 {
                                     data: this.props.subjects.filter(subject => subject.temporality === 'SECOND_SEMESTER').sort((a, b) => quitarAcentos(a.denomination).localeCompare(quitarAcentos(b.denomination))),
                                     title: 'Segundo Semestre'
                                 }
                             ]}
                             keyExtractor={(item, index) => item.code}
                             contentContainerStyle={{flexGrow: 1}}


                             ListEmptyComponent={
                                 <View style={{
                                     flex: 1,
                                     justifyContent: 'center',
                                     backgroundColor: '#e5fce8',
                                     alignItems: 'center'
                                 }}>
                                     <Text>No se han encontrado asignaturas</Text>
                                 </View>
                             }
                             refreshing={this.props.isLoading}
                             onRefresh={() => this.props.getSubjects(this.props.bearerToken, this.props.idStudent)}
                >
                </SectionList>
            </View>
        )

    }
}

export default CheckAttendanceScreen

// renderSectionHeader={({section: {title}}) => (
//     <Text style={{fontWeight: 'bold'}}>{title}</Text>
// )}
// keyExtractor={item => item.code}
// ListEmptyComponent={
// <View>
//     <Text>No se han encontrado asignaturas</Text>
// </View>
// }