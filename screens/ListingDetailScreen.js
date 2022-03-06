import React, { useState, useRef } from 'react';

import { StyleSheet, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import { Image, Text, Button, Icon, FAB, Overlay } from 'react-native-elements';

import Carousel from 'react-native-anchor-carousel';

import { getHousingTypeById } from '../data/listing-data';

const ListingDetailScreen = ({route}) => {

  const [visibleAlert, setVisibleAlert] = useState(false);

  const carouselRef = useRef(null);

  const {width: windowWidth} = Dimensions.get('window');

  const { detailId } = route.params;

  const currListing = getHousingTypeById(detailId);

  //Loops through the datalist of pricing Details and returns the name and value on the page
  const priceDetails = currListing.priceDetails.map((currList) =>
    <View key={currList.key} style={styles.listItem}>
      <Text style={styles.name}>{currList.name}</Text>
      <Text style={styles.value}>${currList.value}</Text>
    </View>
  );
  //Loops through the datalist of home Details and returns the name and value on the page
  const homeDetails = currListing.homeDetails.map((currList) =>
    <View key={currList.key} style={styles.listItem}>
      <Text style={styles.name}>{currList.name}</Text>
      <Text style={styles.value}>{currList.value}</Text>
    </View>
  );
  //Displays the carousel content, using the props (item gets brought up as the image link)
  const renderItem = ({ item, index }) => ( 
    <TouchableOpacity 
      activeOpacity={.7} 
      style={[styles.caroItem]} 
      onPress={() => { 
        carouselRef.current.scrollToIndex(index); 
      }}>
        <View style={{flex:1}}>
          <Image 
            style={styles.caroImage}
            source={{ uri: item }} 
          /> 
        </View>
    </TouchableOpacity> 
  );

  return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.price}>${currListing.price}</Text>
            <Text style={styles.address}>{currListing.address}</Text>
            <Text style={styles.location}>{currListing.location}</Text>
            <Text style={styles.listDetail}>{currListing.listDetail} • {currListing.type}</Text>
          </View>
          {/* Creates a carousel element which needs data and render type. Data is being taken from the data lists otherImage array */}
          <Carousel
            style={styles.carousel}
            data={currListing.otherImage}
            renderItem={renderItem}
            initialIndex={0}

            itemWidth={windowWidth * 0.7}
            inActiveScale={1}
            seperatorWidth={15}
            containerWidth = {windowWidth}
            inActiveOpacity = {0.3}

            ref={carouselRef}
            />
          <View style={styles.addDetail}>
            <Text>{currListing.desc}</Text>

            <View style={styles.list}>
              <Text style={styles.headerText}>Pricing Details</Text>
              {priceDetails}
            </View>
            <View style={styles.list}>
              <Text style={styles.headerText}>Property Details</Text>
              {homeDetails}
            </View>
          </View>

        </ScrollView>
        {/* Displays a Button to trigger an overlay */}
        <FAB
          onPress={() => setVisibleAlert(true)}
          placement="right"
          color='#9c7e41'
          icon={{
            type: 'ionicon',
            name: 'person-circle-outline',
            color: '#3c4450'
          }}
        />
        {/* Once the FAB button triggers the overlay will show */}
        <Overlay isVisible={visibleAlert} >
          <Text h3>Interested?</Text>

          <Text style={styles.modalText}>
            Book an appointment for the viewing of this property along with a full walkthrough on the property.
          </Text>
          <View style={{height: 100, justifyContent:'space-between' }}>
            <Button
              title="Book Now"
              onPress={() => setVisibleAlert(false)}
              disabled
              style={{width:'80%', alignSelf: 'center'}}
            />
            <Button
              title="Close"
              onPress={() => setVisibleAlert(false)}
              style={{width:'80%', alignSelf: 'center'}}
            />
          </View>
        </Overlay>
      </View>
  );
}
export default ListingDetailScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fdfbf7'
  },
  header:{
    padding: 15
  },
  price:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  address:{

  },
  location:{
    marginBottom: 10
  },
  listDetail:{

  },
  carousel:{
    flexGrow: 0,
    height: 200,
    paddingVertical: 15
  },
  caroItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  caroImage:{
    width: Dimensions.get('window').width * 0.7,
    height: 200
  },
  addDetail:{
    padding: 15
  },
  headerText:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  list:{
    paddingTop: 25,
    borderBottomWidth: 1,
    borderColor: '#d1d1d1'

  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#d1d1d1'
  },
  name:{
    fontWeight: 'bold',
    flexBasis: Dimensions.get('window').width/2
  },
  value:{
    flexBasis: Dimensions.get('window').width/2
  },
  modalText:{
    marginBottom: 50
  }

});