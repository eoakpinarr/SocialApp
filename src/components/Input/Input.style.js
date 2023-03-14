import { StyleSheet } from 'react-native'
import colors from '../../colors/colors'

export default StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.darkGreen
    },
    inputComponent: {
        flex: 1
    }
})