import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const PortfolioChart = () => {
    const base = 100
    const buyData = [
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "01 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 199999 - 10), label: "05 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 199999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "10 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "15 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "20 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 900 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "25 Jan" },
        { value: base + Math.floor(Math.random() * 100 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: 12345.654 },
        { value: 12345.654, label: "30 Jan" },
    ];

    const sellData = [
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "01 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "05 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "10 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "15 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "20 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "25 Jan" },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10) },
        { value: base + Math.floor(Math.random() * 99999 - 10), label: "30 Jan" },
    ];



    return (
        <View style={{ padding: 16 , height:280}}>
            <LineChart
                data={buyData}
                data2={sellData}
                height={210}
                spacing={20}
                initialSpacing={0}

                /* COLORS */
                color1="#22c55e"
                color2="#ef4444"

                /* DATA POINTS */
                dataPointsHeight={6}
                dataPointsWidth={6}
                dataPointsColor1="transparent"
                dataPointsColor2="transparent"

                /* LABELS */
                textShiftY={-2}
                textShiftX={-5}
                textFontSize={12}
                textColor1="#555"
                textColor2="#555"
                xAxisTextNumberOfLines={2}
                xAxisLabelTextStyle={{ color: "#dfdfdfff", fontSize: 10 }}
                yAxisTextStyle={{ color: "#dfdfdfff", fontSize: 10  }}

                /* REMOVE WHITE STRIPES */
                hideRules
                rulesColor="transparent"
                xAxisColor="#555"
                yAxisColor="#555"

                /* OPTIONAL */
                backgroundColor="transparent"
            />

        </View>
    );
};

export default PortfolioChart;
