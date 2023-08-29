import React, {useRef, PropsWithChildren} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useNinetailed} from '@ninetailed/experience.js-react';

export default (props: PropsWithChildren<{}>) => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string | undefined>();
  const {page} = useNinetailed();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        const trackScreenView = () => {
          page();
          // And whatever else you want!
        };

        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
          // Call it on route change
          await trackScreenView();
        }
      }}>
      {props.children}
    </NavigationContainer>
  );
};
