import { StyleSheet, View, ImageBackground, Dimensions, FlatList, Text, TouchableOpacity } from 'react-native';
import React, {useRef} from 'react';

import { getAllHouses } from '../data/listing-data';
import Carousel from 'react-native-anchor-carousel';

  const featuredList = getAllHouses();

  const ListingType = ({ navigation }) =>{
    const carouselRef=useRef(null);
    //Render the carousel for the card layout to be horizontally scrollable 
    const renderCaro = ({ item, index }) => {
      if(item.featured){
        return (
      <TouchableOpacity 
        style={{height: 340, borderRadius: 10}}
        onPress={() => navigation.navigate('ListingDetailScreen', {
          detailId: item.id,
        })}
      >
          <View style={styles.Caroheader}>
            <ImageBackground 
                imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10,}}
                style={styles.Caroimage}
                source={{uri: item.keyImage}}
            >
              <View style={styles.CaropriceBox}>
                <Text style={styles.Caroprice}>${item.price}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.Carocontent}>
                  <Text style={styles.Caroaddress}>{item.address}</Text>
                  <Text style={styles.Carolocation}>{item.location}</Text>
                  <Text style={styles.Carodetails}>{item.listDetail}</Text>
          </View>
      </TouchableOpacity>
      );
    }
    else{
      return null
    }
  }
      

      return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Property Type</Text>
                <Text style={styles.headerDesc}>Find a property you can call home</Text>
            </View>
            {/* Navigation to select which type of property to view */}
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ListingsScreen' , {
                detailId: 'house',
              })}
            >
            <ImageBackground
              source={{uri: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}
              style={styles.image}
            >
              <View style={styles.content}>
              <Text style={styles.itemText}>House</Text>
              </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ListingsScreen' , {
                detailId: 'apt',
              })}
            >
            <ImageBackground
              source={{uri: 'https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}
              style={styles.image}
            >
              <View style={styles.content}>
              <Text style={styles.itemText}>Apt/Condo</Text>
              </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ListingsScreen' , {
                detailId: 'townhouse',
              })}
            >
            <ImageBackground
              source={{uri: 'https://images.unsplash.com/photo-1577593980495-6e7f66a54ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}}
              style={styles.image}
            >
              <View style={styles.content}>
              <Text style={styles.itemText}>Townhouse</Text>
              </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ListingsScreen' , {
                detailId: 'land',
              })}
            >
            <ImageBackground
              source={{uri: 'https://images.unsplash.com/photo-1421878615130-7c5243914117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'}}
              style={styles.image}
            >
              <View style={styles.content}>
              <Text style={styles.itemText}>Land/Lot</Text>
              </View>
          </ImageBackground>
          </TouchableOpacity>
          </View>

          <Text style={styles.featured}>New Listings</Text>
          {/* Carousel that displays the card layout of a new property listings */}
            <Carousel
            style={styles.carousel}
            data={featuredList}
            renderItem={renderCaro}
            initialIndex={0}

            itemWidth={Dimensions.get('window').width * 0.8}
            inActiveScale={1}
            separatorWidth={10}
            containerWidth={Dimensions.get('window').width}

            inActiveOpacity={1}

            ref={carouselRef}
            />
        </View>
      );
  }

  export default ListingType

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
    },
    header:{
        height: 100,
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    headerText:{
        fontWeight: '700',
        fontSize: 25
      },
    headerText:{
        fontSize: 25,
    },
    carousel: {
        flexGrow: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    Caroimage:{
      width: Dimensions.get('window').width * 0.8,
      height: 200,
    },
    CaropriceBox:{
      flex: 1,
      width: '100%',
      flexDirection:'row', 
      alignItems: 'flex-end',
    },
    Caroprice:{
      backgroundColor: 'black',
      color: 'white',
      paddingHorizontal: 10,
      paddingVertical: 7,
      fontSize: 20
    },
    Carocontent:{
      height: 120,
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10
    },
    Caroaddress:{
      fontSize: 18
    },
    Carolocation:{
      fontSize: 15,
      color: '#3c4450',
      marginBottom: 10
    },
    Caroheader:{
        flex:1,
        marginTop: 20,
    },
    featured:{
      marginLeft: 20,
      marginTop: 20,
      fontSize: 25
    },
    image:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  content: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center', 
      alignContent: 'stretch',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)'
  },
  item: {
    backgroundColor: '#000',
    height: (Dimensions.get('window').height- 520)/2,
    width: (Dimensions.get('window').width)/2
  },
  itemText: {
    color: '#fff',
    opacity: 1,
    fontSize: 20
  },

  });
