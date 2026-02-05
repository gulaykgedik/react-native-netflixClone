import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import NotificationCard from '../../components/notifications/notificationCard';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { NotificationProps } from '../../models/ui/notificationProps';

const Notifications: React.FC = ({notification}) => {
    const {notifications} = useSelector((state: RootState) => state.notifications);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationCard notification={item} />
        )}
      />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})