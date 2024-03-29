import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from './AppContext'
// tabs
import Home from './tabs/Home'
import Cart from './tabs/Cart'
import Favorite from './tabs/Favorite'
import Notification from './tabs/Notification'

const tabScreenOptions = ({ route }) => {
    const { cart } = useContext(AppContext);
    // console.log(cart);
    return {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: '#0C0F14'
        },

        tabBarIcon: ({ focused }) => {
            if (route.name == 'Home') {
                if (focused) {
                    return <Image source={require('../../../assets/images/ic_home.png')} />
                }
                return <Image source={require('../../../assets/images/ic_home_default.png')} />
            } else if (route.name == 'Cart') {
                if (focused) {
                    return (
                        <View>
                            <Image source={require('../../../assets/images/ic_cart.png')} />
                            <Text style={styles.Cart}>{cart.reduce((total, item) => total + item.number, 0)}</Text>
                        </View>

                    );
                }
                return (
                    <View>
                        <Image source={require('../../../assets/images/ic_cart_default.png')} />
                        <Text style={styles.Cart}>{cart.reduce((total, item) => total + item.number, 0)}</Text>
                    </View>

                );
            }
            else if (route.name == 'Favorite') {
                if (focused) {
                    return <Image source={require('../../../assets/images/ic_favorite.png')} />
                }
                return <Image source={require('../../../assets/images/ic_favorite_default.png')} />
            } else if (route.name == 'Notification') {
                if (focused) {
                    return <Image source={require('../../../assets/images/ic_notification.png')} />
                }
                return <Image source={require('../../../assets/images/ic_notification_default.png')} />
            }
        },
        tabBarLabel: ({ focused }) => {
            if (route.name == 'Home') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Home</Text>
                }
            } else if (route.name == 'Cart') {
                if (focused) {
                    return (<Text style={{ color: '#D17842' }}>Cart</Text>
                    );
                }
            }
            else if (route.name == 'Favorite') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Favorite</Text>
                }
            }
            else if (route.name == 'Notification') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Notification</Text>
                }
            }
        }
    }
}


const Tab = createBottomTabNavigator();
const MainTabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
    )
}

// stacks
import Detail from './stacks/Detail'
import Payment from './stacks/Payment'
import Settings from './stacks/Settings'
import Personal from './stacks/Personal'
import History from './stacks/History'
import Address from './stacks/Address'
import Login from '../authen/Login'
import About from './stacks/About'
import Help from './stacks/Help'
import Register from '../authen/Register'
const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({
    Cart: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 4,
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: 'white',
        fontSize: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})