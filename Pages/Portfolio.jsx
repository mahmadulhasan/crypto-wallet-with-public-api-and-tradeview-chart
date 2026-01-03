import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import PortfolioChart from '../component/portfolioChart'

const Portfolio = () => {
  const [data, setData] = useState([]);
  const tabBarHeight = useBottomTabBarHeight();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=24h"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* HEADER */}
      <Text
        style={{
          color: "#fff",
          fontSize: 35,
          fontWeight: "700",
          margin: 16,
        }}
      >
        Portfolio
      </Text>

      {/* WALLET CARD */}
      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 25,
          padding: 20,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#ffffff31",
          backgroundColor: "#ffffff0c",
          gap: 10,
        }}
      >
        <Text
          style={{ color: "#797878ff", fontSize: 15, fontWeight: "bold" }}
        >
          Current Balance
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <FontAwesome name="dollar" size={17} color="#797878ff" />
          <Text
            style={{ color: "#fff", fontSize: 23, fontWeight: "bold" }}
          >
            12,345.654 USDT
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Feather name="arrow-down-right" size={14} color="#ff0000ff" />
          <Text
            style={{ color: "#ff0000ff", fontSize: 14, fontWeight: "bold" }}
          >
            -30.92%
          </Text>
          <Text style={{ color: "#797878ff", fontSize: 14 }}>
            7 Days
          </Text>
        </View>
      </View>

      <PortfolioChart />

      {/* SECTION TITLE */}
      <Text
        style={{
          fontSize: 30,
          color: "#00ffeaff",
          fontWeight: "800",
          marginHorizontal: 10,
          marginBottom: 10,
        }}
      >
        Your Assets
      </Text>

      <View style={{paddingHorizontal:30, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{color:'#555'}}>Coin</Text>
        <Text style={{color:'#555'}}>Price</Text>
        <Text style={{color:'#555'}}>Holding</Text>
      </View>

      {/* ASSET LIST */}
      <FlatList
        data={Array.isArray(data) ? data.slice(0, 10) : []}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: tabBarHeight + 20,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginBottom: 10,
              padding: 14,
              backgroundColor: "#111827",
              borderRadius: 14,
            }}
          >
            {/* LEFT */}
            <View
              style={{ flexDirection: "row", alignItems: "center", width: "33%" }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 36, height: 36, marginRight: 10 }}
              />
              <View>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item.symbol.toUpperCase()}
                </Text>
                <Text style={{ color: "#9ca3af", fontSize: 13 }}>
                  {item.name}
                </Text>
              </View>
            </View>

            {/* middle */}
            <View style={{ alignItems: "center", width:'33%' }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                ${item.current_price.toLocaleString()}
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color:
                    item.price_change_percentage_24h >= 0
                      ? "#22c55e"
                      : "#ef4444",
                }}
              >
                {item.price_change_percentage_24h >= 0 ? "+" : ""}
                {item.price_change_percentage_24h?.toFixed(2)}%
              </Text>
            </View>

            <View style={{ alignItems: "flex-end", width:'33%' }}>
              <Text style={{color:'#fff'}}>{'---'}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Portfolio;
