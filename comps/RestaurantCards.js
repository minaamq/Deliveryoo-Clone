import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon, } from 'react-native-heroicons/outline'
import { urlFor } from "../sanity";
import { useNavigation } from '@react-navigation/native';


const RestaurantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation=useNavigation();
  return (
     <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurants", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
 className="shadow bg-white mr-3  w-72 rounded-xl"
    >
        <Image
        source={{
            uri: urlFor(imgUrl).url(),
        }}
        className=" h-36 w-fit rounded-xl"
        
       />
       <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2 hover:item">{title}</Text>
        <View className="flex-row items-center space-x-1">
        <StarIcon color="red" opacity={0.6} size={22}/>
        <Text className="text-xs text-gray-500 mt-1">
            <Text className="text-red-500">{rating}</Text> . {genre}
        </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
             <MapPinIcon color="gray" opacity={0.4} size={22}/> 
            <Text className="text xs text-gray-500 w-64 justify"> Nearby . {address}</Text>
        </View>
       </View>

    </TouchableOpacity>
  );
};

export default RestaurantCards;