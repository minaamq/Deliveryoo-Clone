import { View, Text, SafeAreaView,Image,TextInput, ScrollView} from 'react-native';
import React, { useEffect, useLayoutEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {UserIcon,
ChevronDownIcon,
MagnifyingGlassIcon,
AdjustmentsVerticalIcon, } from "react-native-heroicons/outline";
import Cate from '../comps/Cate';
import FeaturedRow from '../comps/FeaturedRow';
import sanityClient from "../sanity";


const HomeScreen = () => {
    const navigation=useNavigation();
    const [featuredCategories,setFeaturedCategories]= useState([]);
    useLayoutEffect(() => {
      navigation.setOptions({
        // headerTitle: "TESTING",
        headerShown:false,
      });
  },[]);
 

useEffect(() => { 
  sanityClient.fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[]->
        }
      }
      `
      )
      .then((data) =>{
    setFeaturedCategories(data);
   });
}, []);

  return (
    <SafeAreaView>
  
         
        {/* Header */}
        <View className="flex-row pb-3 items-center  mx-4 space-x-2 px-2">
        <Image
        source={{uri: "https://links.papareact.com/wru",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">

          <Text className="font-bold text-xs text-gray-400">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
         <ChevronDownIcon size={20} color="#1FCF8C" /> 
         </Text>
         </View>
        <UserIcon size={35} color="#1FCF8C"/>
        </View>
        {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-xl">
            <MagnifyingGlassIcon color='gray' size={20}/>
          <TextInput placeholder='Restaurants and cusine'
          keyboardType='default'
           Key/>
            
          </View>
            <AdjustmentsVerticalIcon color="#1FCF8C"/>
          
        </View> 
 

        {/* BODY */}
        
        
        <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom:100,
        }}>
        
        {/* Categories */}
        <Cate/>
        {/* Featured rows */}
      {featuredCategories?.map(category=>(
        <FeaturedRow 
        key={category._id}
        id={category._id}
        title={category.name}
        description={category.short_description}
        />
      ))}
        
        
        </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen