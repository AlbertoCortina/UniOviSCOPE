/**
 * Estilos de la aplicación
 */
import { StyleSheet, Dimensions } from 'react-native';

// Ancho y alto de la pantalla
const widthscreen = Dimensions.get('window').width;
const heightscreen = Dimensions.get('window').height;


// Estilos usados en Custom Loading
const loadingStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Estilos usados en Splash Screen
const splashStyles = StyleSheet.create({
    container: {
        backgroundColor: '#008279',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//Estilos usados en Login Screen
const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',        
        backgroundColor: '#e5fce8',
    },
    header: {
        backgroundColor: '#e5fce8',
        borderColor: '#e5fce8'
    },
    logo: {
        height: (widthscreen - 40) * 70/100,
        width: (widthscreen - 40) * 70/100,
        alignSelf: 'center',
        padding:30
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20
    },
    input: {
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: 'rgba(209, 209, 209, 0.5)',
        height: 40
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'  ,
        borderColor:'red'      
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch'  ,
        marginTop: 15,
        backgroundColor: '#d3a01e'
    }
});

// Exporto los estilos
export { loadingStyles, splashStyles, loginStyles };