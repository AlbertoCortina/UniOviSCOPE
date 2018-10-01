/**
 * Estilos de la aplicación
 */
import { StyleSheet, Dimensions, StatusBar } from 'react-native'

// Ancho y alto de la pantalla
const widthscreen = Dimensions.get('window').width
const heightscreen = Dimensions.get('window').height

// Colores de la aplicación
export const darkGreen = '#008279'
const lightGreen = '#e5fce8'
export const orange = '#d3a01e'
export const statusBarColor = '#00000033'
export const white = '#FFFFFF'

//Medidas header y statusBar (hay que revisar para iOS)
// 56 es el ancho de la barra de navegacion en Android por defecto
const standardHeaderHeight = 56
export const headerHeight = standardHeaderHeight + StatusBar.currentHeight
export const marginHeader = headerHeight / 4

/* 
//Estilos usados en Custom Drawer
export const drawerStyles = StyleSheet.create({
    content: {
        backgroundColor: lightGreen,
    },
    infoContainer: {
        backgroundColor: orange,
        flex: 1,
        flexDirection: 'column',
        height: 200,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    thumbnailContainer: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
    },
    thumbnail: {
        backgroundColor: 'grey',
        borderRadius: 40,
        color: 'white',
        height: 80,
        lineHeight: 80,
        textAlign: 'center',
        width: 80,
    },
    nameAndSurnameText: {
        alignContent: 'flex-end',
        color: 'white', fontSize: 16,
        fontWeight: 'bold',
    },
    emailText: {
        color: 'white',
        fontSize: 14,
    },
    button: {

    },
    buttonContainer: {

    },
    buttonIcon: {
        color: darkGreen,
        height: 30,
        width: 30,
    },
    buttonText: {
        color: 'black',
        width: widthscreen,
    },
})

//Estilos usados en Custom Drawer
export const separatorStyles = StyleSheet.create({
    separator: {
        borderBottomColor: darkGreen,
        borderBottomWidth: 1,
        opacity: 0.5,
    },
}) */

// Estilos usado en Custom ActivityIndicator
export const activityIndicatorSytles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    imageBackground: {

    },
    animatedImage: {

    }
})

// Estilos usados en Custom Loader
export const loaderStyles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        backgroundColor: statusBarColor,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
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
        alignItems: 'center', // Si pongo stretch o center se expande o no toda la pantalla 
        backgroundColor: lightGreen,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 60,
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
    },
    passwordInput: {
        marginTop: 15,
        backgroundColor: 'rgba(209, 209, 209, 0.3)',
        height: 40,
        borderColor: 'grey'
    },
    passwordInputText: {
        fontFamily: 'Montserrat',
    },
    inputIcon: {
        color: darkGreen,
        fontSize: 25,
        paddingLeft: 5,
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: orange,
        height: 40,
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
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
    buttonIcon: {

    },
    buttonText: {

    },
})

//Estilos usados en Profile Screen
export const profileStyles = StyleSheet.create({
    content: {
        backgroundColor: lightGreen,
        flex: 1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
})

//Estilos usados en Settings Screen
export const settingsStyles = StyleSheet.create({
    header: {
        backgroundColor: darkGreen,
    },
    content: {
        backgroundColor: lightGreen,
        flex: 1,
    },
    headerStyles: {
        backgroundColor: darkGreen,
    },
})