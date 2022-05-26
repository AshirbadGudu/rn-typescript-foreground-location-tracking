import {Heading} from 'native-base';
import React from 'react';
import {GOOGLE_API_KEY} from 'react-native-dotenv';

export default function Home() {
  return (
    <>
      <Heading>{GOOGLE_API_KEY}</Heading>
    </>
  );
}
