import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { formatDistance, parseISO } from 'date-fns'
import { tr } from "date-fns/locale"
import styles from './MessageCard.style'

const MessageCard = ({ message, onLike }) => {

    const formattedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
        locale: tr,
    })

    return (
        <View style= {styles.container}>
            <View style = {styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formattedDate}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
            <View style = {styles.touch_container}>
                <TouchableOpacity style={styles.like_container} onPress={onLike}>
                    {
                        !!message.like && (
                            <View style={styles.like_count_container}>
                                <Text style={styles.like_count_text}>{message.like}</Text>
                            </View>
                        )
                    }
                    <Text style={styles.like_text}>BEĞEN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MessageCard