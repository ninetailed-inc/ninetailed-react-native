import React from 'react';
import {Image, StyleSheet, Text, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {parseExperiences} from '../lib/experiences';
import {useExperience, Experience} from '@ninetailed/experience.js-react';

const styles = StyleSheet.create({
  hero: {
    marginTop: 28,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 8,
  },
});

function Hero({entry}) {
  return (
    <View style={styles.hero}>
      <Text style={styles.title}>{entry.fields.internalName}</Text>
      <Image
        style={styles.image}
        source={{uri: `https:${entry.fields.image.fields.file.url}`}}
      />
    </View>
  );
}

function HeroExperienceWrapper({item}) {
  return <HeroExperience item={item} />;
}

function HeroExperience({item}) {
  const baseline = {
    ...item,
    id: item.sys.id,
  };
  const {loading, variant} = useExperience({
    baseline,
    experiences: parseExperiences(item),
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (variant) {
    return <Hero entry={variant} />;
  }
  return <Hero entry={baseline} />;
}

export default function HeroList({entries}) {
  return (
    <SafeAreaView>
      <Text>
        There are: {entries.length} baseline heroes defined in this Contentful
        space.
      </Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.sys.id}
        renderItem={HeroExperienceWrapper}
      />
    </SafeAreaView>
  );
}
