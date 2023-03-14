import { StyleSheet } from 'react-native'
import colors from '../../colors/colors'

const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17
    }
}) 
export default {
    primary:StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.darkGreen
        },
        title: {
            ...base_style.title,
            color: 'white'
        }

    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: colors.darkGreen
        },
        title: {
            ...base_style.title,
            color: colors.darkGreen, 
        }
    })
}

//Renkleri ayrı dosyada tut (colors)