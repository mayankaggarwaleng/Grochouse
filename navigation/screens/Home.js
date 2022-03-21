import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SearchBar } from 'react-native-elements/dist/searchbar/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { round } from 'react-native-reanimated';
import { Button } from 'react-native-elements/dist/buttons/Button';

const MiniShopItem = () => {
    return(
        <View style={{flexDirection:'row', margin: 10}}>
            <Image style={{height: 60, width: 60, borderRadius: 6}} source={require('../images/shop_img.png')}/>
            <View style={{flexDirection: 'column', marginLeft: 4, padding: 2}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>Jain Kirana Store</Text>
                <Text style={{marginTop: 2}} >1.5 km</Text>
                <Image style={{marginTop: 4}} source={require('../images/star.png')}/>
            </View>
        </View>
    )
}

const ExpandedShopItem = () => {
    return(
        <View style={{flexDirection: 'row', margin:10, borderWidth: 1, borderColor: 'red', height: 100, borderRadius: 24, alignItems:'center'}}>
            <Image style={{height: 70, width: 70, borderRadius: 24, marginStart: 12}} source={require('../images/expanded_shop_img.png')}/>
            <View style={{flexDirection: 'column', marginLeft: 10, padding: 2}}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>Vendor Store 1</Text>
                <Text style={{marginTop: 2}} >Vendor Store Address</Text>
                <Text style={{marginTop: 2}} >1.5 km</Text>
                <Image style={{marginTop: 4}} source={require('../images/star.png')}/>
            </View>
            <View style={{flexDirection: 'column', marginLeft: 10, padding: 2}}>
                <Image style={{marginTop: 8}} source={require('../images/phone.png')}/>
                <View style={{flex: 1}}/>
                <Text style={{backgroundColor: 'red', color: 'white', fontWeight: 'bold', padding: 4, marginBottom: 8}}>15% Discount</Text>
            </View>
        </View>
    )
}

export default function Home({navigation}){
    const [selectedAddress, setSelectedAddress] = useState('home');
    const [search, setSearch] = useState("Search  vendor , or product ...");

    const updateSearch = (search) => {
        setSearch(search);
    }

    const num = [1,2,3,4,5,6,7];

    return(
        <ScrollView>
            <View style={styles.addressView}>

                <Image source={require('../images/location_icon.png')}/>

                <Picker
                    selectedValue={selectedAddress}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedAddress(itemValue)}>
                    <Picker.Item label="Home" value="home" />
                    <Picker.Item label="Office" value="office" />
                    <Picker.Item label="Other" value='other'/>
                </Picker>

            </View>

            <SafeAreaView>
                <TextInput
                    style={styles.searchView}
                    onChangeText={text => updateSearch(text)}
                    value={search}
                />
            </SafeAreaView>

            <Image style={styles.offer_img} source={require('../images/home_offer_bg.png')}/>

            <View style={styles.name}>
                <Text>Favourite Store</Text>
                <View style={{flex: 1}}/>
                <Text style={{color: 'red'}}>History</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <MiniShopItem/>
                <MiniShopItem/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <MiniShopItem/>
                <MiniShopItem/>
            </View>

            <View style={styles.name}>
                <Text style={{marginTop: 10}}>Store Near You</Text>
            </View>

            <View style={{marginTop: 5}}>
                {num.map((element, i) => {
                    return(<ExpandedShopItem key={i}/>)
                })}
            </View>

        </ScrollView>
    )
};

const full_width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    addressView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10
    },
    container: {
        flexDirection: 'column',
        padding: 2
    },
    searchView: {
        height: 40,
        marginLeft: 12,
        marginRight: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    offer_img: {
        margin: 12,
        width: full_width-24
    },
    name: {
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 12
    }
});