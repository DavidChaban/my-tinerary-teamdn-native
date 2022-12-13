import React from "react"
import {View, Image, Text} from 'react-native'



export default function CityCard({ props }){
    const City = props


return (
   
        <View  key={City.City}>
          <Text  >
            <Text >{City.name}</Text>
            <Image  src={City.photo}  alt={City.name} ></Image>

            <button >view more! </button>

            </Text>
          
            </View>

)
}






