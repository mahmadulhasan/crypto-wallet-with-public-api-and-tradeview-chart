import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import TradingViewChart from '../component/TradingViewChart';
import Orderbook from '../component/orderbook';

const Trade = ({ route }) => {

  const [Data, setData] = React.useState([])
  const fetchData = async () => {
    try {
      const responce = await fetch('https://api-mainnet.k.exchange/api/marketSummaryAll.js')
      const result = await responce.json()
      setData(result.summary["KNCH-USDT"])

    } catch (err) {
      console.log(err)
    }
  }



  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  // CHANGED: correct param access
  const coin = route?.params?.coin;

  // deafult kaanch data
  if (!coin) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

        {/* ===================== COIN INFO CARD ===================== */}
        <View
          style={{
            margin: 10,
            padding: 18,
            borderTopEndRadius: 26,
            borderTopLeftRadius: 26,
            borderWidth: 1,
            borderColor: "#ffffff22",
            backgroundColor: "#ffffff0c",
          }}
        >
          {/* HEADER */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 26,
                  fontWeight: "800",
                  letterSpacing: 0.5,
                }}
              >
                {Data.assetPair}
              </Text>

              <Text
                style={{
                  color: "#9ca3af",
                  fontSize: 14,
                  marginTop: 2,
                }}
              >
                KAANCH NETWORK
              </Text>
            </View>

            {/* PRICE */}
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 22,
                  fontWeight: "700",
                }}
              >
                ${Number(Data.price).toLocaleString()}
              </Text>

              <View
                style={{
                  marginTop: 4,
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  borderRadius: 10,
                  backgroundColor:
                    Data.changePercent24h >= 0
                      ? "rgba(0,255,127,0.15)"
                      : "rgba(255,77,77,0.15)",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color:
                      Data.changePercent24h >= 0
                        ? "#00ff7f"
                        : "#ff4d4d",
                  }}
                >
                  {Data.changePercent24h >= 0 ? "▲" : "▼"}{" "}
                  {Data.changePercent24h}%
                </Text>
              </View>
            </View>
          </View>

          {/* DIVIDER */}
          <View
            style={{
              height: 1,
              backgroundColor: "#ffffff12",
              marginVertical: 14,
            }}
          />

          {/* STATS */}

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ color: "#9ca3af", fontSize: 13 }}>
                Oracle Price
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                ${Number(Data.oraclePrice).toFixed(4)}
              </Text>
            </View>

            <View style={{ alignItems: "flex-end", flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ color: "#9ca3af", fontSize: 13 }}>
                  24h High:
                </Text>
                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}>
                  {Number(Data.high24h).toLocaleString()}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ color: "#9ca3af", fontSize: 13 }}>
                  24h Low:
                </Text>
                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}>
                  {Number(Data.low24h).toLocaleString()}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Text style={{ color: "#9ca3af", fontSize: 13 }}>
                  24h Volume:
                </Text>
                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}>
                  {Number(Data.volume24h).toLocaleString()}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ===================== TRADINGVIEW CHART ===================== */}
        <TradingViewChart symbol={'KNCHUSD'} />

        {/* ===================== WALLET CARD ===================== */}
        <View
          style={{
            gap: 10,
            margin: 10,
            borderWidth: 1,
            borderColor: '#ffffff31',
            backgroundColor: '#ffffff0c',
            borderBottomEndRadius: 25,
            borderBottomLeftRadius: 25,
            padding: 20,
            marginBottom:70,
          }}
        >
          <Orderbook />
        </View>

        {/* ===================== ACTION BUTTONS ===================== */}
        <View
          style={{
            position: 'absolute',
            bottom: 100,
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
              flexDirection: 'row',
              gap: 5,
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
              flexDirection: 'row',
              gap: 5,
            }}
          >
            <Entypo name="arrow-with-circle-down" size={25} color="black" />
            <Text>Withdraw</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

      {/* ===================== COIN INFO CARD ===================== */}
      <View
        style={{
          margin: 10,
          padding: 18,
          borderTopEndRadius: 26,
          borderTopLeftRadius: 26,
          borderWidth: 1,
          borderColor: "#ffffff22",
          backgroundColor: "#ffffff0c",
        }}
      >
        {/* HEADER */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 26,
                fontWeight: "800",
                letterSpacing: 0.5,
              }}
            >
              {coin.symbol.toUpperCase()}
            </Text>

            <Text
              style={{
                color: "#9ca3af",
                fontSize: 14,
                marginTop: 2,
              }}
            >
              {coin.name}
            </Text>
          </View>

          {/* PRICE + CHANGE */}
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "700",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </Text>

            <View
              style={{
                marginTop: 4,
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 10,
                backgroundColor:
                  coin.price_change_percentage_24h >= 0
                    ? "rgba(0,255,127,0.15)"
                    : "rgba(255,77,77,0.15)",
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color:
                    coin.price_change_percentage_24h >= 0
                      ? "#00ff7f"
                      : "#ff4d4d",
                }}
              >
                {coin.price_change_percentage_24h >= 0 ? "▲" : "▼"}{" "}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </View>
        </View>

        {/* DIVIDER */}
        <View
          style={{
            height: 1,
            backgroundColor: "#ffffff12",
            marginVertical: 14,
          }}
        />

        {/* STATS */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "#9ca3af", fontSize: 13 }}>
              Market Cap
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              ${coin.market_cap.toLocaleString()}
            </Text>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ color: "#9ca3af", fontSize: 13 }}>
              24h Volume
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
              ${coin.total_volume.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>


      {/* ===================== TRADINGVIEW CHART ===================== */}
      <TradingViewChart
        symbol={`BINANCE:${coin.symbol}USDT`}
      />

      {/* ===================== WALLET CARD ===================== */}
      <View
        style={{
          gap: 10,
          margin: 10,
          borderWidth: 1,
          borderColor: '#ffffff31',
          backgroundColor: '#ffffff0c',
          borderBottomEndRadius: 25,
          borderBottomLeftRadius: 25,
          padding: 20,
        }}
      >
        <Text style={{ color: '#797878ff', fontSize: 15, fontWeight: 'bold' }}>
          YOUR WALLET
        </Text>

        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FontAwesome name="dollar" size={17} color="#797878ff" />
          <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold' }}>
            12,345.654 USDT
          </Text>
        </View>

        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Feather name="arrow-down-right" size={12} color="#ff0000ff" />
          <Text style={{ color: '#ff0000ff', fontSize: 14, fontWeight: 'bold' }}>
            -30.92%
          </Text>
          <Text style={{ color: '#797878ff', fontSize: 14 }}>
            7 Days
          </Text>
        </View>
      </View>

      {/* ===================== ACTION BUTTONS ===================== */}
      <View
        style={{
          position: 'absolute',
          bottom: 100,
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
            flexDirection: 'row',
            gap: 5,
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
            flexDirection: 'row',
            gap: 5,
          }}
        >
          <Entypo name="arrow-with-circle-down" size={25} color="black" />
          <Text>Withdraw</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Trade;
