import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {getHeroEntries} from '../services/contentful';
import HeroList from '../components/HeroList.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    maxWidth: 1024,
    marginHorizontal: 'auto',
  },
});

export default function HeroPage() {
  const [isLoading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const response = await getHeroEntries();
      setEntries(response.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : <HeroList entries={entries} />}
    </SafeAreaView>
  );
}
