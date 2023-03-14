import { StyleSheet } from 'react-native'
import colors from '../../colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 30,
        color: colors.darkGreen,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    }
})