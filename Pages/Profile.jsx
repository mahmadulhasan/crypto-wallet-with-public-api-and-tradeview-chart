import React from 'react';
import { Text, View, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

import Section from "../component/Section";
import SettingRow from "../component/SettingRow";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

      <Text style={{ color: '#fff', fontSize: 35, fontWeight: '700', margin: 16 }}>
        Profile
      </Text>

      {/* User Card */}
      <View
        style={{
          backgroundColor: '#111827',
          marginHorizontal: 16,
          marginBottom:16,
          borderRadius: 16,
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>
            mahmadulhasan623@gmail.com
          </Text>
          <Text style={{ color: '#9ca3af', marginTop: 4 }}>
            ID: 111111
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <AntDesign name="check-circle" size={20} color="#22c55e" />
          <Text style={{ color: '#22c55e', fontWeight: '600' }}>
            Verified
          </Text>
        </View>
      </View>

      <Section title="ACCOUNT">
        <SettingRow label="Payment Currency" value="USD" />
        <View style={{ height: 1, backgroundColor: '#1f2933' }} />
        <SettingRow label="Language" value="English" />
      </Section>

      <Section title="SECURITY">
        <SettingRow
          label="Face ID"
          right={<Switch value />}
        />
        <View style={{ height: 1, backgroundColor: '#1f2933' }} />
        <SettingRow label="Password Settings" />
        <View style={{ height: 1, backgroundColor: '#1f2933' }} />
        <SettingRow label="Change Password" />
      </Section>

      <Section title="APP">
        <SettingRow label="Launch Screen" value="HOME" />
        <View style={{ height: 1, backgroundColor: '#1f2933' }} />
        <SettingRow label="Theme" value="Dark" />
      </Section>

    </SafeAreaView>
  );
};

export default Profile;
