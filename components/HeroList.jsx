import React from 'react';
import {Image, StyleSheet, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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

export default function HeroPostList({entries}) {
  return (
    <SafeAreaView>
      <Text>
        There are: {entries.length} heroes defined in this Contentful space.
      </Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.sys.id}
        renderItem={({item}) => {
          return (
            <>
              <Text style={styles.title}>{item.fields.internalName}</Text>
              <Image
                style={styles.image}
                source={{uri: `https:${item.fields.image.fields.file.url}`}}
              />
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}
