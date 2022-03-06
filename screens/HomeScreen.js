import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Icon} from 'react-native-elements';



//Home Screen 
const HomeScreen = ({navigation}) =>{
  return (
      <View style={styles.container}> 
      {/* Sets Image background for Home Screen */}
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/onboard.jpg')}
        >
          <View style={styles.main}>
            <View style={styles.header}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
              />
            </View>
            {/* Text and Button on the Bottom of home Screen */}
            <View style={styles.content}>
            <View style={styles.left}>
              <View>  
                <Text h1 style={styles.headingText}>Prime Realty</Text>              
              </View>
              <View>
                <Text style={styles.desc}>Life is complicated.{'\n'}Buying a home shouldn’t be</Text>
              </View>
            </View>
            <View style={styles.right}>
              {/* On press the button will navigate to the listingType page */}
              <TouchableOpacity
                  onPress={() => navigation.navigate('ListingType')}
                  style={styles.roundButton}
                >
                  <Icon
                    name='arrow-forward'
                    size={30}  
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main:{
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingBottom: 100,
    paddingTop: 125,
    paddingHorizontal: 20
  },
  header:{
    alignItems:"center"
  },
  logo:{
    width: 125,
    height: 125,
  },
  content:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  left:{
    flex: 1,
    flexDirection: 'column',
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#3c4450"
  },
  desc:{
    fontSize: 20,
    fontWeight: "bold",
  },
  roundButton:{
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#9c7e41',
    marginLeft: 10,
  },
  backgroundImage: {
    flex: 1,
  },
});