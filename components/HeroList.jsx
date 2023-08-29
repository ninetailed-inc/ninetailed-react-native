import React from 'react';
import {Image, StyleSheet, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {parseExperiences} from '../lib/experiences';
import {Experience} from '@ninetailed/experience.js-react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  blogPost: {
    marginBottom: 28,
  },
  coverImage: {
    marginBottom: 16,
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
  excerpt: {
    fontSize: 16,
    color: 'grey',
  },
});

function Hero({item}) {
  return (
    <>
      <Text style={styles.title}>{item.fields.internalName}</Text>
      <Image
        style={styles.image}
        source={{uri: `https:${item.fields.image.fields.file.url}`}}
      />
    </>
  );
}

// TODO: Change <Experience> to not use divs
function HeroExperience({item}) {
  console.log('item', item);
  const parsedExperiences = parseExperiences(item);
  console.log('experiences', parsedExperiences);
  return (
    <Experience
      item={item}
      id={item.sys.id}
      experiences={parsedExperiences}
      component={Hero}
    />
  );
}

export default function HeroPostList({entries}) {
  return (
    <SafeAreaView>
      <Text>
        There are: {entries.length} baseline heroes defined in this Contentful
        space.
      </Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.sys.id}
        renderItem={Hero}
      />
    </SafeAreaView>
  );
}
