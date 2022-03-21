import React,  { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getProducts } from '../Products';
import { CartContext, CartProvider } from '../providers/CartContext';

const BagItem = (props) => {
    const element = props.element;
    return(
        <View style={styles.card}>
            <View style={{flexDirection:'row', margin: 10, minHeight: 100, alignItems: 'center'}}>
                <Image style={{height: 64, width: 72, borderRadius: 6, marginTop: 16, marginLeft: 10, marginRight: 8}} source={element.image}/>
                <View style={{flexDirection: 'column', marginLeft: 12, padding: 2}}>
                    <Text style={{fontWeight: 'bold', color: 'black'}}>{element.name}</Text>
                    <Text style={{marginTop: 2}} >{element.description}</Text>
                    <View style={{flexDirection: 'row', marginTop: 16, marginLeft: 16, alignItems: 'center'}}>
                        <Image style={{height: 5, marginTop: 4}} source={require('../images/remove.png')}/>
                        <Text style={{marginLeft: 20, marginRight: 20}}>1</Text>
                        <Image style={{height: 16, width: 16, marginTop: 4}} source={require('../images/add.png')}/>
                    </View>
                </View>
                <View style={{flex: 1}}/>
                <View style={{flexDirection: 'column', marginLeft: 10, padding: 2, alignItems: 'flex-end', marginRight: 10}}>
                    <Image style={{marginTop: 8}} source={require('../images/cross.png')}/>
                    <View style={{flex: 1}}/>
                    <Text style={{ fontWeight: 'bold', padding: 4, marginBottom: 8}}>₹ {element.price}</Text>
                </View>
            </View>
        </View>
    )
}

export default function Bag({navigation}){
    const items = getProducts();
    return(
        <View style={{flex: 1}}>
            <ScrollView >
                <View>
                    {items.map((element, i) => {     
                        //alert(element['name']);                     
                        return (<BagItem key={element['id']} element={element} />) 
                    })}
                </View>
            </ScrollView>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <View style={{flex: 1}}></View>
                <Text style={{alignSelf: 'center', color: 'white', fontWeight: 'bold'}}>Go to Checkout</Text>
                <View style={{flex: 1}}></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        margin: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E2E2'
    }
})