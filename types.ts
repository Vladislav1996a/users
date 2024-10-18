export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export type RootStackParamList = {
  Users: undefined; 
  UserDetail: { userId: number }; 
};