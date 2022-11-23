import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        widtht: '100%',
        height: 600,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        color: 'gold',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        borderRadius: 10,
        marginLeft: 25,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    searchButton: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        top: 20,
    },
    searchButtonText: {
        fontSize: 22,
        fontWeight: 'bold',

    },
});

export default styles;