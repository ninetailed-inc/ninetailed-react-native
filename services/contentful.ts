import {createClient} from 'contentful';
import Config from 'react-native-config';

const client = createClient({
  space: Config.CONTENTFUL_SPACE_ID || '',
  accessToken: Config.CONTENTFUL_ACCESS_TOKEN || '',
});

export const getHeroEntries = () => {
  return client.getEntries({
    content_type: 'hero',
    include: 10,
    // @ts-ignore
    'metadata.tags.sys.id[in]': 'baseline',
  });
};
