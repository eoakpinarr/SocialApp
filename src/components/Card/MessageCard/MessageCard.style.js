import { StyleSheet } from 'react-native'
import colors from '../../../colors/colors'

export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: colors.darkGreen,
        borderRadius: 15,
        padding: 10
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 15
    },
    date: {
        color: 'white',
    },
    title: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    touch_container: {
        alignItems: "flex-end",

    },
    like_container: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    like_count_container: {
        margin: 3,
        padding: 6
    },
    like_count_text: {
        textAlign: 'center',
        color: colors.darkGreen,
        fontWeight: 'bold',
        fontSize: 15,
    },
    like_text: {
        color: colors.darkGreen,
        fontWeight: 'bold',
        fontSize: 18,
    },
})