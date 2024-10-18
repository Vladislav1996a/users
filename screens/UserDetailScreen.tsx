import React from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
import {RouteProp} from '@react-navigation/native';
import { useGetUserDetails } from '../hooks/useGetUserDetails';
import { Map } from '../components/Map';

type UserDetailScreenRouteProp = RouteProp<{UserDetail: {userId: number}}, 'UserDetail'>;

export const UserDetailScreen =({route}: {route: UserDetailScreenRouteProp})=> {
  const {userId} = route.params; 
  const {user, loading, error} = useGetUserDetails(userId);

  if (loading) {
    return (
      <View >
        <ActivityIndicator/>
      </View>
    );
  }

  if (error) {
    return (
      <View >
        <Text>{error}</Text>
      </View>
    );
  }

  if (!user) {
    return null; 
  }

  const {name, email, address} = user;
  const {lat, lng} = address.geo;

  return (
    <View >
      <Text >{name}</Text>
      <Text>Email: {email}</Text>
      <Text>Address: {address.street}, {address.city}</Text>
      <Map latitude={lat} longitude={lng} />
    </View>
  );
}
