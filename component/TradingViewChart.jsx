import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewChart = ({ symbol }) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: black;
          }
          #tv_chart {
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div id="tv_chart"></div>

        <script src="https://s3.tradingview.com/tv.js"></script>
        <script>
          new TradingView.widget({
            container_id: "tv_chart",
            symbol: "${symbol}",
            interval: "10",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            autosize: false,
            width: "100%",
            height: "100%",
            hide_side_toolbar: true,
            allow_symbol_change: false
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={{ height: 400, marginHorizontal: 10 }}>
      <WebView
        source={{ html }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
};

export default TradingViewChart;
