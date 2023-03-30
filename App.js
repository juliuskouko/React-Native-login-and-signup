// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import LoginScreen from './LoginScreen';
// import SignUpScreen from './SignUpScreen'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <LoginScreen/> */}
//       <SignUpScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
   
//     marginTop: 100,
//   },

// });


import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Contact from "./ContactsScreen";
import profile from "./assets/profile.jpg"

export default ContactsList = () => {
  const contacts = [
    {
      id: 1,
      name: "Julius",
      phone: "000-555-5555",
      image: "profile",
    },
    {
      id: 2,
      name: "Promise",
      phone: "444-444-4444",
      image: "https://www.bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "Julius",
      phone: "333-333-3333",
      image: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
      id: 4,
      name: "Winifred",
      phone: "222-333-444",
      image: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 5,
      name: "Martin",
      phone: "222-333-555",
      image: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
    },
    {
      id: 6,
      name: "Nana Kay",
      phone: "323-456-6786",
      image: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
      id: 7,
      name: "Dela",
      phone: "333-333-3333",
      image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
    },
    {
      id: 8,
      name: "Eben",
      phone: "333-333-3333",
      image: "https://www.bootdey.com/img/Content/avatar/avatar8.png",
    },
    {
      id: 9,
      name: "Nana",
      phone: "333-333-3333",
      image: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
    },
    {
      id: 10,
      name: "Foster",
      phone: "333-333-3333",
      image: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Contact name={item.name} phone={item.phone} image={item.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "20%",
  },
});
