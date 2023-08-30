import React, {useMemo} from 'react';
import TrackingNavigationContainer from './components/TrackingNavigationContainer';
import NavigationStack from './components/NavigationStack';
import {NinetailedProvider} from '@ninetailed/experience.js-react';
import {Ninetailed} from '@ninetailed/experience.js';
import {NinetailedApiClient} from '@ninetailed/experience.js-shared';

export default function App() {
  const ninetailed = useMemo(() => {
    const ninetailedApiClient = new NinetailedApiClient({
      clientId: '3c00cace-cacb-4086-807b-c97b4453e197',
      environment: 'b2b-demo',
      fetchImpl: fetch,
    });
    return new Ninetailed(ninetailedApiClient, {
      buildClientContext: () => {
        return {
          url: '',
          referrer: '',
          locale: '',
          userAgent: '',
          document: {
            title: '',
          },
        };
      },
      // // @ts-ignore
      // onLog: (...args) => {
      //   console.log(...args);
      // },
      // // @ts-ignore
      // onError: (...args) => {
      //   console.error(...args);
      // },
    });
  }, []);
  return (
    <NinetailedProvider ninetailed={ninetailed}>
      <TrackingNavigationContainer>
        <NavigationStack />
      </TrackingNavigationContainer>
    </NinetailedProvider>
  );
}
