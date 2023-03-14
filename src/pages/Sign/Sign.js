import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Sign.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'
import ErrorMessage from '../../utils/ErrorMessage'

const formValues = {
  usermail: "",
  password: "",
  repassword: "",
}

const Sign = ({ navigation }) => {

  const [loading, setLoading] = useState(false)

  const goLogin = () => {
    navigation.navigate('Login')
  }
  const formSubmit = async (formValues) => {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: "şifreler uyuşmuyor",
        type: "danger"
      })
      return
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password
      );
      showMessage({
        message: "Kullanıcı oluşturuldu",
        type: "success",
      });
      navigation.navigate("Login")
      setLoading(false)
    } catch (error) {
      showMessage({
        message: ErrorMessage(error.code),
        type: "info",
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
            <Input
              placeholder="Şifrenizi Tekrar Girin..."
              value={values.repassword}
              onChangeText={handleChange("repassword")}
              isSecure
            />
            <Button text={'KAYIT OL'} loading={loading} theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="GİRİŞ EKRANI" theme="secondary" onPress={goLogin} />
    </SafeAreaView>
  )
}

export default Sign