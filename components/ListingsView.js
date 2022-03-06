import {Text} from 'react-native-elements';

import { Dimensions, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';

// Custom component ListingsView that takes in listingData, navigationRef, and filter
const ListingsView = ({ listingData, navigatorRef, filter }) => {
  //Filters the listings to show only the property type the user selected
  if(filter == listingData.type){
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => navigatorRef.navigate('ListingDetailScreen', {
          detailId: listingData.id,
        })}
      >
          <View style={styles.header}>
            <ImageBackground 
                imageStyle={{     borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,}}
                style={styles.image}
                source={{uri: listingData.keyImage}}
            >
              <View style={styles.priceBox}>
                <Text style={styles.price}>${listingData.price}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.content}>
                  <Text style={styles.address}>{listingData.address}</Text>
                  <Text style={styles.location}>{listingData.location}</Text>
                  <Text style={styles.details}>{listingData.listDetail}</Text>
          </View>
      </TouchableOpacity>
    );
  }
  //If it doesnt match the filter it will return just a view, which is essentially nothinge
  else{
    return (
      <View></View>
    )
  }
}
export default ListingsView

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    flex:1,
    marginTop: 20,
    
  },
  image:{
    width: Dimensions.get('window').width * 0.95,
    height: 200,
  },
  priceBox:{
    flex: 1,
    width: '100%',
    flexDirection:'row', 
    alignItems: 'flex-end',
  },
  price:{
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontSize: 20
  },
  content:{
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  address:{
    fontSize: 18
  },
  location:{
    fontSize: 15,
    color: '#3c4450',
    marginBottom: 10
  },
  details:{

  },
})