import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import FloatingButton from '../../components/FloatingButton'
import ContentInput from '../../components/ContentInput/ContentInput'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import ParseData from '../../utils/ParseData'
import MessageCard from '../../components/Card/MessageCard'
import styles from './Messages.style'

const Messages = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    database().ref('messages/').on('value', snapshot => {
      const data = snapshot.val()
      const parsedData = ParseData(data || {})
      setList(parsedData)
    })
  }, [])

  const handleSendText = (content) => {
    sendText(content)
  }

  const sendText = (content) => {
    const usermail = auth().currentUser.email
    const textObject = {
      text: content,
      username: usermail.split('@')[0], //@ den önceki kısım
      date: new Date().toISOString(),
      like: 0
    }
    database().ref('messages/').push(textObject);
  }

  const likeCounter = (item) => {
    database()
      .ref(`messages/${item.id}/`)
      .update({ like: item.like + 1 })
  }

  const renderText = ({ item }) => (<MessageCard message={item} onLike={() => likeCounter(item)} />)

  const visibleControl = () => { setModalVisible(!modalVisible) }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderText}
      />
      <FloatingButton icon={'plus'} onPress={visibleControl} />
      <ContentInput
        visible={modalVisible}
        onClose={visibleControl}
        onSend={handleSendText}
      />
    </SafeAreaView>
  )
}

export default Messages