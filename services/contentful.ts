import {createClient} from 'contentful';
import Config from 'react-native-config';

const client = createClient({
  space: Config.CONTENTFUL_SPACE_ID || '',
  accessToken: Config.CONTENTFUL_ACCESS_TOKEN || '',
});

export const getHeroEntries = () => {
  // @ts-ignore
  return client.getEntries({
    content_type: 'hero',
    'metadata.tags.sys.id[in]': 'baseline',
  });
};
