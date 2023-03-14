import { StyleSheet} from 'react-native'
import colors from '../../colors/colors'

export default StyleSheet.create({
    container: {
        position: "absolute",
        top: 600,
        bottom: 20,
        right: 10,
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.darkGreen
    }
})