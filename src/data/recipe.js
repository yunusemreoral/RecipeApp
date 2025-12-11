const recipes = [
  {
    id: 1,
    image: require('../assets/images/images-1.jpg'),
    title: "Tiramisu",
    servings: 6,
    prepTime: 30,
    ingredients: [
      "Kedi dili bisküvi",
      "Mascarpone peyniri",
      "Yumurta",
      "Toz şeker",
      "Süt",
      "Demlenmiş kahve veya espresso",
      "Kakao",
      "Vanilin veya vanilya özü"
    ],
    description:
      "Kahveyle ıslatılmış kedi dili bisküviler ve mascarpone kremasının kat kat dizilmesiyle hazırlanan, soğuk servis edilen klasik İtalyan tatlısı."
  },
  {
    id: 2,
    image: require('../assets/images/images-2.jpg'),
    title: "Hünkarbeğendi",
    servings: 4,
    prepTime: 60,
    ingredients: [
      "Kuzu eti veya dana kuşbaşı",
      "Patlıcan",
      "Tereyağı",
      "Un",
      "Süt",
      "Kaşar peyniri veya eski kaşar",
      "Domates",
      "Biber",
      "Soğan",
      "Sarımsak",
      "Tuz",
      "Karabiber"
    ],
    description:
      "Közlenmiş patlıcanla hazırlanan beşamel tarzı püre üzerine sotelenmiş etlerin yerleştirildiği, Osmanlı mutfağından klasik bir ana yemek."
  },
  {
    id: 3,
    image: require('../assets/images/images-3.jpg'),
    title: "İçli Köfte",
    servings: 4,
    prepTime: 90,
    ingredients: [
      "İnce bulgur",
      "İrmik (opsiyonel)",
      "Un",
      "Yumurta",
      "Tuz",
      "Kıyma (iç harcı için)",
      "Soğan",
      "Ceviz içi",
      "Tereyağı veya sıvı yağ",
      "Karabiber",
      "Pul biber",
      "Kimyon"
    ],
    description:
      "Dış kısmı ince bulgurlu hamur, içi ise kavrulmuş kıyma, soğan ve cevizle doldurulan; haşlanarak veya kızartılarak servis edilen geleneksel bir lezzet."
  },
  {
    id: 4,
    image: require('../assets/images/images-4.jpg'),
    title: "Karnıyarık",
    servings: 4,
    prepTime: 50,
    ingredients: [
      "Patlıcan",
      "Kıyma",
      "Soğan",
      "Sarımsak",
      "Domates",
      "Yeşil biber",
      "Domates salçası",
      "Maydanoz",
      "Sıvı yağ",
      "Tuz",
      "Karabiber"
    ],
    description:
      "Kızartılmış veya fırınlanmış patlıcanların ortası açılarak kıymalı harçla doldurulması ve sosla birlikte pişirilmesiyle hazırlanan klasik bir Türk yemeği."
  },
  {
    id: 5,
    image: require('../assets/images/images-5.jpg'),
    title: "Revani",
    servings: 8,
    prepTime: 45,
    ingredients: [
      "Yumurta",
      "Toz şeker",
      "Sıvı yağ",
      "Yoğurt",
      "Irmik",
      "Un",
      "Kabartma tozu",
      "Vanilin",
      "Su (şerbet için)",
      "Limon suyu veya limon kabuğu rendesi"
    ],
    description:
      "İrmikli yumuşak keki, şerbetle buluşturulan; üzerine isteğe göre hindistan cevizi veya fıstık serpilerek servis edilen geleneksel şerbetli tatlı."
  },
  {
    id: 6,
    image: require('../assets/images/images-6.jpg'),
    title: "Sarma",
    servings: 6,
    prepTime: 70,
    ingredients: [
      "Asma yaprağı",
      "Pirinç",
      "Soğan",
      "Zeytinyağı",
      "Maydanoz",
      "Dereotu (opsiyonel)",
      "Nane (taze veya kuru)",
      "Tuz",
      "Karabiber",
      "Limon"
    ],
    description:
      "İnce asma yapraklarının, içi pirinçli ve bol yeşillikli harçla sarılmasıyla hazırlanan; zeytinyağlı olarak soğuk ya da etli versiyonuyla sıcak servis edilebilen bir meze/ana yemek."
  },
    {
    id: 7,
    image: require('../assets/images/images-6.jpg'),
    title: "Sarma",
    servings: 6,
    prepTime: 70,
    ingredients: [
      "Asma yaprağı",
      "Pirinç",
      "Soğan",
      "Zeytinyağı",
      "Maydanoz",
      "Dereotu (opsiyonel)",
      "Nane (taze veya kuru)",
      "Tuz",
      "Karabiber",
      "Limon"
    ],
    description:
      "İnce asma yapraklarının, içi pirinçli ve bol yeşillikli harçla sarılmasıyla hazırlanan; zeytinyağlı olarak soğuk ya da etli versiyonuyla sıcak servis edilebilen bir meze/ana yemek."
  }
];

export default recipes;