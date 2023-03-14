import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Login.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'
import ErrorMessage from '../../utils/ErrorMessage'
import Messages from '../Messages'

const formValues = {
  usermail: "",
  password: "",
}

const Login = ({ navigation }) => {

  const [loading, setLoading] = useState(false)

  const goSign = () => { navigation.navigate("Sign") }

  const formSubmit = async (formValues) => {
    try {
      setLoading(true)
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password
      )
      showMessage({
        message: "başarılı şekilde giriş yapıldı",
        type: "success",
      });
      setLoading(false)
      navigation.navigate(Messages)
    } catch (error) {
      console.log(error)
      showMessage({
        message: ErrorMessage(error.code),
        type: "danger",
      });
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>SocialApp</Text>
      <Formik initialValues={formValues} onSubmit={formSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <Input
              placeholder="E-Mail Adresinizi Girin..."
              value={values.usermail}
              onChangeText={handleChange("usermail")}
            />
            <Input
              placeholder="Şifrenizi Girin..."
              value={values.password}
              onChangeText={handleChange("password")}
              isSecure
            />

            <Button text={'GİRİŞ YAP'} loading={loading} theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="KAYIT EKRANI" theme="secondary" onPress={goSign} />
    </SafeAreaView>
  )
}

export default Login