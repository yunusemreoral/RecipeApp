import {ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import recipes from "../data/recipe.js"
import RecipeCard from "../components/RecipeCard.jsx"

const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1,backgroundColor: "rgba(243,188,122,1)"}}>
      <ScrollView>
      <View>
        <Text style={styles.title}>Günün Tarifleri</Text>
        </View>

        {/* her bir ürününüzü gösteren ve tıkladıgınızda bizi tarif detay sayfasına yönlendiren tarif kartlarını ekrana basıyoruz*/}

        {
            recipes.map((product,sıra) => (<RecipeCard yemek={product} key={product.id} />))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    title:{
        color: "white",
        fontWeight: "900",
        fontSize: 30,
        textAlign: "center"
    },
    
})

