import { View, Text,TouchableOpacity,Image,ScrollView,SafeAreaView} from 'react-native'
import React , {useEffect, useMemo,useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'



const BasketScreen = () => {
    const restaurant=useSelector(selectRestaurant);
    const navigation = useNavigation();
    const items=useSelector(selectBasketItems);
    const basketTotal=useSelector(selectBasketTotal)
    const [groupedItemsInBasket,setGroupedItemsInBasket]=useState([]);
    const dispatch = useDispatch();
    // useMemo(()=>{
        
    // },[items])
    useEffect(()=>{
        const groupedItems=items.reduce((results,item)=>{
            (results[item.id] = results[item.id] || []).push(item);
            return results;
    },{});
    setGroupedItemsInBasket(groupedItems);
    },[items])

  return (
    <SafeAreaView className='flex-1 bg-white'>
        <View className='flex-1 bg-gray-100'>
            <View className='p-5 border-b border-[#1FCF8C] bg-white shadow-xs'>
                <View>
                    <Text className='text-lg font-bold text-center'>Basket</Text>
                    <Text className='text-center text-gray-400'>
                        {restaurant.title}
                    </Text>
                </View>
                <TouchableOpacity
                onPress={navigation.goBack}
                className='rounded-full bg-gray-100 absolute top-3 right-5'>
                    <XCircleIcon color='#1FCF8C' height={50} width={50}/>

                </TouchableOpacity>
            </View>
            <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                <Image source={{
                    uri: "https://links.papareact.com/wru",
                    
                }}
                className ='h-7 w-7 bg-gray-300 p-4 rounded-full'
                />
                <Text className='flex-1'>Deliver in 50-70 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#1FCF8C]">Change</Text>
                </TouchableOpacity> 
            </View>
            <ScrollView className=' divide-y divide-gray-200'>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                    <View key={key}
                    className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text > {items.length} x</Text>
                      <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-xl"
              />
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <TouchableOpacity>
                            <Text className='text-[#1FCF8C] text-xs'
                            onPress={() => dispatch(removeFromBasket({id: key}))}
                            >Remove</Text>
                        </TouchableOpacity>
                    </View>

                ))}
            </ScrollView>
                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>
                        <Currency quantity={basketTotal} currency='GBP'/>
                        </Text>
                    </View>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Fee</Text>
                <Text className='text-gray-400'>
                <Currency quantity={1.99} currency='GBP'/>
                </Text>
            </View>
            <View className='flex-row justify-between'>
                <Text>Order Total Fee</Text>
                <Text className='font-extrabold'>
                <Currency quantity={basketTotal+1.99} currency='GBP'/>
                </Text>
            </View>
            <TouchableOpacity className='rounded-lg bg-[#1FCF8C] p-4'
            onPress={() => navigation.navigate("PreparingOrderScreen")} >
                <Text className=' text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>
                    
                </View>
        </View>

    </SafeAreaView>
  )
}

export default BasketScreen;