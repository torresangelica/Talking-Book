import { View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) => {
  return (
    <View>
      <Image style={{width:20}}
        source={icon}
        resizeMode="contain"
        className="w-1 h-1"
        tintColor={color}
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          )
        }}
        /> //end of Home Icon

        <Tabs.Screen
        name="library"
        options={{
          title:'Library',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.library}
              color={color}
              name="Library"
              focused={focused}
            />
          )
        }}
        /> //end of Library Icon

        <Tabs.Screen
        name="search"
        options={{
          title:'Search',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.search}
              color={color}
              name="Search"
              focused={focused}
            />
          )
        }}
        /> //end of Search Icon

        <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          )
        }}
        /> //end of Profile Icon

      </Tabs>
    </>
  )
}

export default TabLayout