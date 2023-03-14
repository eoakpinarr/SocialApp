import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './FloatingButton.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const FloatingButton = ({onPress, icon}) => {
    return (
        <TouchableOpacity onPress={onPress} style = {styles.container}>
            <Icon name={icon} size={30} color={'white'} />
        </TouchableOpacity>
    )
}

export default FloatingButton