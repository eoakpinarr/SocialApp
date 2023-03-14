import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import Button from '../Button'
import styles from "./ContentInput.style"
const ContentInput = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState(null)

    const handleSend = () => {
        if (!text) {
            return
        } else {
            onSend(text)
            setText(null)
        }

    }

    return (
        <Modal style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Paylaşmak istediğin yazıyı gir..."
                        placeholderTextColor="black"
                        onChangeText={setText} multiline />
                </View>
                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default ContentInput