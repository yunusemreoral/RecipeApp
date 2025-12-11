import { View, Text,Image, Dimensions,StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import recipes from '../data/recipe'
import { ArrowLeft, Clock, Profile2User, RecordCircle } from 'iconsax-react-nativejs'


const RecipeScreen = ({route,navigation}) => {

  //* diğer sayfalarda bize gönderilen parametrelere erişebilmek için "route" nesnesini kullanırız.

  // ? burada diğer sayfalardan recipescreen'e "id" ismiyle gönderilmiş parameteryi aldık ve "id" adında bir değişkende  tuttuk.
  const id = route.params.id;

  {/* recipe tariflerinde bize gönderilen ıd ile parametreden gelen ıd aynı olsun*/}
  const recipe = recipes.find((item) => item.id == id)

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "rgba(243,188,122,1)"}}>

      {/* resmin kapsayıcı */}
      <View style={{position:"relative"}}>
      <Image source={recipe.image} style={styles.image} resizeMode='stretch' />
    
    {/* resmin üstünde yüzen buton*/}
    <TouchableOpacity style={styles.floatBtn}
    onPress={()=>navigation.goBack()}>
      <ArrowLeft size="42" color='white'/>
    </TouchableOpacity>
    
      </View>
       {/*ürün başlığı */}
        <Text style={styles.recipeName}>{recipe.title} </Text>

        {/* geri kalan detay alanları*/}
      <ScrollView style={{flex: 1}}>
        {/* ürün açıklaması */}
        <Text style={styles.description}>{recipe.description} </Text>

        {/* kaç kişilik ve hazırlanış süresi kutucukları */}
        <View style={styles.detailBoxContainer}>
          <View style={styles.detailBox}>
<Profile2User style={styles.detailBox} size="30" color='white'/>
<Text style={styles.detailText}>{recipe.servings} </Text>
          </View>

          <View style={styles.detailBox}>
<Clock style={styles.detailBox} size="30" color='white'/>
<Text style={styles.detailText}>{recipe.prepTime}dk</Text>
          </View>
        </View>


<View>
  <Text style={styles.ingredientTitle}>Gerekli Malzemeler</Text>

  {recipe.ingredients.map((item,key)=>(
    <View
    key={key}
    style={{flexDirection: "row",alignItems:"center",gap: 5,paddingLeft: 20}}>
      <RecordCircle size="14" color='gray' variant='Bulk'/>
      <Text style={styles.ingredientText}>{item} </Text>
      </View>))}
</View>
      </ScrollView>
    
    </SafeAreaView>
  )
}

export default RecipeScreen

const styles = StyleSheet.create({
    image:{
      width: Dimensions.get("screen").width,
      height: Dimensions.get("screen").height * 0.25,
      borderBottomWidth: 5,
      borderColor: "rgb(0,0,0,0.3)"
    },
    floatBtn:{
      top: 5,
      left: 10,
      position:"absolute",
      borderWidth: 3,
      borderRadius: "50%",
      borderColor: "white",
      padding: 3,
      backgroundColor: "rgb(0,0,0,0.3)"
    },
    recipeName:{
      fontSize: 30,
      color: "rgb(73,73,73,1)",
      fontWeight: 600,
      textAlign: "center",
      padding: 10,
      borderBottomWidth: 3,
      borderColor: "white",
      backgroundColor: "rgba(255,255,255,0.98)"
    },
    description:{
      fontSize: 18,
      textAlign: "center",
      marginTop: 10,
    },
    detailBoxContainer:{
      flexDirection: "row",
      gap: 10,
      marginHorizontal: "20%",
      marginTop: 15
    },
    detailBox:{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      backgroundColor: "rgba(40,135,250,1)",
      flex:1,
      padding: 10,
      borderRadius: 10
    },
    detailText:{
      fontSize: 18,
      color: "white"
    },
    ingredientTitle:{
      textAlign: "center",
      fontSize: 20,
      color: "black",
      marginVertical: 15,
      borderBottomWidth: 2,
      borderColor: "rgba(0,0,0,0.1)",
      paddingBottom: 15
    },
    ingredientText:{
      color: "rgba(42,42,42,1",
      marginHorizontal: 20,
      marginVertical: 5,
      fontSize: 17,
      transform: "translate"
    }
    
})
