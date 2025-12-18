import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Colors from "../../theme/colors";
import { ArrowRight2 } from "iconsax-react-nativejs";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* 🔥 Profile Avatar Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/user1.png")}
          style={styles.avatar}
        />
        <Text style={styles.profileName}>My Profile</Text>
      </View>

      {/* 🔥 Manage Profiles */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Manage Profiles</Text>
        <ArrowRight2 color={Colors.WHITE} size={20} />
      </TouchableOpacity>

      {/* 🔥 My List */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My List</Text>
        <ArrowRight2 color={Colors.WHITE} size={20} />
      </TouchableOpacity>

      {/* 🔥 App Settings */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>App Settings</Text>
        <ArrowRight2 color={Colors.WHITE} size={20} />
      </TouchableOpacity>

      {/* 🔥 Downloads */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Downloads</Text>
        <ArrowRight2 color={Colors.WHITE} size={20} />
      </TouchableOpacity>

      {/* 🔥 Help */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Help</Text>
        <ArrowRight2 color={Colors.WHITE} size={20} />
      </TouchableOpacity>

      {/* 🔥 Sign Out */}
      <TouchableOpacity style={[styles.item, { marginTop: 40 }]}>
        <Text style={[styles.itemText, { color: Colors.RED }]}>Sign Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 20
  },
  header: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  profileName: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: "700"
  },
  item: {
    backgroundColor: "#1A1A1A",
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  itemText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "500"
  }
});
