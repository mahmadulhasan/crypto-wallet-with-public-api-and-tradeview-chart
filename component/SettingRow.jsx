import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SettingRow = ({ label, value, right, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
      }}
    >
      <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>
        {label}
      </Text>

      {right ? (
        right
      ) : (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ color: '#9ca3af', fontSize: 16 }}>
            {value}
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="#9ca3af" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SettingRow;
