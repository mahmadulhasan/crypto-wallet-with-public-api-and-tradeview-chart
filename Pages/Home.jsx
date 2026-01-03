import React, { useEffect } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import TradingViewChart from '../component/TradingViewChart';



const Home = () => {
  const navigation = useNavigation();

  const [data, setData] = React.useState([]);
  const [KData, setKData] = React.useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=24h'
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchKData = async () => {
    try {
      const responce = await fetch('https://api-mainnet.k.exchange/api/marketSummaryAll.js')
      const result = await responce.json()
      setKData(result.summary["KNCH-USDT"])

    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    fetchData();
    fetchKData()
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

      {/* WALLET CARD */}
      <View
        style={{
          position: 'relative',
          flexDirection: 'column',
          gap: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: '#ffffff31',
          backgroundColor: '#ffffff0c',
          borderRadius: 30,
          padding: 20,
          paddingBottom: 45, // space for buttons
          marginBottom: 30,
        }}
      >
        <Text style={{ color: '#797878ff', fontSize: 15, fontWeight: 'bold' }}>
          YOUR WALLET
        </Text>

        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FontAwesome name="dollar" size={17} color="#797878ff" />
          <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold' }}>
            12345.654 USDT
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
          }}
        >
          <Feather name="arrow-down-right" size={12} color="#ff0000ff" />
          <Text style={{ color: '#ff0000ff', fontSize: 14, fontWeight: 'bold' }}>
            -30.92%
          </Text>
          <Text style={{ color: '#797878ff', fontSize: 14 }}>
            7 Days
          </Text>
        </View>

        {/* FLOATING ACTION BUTTONS */}
        <View
          style={{
            position: 'absolute',
            bottom: -22.5,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              height: 45,
              width: 160,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              flexDirection: 'row',
              gap: 5
            }}
          >
            <EvilIcons name="sc-telegram" size={30} color="black" />
            <Text>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#ffffff',
              height: 45,
              width: 160,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              flexDirection: 'row',
              gap: 5
            }}
          >
            <Entypo name="arrow-with-circle-down" size={25} color="black" />
            <Text>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TradingViewChart symbol={'KNCHUSD'} style={{ height: '100%', overflow: 'hidden' }} />

      {/* kaanch data */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 5,
          padding: 14,
          backgroundColor: '#111827',
          borderRadius: 14,
        }}
      >
        {/* LEFT */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%' }}>
          <Image
            source={require('../assets/klogo.png')}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
          <View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              {KData.assetPair}
            </Text>
            <Text style={{ color: '#9ca3af', fontSize: 13 }}>
              {'KAANCH NETWORK'}
            </Text>
          </View>
        </View>

        {/* RIGHT */}
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
            ${KData.price}
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color:
                KData.changePercent24h >= 0
                  ? '#22c55e'
                  : '#ef4444',
            }}
          >
            {KData.changePercent24h >= 0 ? '+' : ''}
            {KData.changePercent24h}%
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ margin: 10, paddingLeft: 5 }}>
        <Text style={{ fontSize: 30, color: '#00ffeaff', fontWeight: '800', }}>
          Other Top CryptoCurrency
        </Text>
      </View>


      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Trade', { coin: item })}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              marginBottom: 10,
              padding: 14,
              backgroundColor: '#111827',
              borderRadius: 14,
            }}
          >
            {/* LEFT */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%' }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 36, height: 36, marginRight: 10 }}
              />
              <View>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                  {item.symbol.toUpperCase()}
                </Text>
                <Text style={{ color: '#9ca3af', fontSize: 13 }}>
                  {item.name}
                </Text>
              </View>
            </View>

            {/* RIGHT */}
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                ${item.current_price.toLocaleString()}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color:
                    item.price_change_percentage_24h >= 0
                      ? '#22c55e'
                      : '#ef4444',
                }}
              >
                {item.price_change_percentage_24h >= 0 ? '+' : ''}
                {item.price_change_percentage_24h?.toFixed(2)}%
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />


      <View style={{ height: 50 }}></View>


    </SafeAreaView>
  );
};

export default Home;
