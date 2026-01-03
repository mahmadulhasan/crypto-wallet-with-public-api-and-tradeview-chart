import React, { useEffect, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sparkline from '../component/Sparkline';
import { FlatList } from 'react-native';

const Market = () => {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

      <Text style={{ color: '#fff', fontSize: 35, fontWeight: '700', margin: 16 }}>
        Market
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginBottom: 12,
              padding: 14,
              backgroundColor: '#111827',
              borderRadius: 14,
            }}
          >
            {/* LEFT */}
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '33%' }}>
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

            {/* MIDDLE: GRAPH */}
            <View style={{ width: '30%', alignItems: 'center' }}>
              <Sparkline
                data={item.sparkline_in_7d?.price || []}
                positive={item.price_change_percentage_24h >= 0}
              />
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

export default Market;
