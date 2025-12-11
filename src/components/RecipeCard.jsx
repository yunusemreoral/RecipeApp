import { StyleSheet, Text, Pressable,Image, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Clock, Profile2User } from 'iconsax-react-nativejs';

const RecipeCard = ({yemek}) => {

    const navigation = useNavigation();

  return (
               <Pressable 
               
               //* şuan her bir kartınız tıkladığımızda bizi aynı sayfaya yönlendiriyor,fakat bizim o sayfada hangi ürün tıkladıysak o ürünün detayına erişebilmemiz gerekiyor.
               
               //^ bunun için tıkaldıgımız her ürünü birbirimizden ayırt edebileceğimiz bir bilgi göndermemiz gerekiyor.

               //? sayfalar arası bilgi aktarımı parametre ile olur.React navigation'da parametre vermek için navigation.navigate'den sonra bir nesne belirlenir ve içine parametre konur.
               
               //! dikkat edilmesi gereken bir husus bu tarz veri alışverişi ile gönderibilecek veri türleri sınırlıdır (mesela fonskiyon veya obje göndermek) genellikle tavsiye edilmez.Bunun yerine
               onPress={()=> navigation.navigate("RecipeScreen",{id: yemek.id})}
                style={styles.yemekCard}>
                    <Image style={styles.yemekImage} source={yemek.image}/>
                    <View style={styles.detailsWrapper}>
                    <Text style={styles.yemekTitle} >{yemek.title} </Text>
                   

                    <View style={styles.detailsRight} >
                        <View style={styles.detail}>
                        <Profile2User size="20" color='gray'/>
                        <Text style={styles.detailText}>{yemek.servings} </Text>
                        </View>
                        <View style={styles.detail}>
                        <Clock size="20" color='gray'/>
                        <Text style={styles.detailText}>{yemek.prepTime} </Text>
                        </View>
                    </View>
                     </View>
                </Pressable>
  )
}

export default RecipeCard

const styles = StyleSheet.create({
    yemekCard:{
        borderWidth: 5,
        borderRadius: 15,
        borderColor: "rgba(0,0,0,0.15)",
        margin: 10,
        backgroundColor: "rgba(255, 255, 255, 1)",
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowRadius: 3,
       shadowOffset: { width: 0, height: 3}
    },
    yemekImage:{
          height: 200,
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
    },
   yemekTitle:{
    borderRadius: 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    fontSize: 24,
    marginTop: 10,
    fontWeight: "800",
    color: "rgba(79,79,79,1)"
   },
   detailsWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15
   },
   detailsRight:{
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
   },
   detail:{
    flexDirection: "row",
    alignItems: "center",
    gap: "5"
   },
   detailText:{
    fontSize: 16,
    fontWeight:800,
    color: "rgb(65,65,65,1)"
   }
})