import React, { useCallback, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Colors from "../../theme/colors";
import { ArrowRight2 } from "iconsax-react-nativejs";
import { defaultScreenStyle } from "../../styles/defaultScreenStyle";
import { useNavigation } from "@react-navigation/native";

const categories = [
  "Action",
  "Adventure",
  "Drama",
  "Comedy",
  "Horror",
  "Thriller",
  "Sci-Fi",
  "Fantasy",
  "Crime",
  "Documentary",
  "Mystery",
  "Animation",
  "Family",
  "Romance",
  "War",
  "History",
];

const Categories = () => {
  const navigation = useNavigation();

  const keyExtractor = useCallback((item) => item, []);

  const renderItem = useCallback(({ item }) => (
    <TouchableOpacity 
      style={styles.categoryBox}
      onPress={() => navigation.navigate("CategoryMovies", { genre: item })}
    >
      <Text style={styles.categoryText}>{item}</Text>
      <ArrowRight2 color={Colors.WHITE} size={18} />
    </TouchableOpacity>
  ), [navigation]);

  return (
    <View style={defaultScreenStyle.container}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    backgroundColor: Colors.BLACK,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    color: Colors.WHITE,
    fontWeight: "700",
    marginBottom: 20,
  },
  categoryBox: {
    backgroundColor: "#1A1A1A",
    height: 70,
    borderRadius: 10,
    width: "48%",
    marginBottom: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: "600",
  },
});
