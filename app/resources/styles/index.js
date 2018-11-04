import {Dimensions, StyleSheet} from 'react-native'

// Ancho y alto de la pantalla
const widthscreen = Dimensions.get('window').width
const heightscreen = Dimensions.get('window').height

// Colores de la aplicación
export const darkGreen = '#008279'
export const lightGreen = '#E5FCE8'
export const white = '#FFFFFF'
export const black = '#000000'
export const orange = '#D3A01E'
export const statusBarLightGreenColor = '#B7C9B9'
export const statusBarDarkGreenColor = '#006860'
export const translucent = '#00000033'

// Estilos usados en Custom ActivityIndicator
export const activityIndicatorStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: translucent,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    modal: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        height: 100,
        justifyContent: 'space-around',
        width: 100,
    },
})

//Estilos usados en Login Screen
export const loginStyles = StyleSheet.create({
    container: {
        backgroundColor: lightGreen,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    logo: {
        alignSelf: 'center',
        height: (widthscreen) * 55 / 100,
        width: (widthscreen) * 55 / 100,
        marginBottom: 40,
        marginTop: -20,
    },
    userInput: {
        marginTop: 10,
        backgroundColor: 'rgba(209, 209, 209, 0.3)',
        height: 40,
        borderColor: 'grey'
    },
    userInputText: {
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    passwordInput: {
        marginTop: 15,
        backgroundColor: 'rgba(209, 209, 209, 0.3)',
        height: 40,
        borderColor: 'grey'
    },
    passwordInputText: {
        fontFamily: 'Montserrat',
        fontSize: 16,
    },
    inputIcon: {
        color: darkGreen,
        fontSize: 25,
        paddingHorizontal: 5,
    },
    button: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: orange,
        height: 40,
        marginVertical: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 14
    },
    buttonIcon: {
        fontSize: 20,
    },
})

//Estilos usados en Home Screen
export const homeStyles = StyleSheet.create({
    header: {
        backgroundColor: darkGreen,
    },
    content: {
        alignItems: 'center',
        backgroundColor: lightGreen,
        flex: 1,
        justifyContent: 'center',
    },
    imageBackground: {
        height: widthscreen * 90 / 100,
        opacity: 0.1,
        position: 'absolute',
        width: widthscreen * 90 / 100,
    },
    button: {
        alignSelf: 'center',
        backgroundColor: orange,
        marginTop: 15,
    },
    buttonIcon: {},
    buttonText: {},
})

//Estilos usados en Profile Screen
export const profileStyles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 15,
        backgroundColor: lightGreen
    },
    iconRow: {
        flexDirection: 'row',
        flex: 9,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    formRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 3
    },
    label: {
        fontFamily: 'Montserrat',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        fontFamily: 'Montserrat',
        opacity: 0.5,
        fontSize: 16
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },
    button: {
        backgroundColor: orange,
        height: 40,
        marginTop: 15,
    }
})

//Estilos usados en Settings Screen
export const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: lightGreen,
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textContainer: {
        flex: 9,
    },
    title: {
        fontFamily: 'Montserrat',
        color: black,
        fontWeight: 'bold',
        fontSize: 16
    },
    subtitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
    },
    switchContainer: {
        flex: 2,
    },
    divider: {
        flex: 1,
        backgroundColor: darkGreen,
        marginTop: 12,
        marginBottom: 10,
    }
})

// Estilos usados en BottomTabNavigator
export const navigationStyles = StyleSheet.create({
    customHeaderContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 16
    },
    customHeaderTitle: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: white,
        fontSize: 20
    },
    customHeaderSubtitle: {
        fontFamily: 'Montserrat',
        color: white,
        fontSize: 12
    },
    customHeaderLeft: {
        padding: 20
    },
    customHeaderRight: {
        padding: 20
    },
    headerStyle: {
        backgroundColor: darkGreen
    },
    headerTitleStyle: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: white,
        fontSize: 20
    },
    barStyle: {
        backgroundColor: darkGreen
    }
})

export const certifyQRStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightGreen,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera: {
        flex: 1
    },
    text: {
        fontFamily: 'Montserrat',
        fontSize: 16
    }
})