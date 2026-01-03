import React from 'react'
import { View, Text, ScrollView } from "react-native";

const Orderbook = () => {
    const orderBookData = {

  sell: [
    { price: "0.093", qty: "122.00", total: "11.35" },
    { price: "0.092", qty: "126.00", total: "11.59" },
    { price: "0.091", qty: "120.00", total: "10.92" },
    { price: "0.090", qty: "36.00", total: "3.24" },
    { price: "0.084", qty: "740.00", total: "62.16" },
  ],

  buy: [
    { price: "0.076", qty: "16.10", total: "1.22" },
    { price: "0.070", qty: "14.29", total: "1.00" },
    { price: "0.060", qty: "33.33", total: "2.00" },
    { price: "0.050", qty: "1 K", total: "50.00" },
    { price: "0.040", qty: "2 K", total: "80.00" },
  ],
};

  return (
     <View
      style={{
      }}
    >
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={header}>Price</Text>
        <Text style={header}>Qty</Text>
        <Text style={header}>Total</Text>
      </View>

      {/* SELL */}
      <ScrollView style={{ maxHeight: 160 }}>
        {orderBookData.sell.map((item, i) => (
          <Row key={`sell-${i}`} item={item} color="#ff4d4d" />
        ))}
   

     

      {/* BUY */}
  
        {orderBookData.buy.map((item, i) => (
          <Row key={`buy-${i}`} item={item} color="#00ff7f" />
        ))}
      </ScrollView>
    </View>
  );
}

function Row({ item, color }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
      }}
    >
      <Text style={{ color, width: "33%" }}>{item.price}</Text>
      <Text style={{ color: "#fff", width: "33%", textAlign: "center" }}>
        {item.qty}
      </Text>
      <Text style={{ color: "#fff", width: "33%", textAlign: "right" }}>
        {item.total}
      </Text>
    </View>
  )
}
const header = {
  color: "#9a9a9a",
  fontSize: 13,
};
export default Orderbook
