import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from "@react-navigation/native";
import Currency from 'react-currency-formatter';
const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal)
    if(items.length===0) return null;
  return (
    <View className='absolute bottom-10 w-full z-50'>
        <TouchableOpacity onPress={()=>navigation.navigate("Basket")}
        className='mx-5 bg-[#1FCF8C] p-4 flex-row items-center rounded-xl space-x-1'>
           
            <Text className='text-white font-extrabold text-lg bg-[#58ab8c] py-1 px-2 '>{items.length}</Text>
            
            <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
            <Text className='text-lg text-white font-extraboldl'>
                <Currency quantity={basketTotal} Currency='GBP'/>
            </Text>
        </TouchableOpacity>
      <Text>Basketicon</Text>
    </View>
  )
}

export default BasketIcon