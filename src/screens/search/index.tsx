import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Colors from "../../theme/colors";
import { SearchNormal1 } from "iconsax-react-nativejs";

interface SearchResult {
  id: string;
  poster: string;
}

const trendingSearches = [
  "The Witcher",
  "Stranger Things",
  "Money Heist",
  "Breaking Bad",
  "Avatar",
  "The Batman",
  "Top Gun",
];

const dummyResults = [
  { id: "1", poster: "https://image.tmdb.org/t/p/w500/2.jpg" },
  { id: "2", poster: "https://image.tmdb.org/t/p/w500/3.jpg" },
  { id: "3", poster: "https://image.tmdb.org/t/p/w500/4.jpg" },
  { id: "4", poster: "https://image.tmdb.org/t/p/w500/5.jpg" },
];

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (text: string) => {
    setQuery(text);

    if (text.length > 1) {
      setResults(dummyResults);
    } else {
      setResults([]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBox}>
        <SearchNormal1 color="#777" size={18} />
        <TextInput
          style={styles.input}
          placeholder="Search movies, shows..."
          placeholderTextColor="#777"
          value={query}
          onChangeText={handleSearch}
        />
      </View>

      {query.length === 0 ? (
        <>
          <Text style={styles.trendingTitle}>Trending Searches</Text>

          {trendingSearches.map((item) => (
            <TouchableOpacity key={item} style={styles.trendItem}>
              <SearchNormal1 color="#fff" size={18} />
              <Text style={styles.trendText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <FlatList
          data={results}
          numColumns={3}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.posterBox}>
              <Image source={{ uri: item.poster }} style={styles.poster} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    padding: 16,
  },
  searchBox: {
    width: "100%",
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
    fontSize: 16,
  },
  trendingTitle: {
    marginTop: 20,
    marginBottom: 12,
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  trendItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  trendText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },
  posterBox: {
    width: "32%",
    height: 160,
    backgroundColor: "#111",
    borderRadius: 6,
    marginBottom: 14,
    overflow: "hidden",
  },
  poster: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
});
