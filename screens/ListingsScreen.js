import { StyleSheet, View, FlatList } from 'react-native';

import { Text } from 'react-native-elements';

import ListingsView from '../components/ListingsView.js';

import { getAllHouses } from '../data/listing-data';

//Listings Screen which displays a filtered list of the property the user selects
const ListingsScreen = ({route, navigation}) =>{

    const filterItem = route.params.detailId;

    //Receiving item as an array to be used inside a prop of the component
    const renderItem = ({item}) => (
        //Using a custom componenet it takes 3 props listingData, navigatorRef, and filter
        <ListingsView listingData={item} navigatorRef={navigation} filter={filterItem}/>
    );
    return (
        <View style={styles.container}>
            <Text h3 style={styles.heading}>Browse your Future Home</Text>
            {/* Using a flat list to loop through all the array items and sends the data to be rendered */}
            <FlatList
                data={getAllHouses()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default ListingsScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    heading: {
        margin: 10,
    }
});