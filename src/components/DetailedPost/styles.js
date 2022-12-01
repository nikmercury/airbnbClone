import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: 'grey',
    },
    description: {
        fontSize: 20,
        lineHeight: 26,
        color: 'black'
    },
    prices: {
        marginVertical: 10,
        fontSize: 18,
        color: 'black',
    },
    oldPrice: {
        color: 'grey',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: 'grey',
        textDecorationLine: 'underline',

    },
    longDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginVertical: 20,

    },
})

export default styles;