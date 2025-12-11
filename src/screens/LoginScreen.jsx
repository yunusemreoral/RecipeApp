import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions} from 'react-native'
import React, {useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'



const LoginScreen = () => {

const navigation = useNavigation()

const [number,setNumber] = useState(Math.round(Math.random()*5)+1)


const images = [
    require("../assets/images/images-1.jpg"),
    require("../assets/images/images-2.jpg"),
    require("../assets/images/images-3.jpg"),
    require("../assets/images/images-4.jpg"),
    require("../assets/images/images-5.jpg"),
    require("../assets/images/images-6.jpg"),
]

  return (
    <SafeAreaView style={{flex: 1,position: "relative"}}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Tarif Uygulaması</Text>
        </View>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity 
            style={styles.button}
            onPress={()=>navigation.navigate("HomeScreen")}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
      </View>

      {/* arka plan resmi */}
      <Image 
      style={styles.backgroundImage} 
      // yukardaki ımages diizsinden rastgele 0 ile 5 arası değer seç
      source={images[Math.round(Math.random()*5)]}
      resizeMode='stretch'/>
      {/* arka plan resminin önüne çekilecek filtre */}
      <View style={styles.backgroundCover}></View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
    },
    titleWrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
   buttonWrapper:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
},
button:{
    backgroundColor: "transparent",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: "rgba(255,255,255,0.4)",
    borderWidth: 4
},
buttonText:{
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: 15
},
backgroundImage:{
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    zIndex: -2,
},
backgroundCover:{
 position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    zIndex: -1,
    backgroundColor: "rgb(0,0,0,0.4)"
}
})