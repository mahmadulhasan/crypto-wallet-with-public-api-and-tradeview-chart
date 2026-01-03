import React from 'react';
import { Text, View } from 'react-native';

const Section = ({ title, children }) => {
  return (
    <View style={{ marginBottom: 20, marginHorizontal: 16 }}>
      <Text
        style={{
          color: '#9ca3af',
          fontSize: 14,
          fontWeight: '600',
          marginBottom: 8,
          marginLeft: 6,
        }}
      >
        {title}
      </Text>

      <View
        style={{
          backgroundColor: '#111827',
          borderRadius: 14,
          paddingHorizontal: 16,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Section;
