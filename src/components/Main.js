import React from 'react';
import Map from './Map';
import Input from './Input';
import { SafeAreaView } from 'react-native';

const Main = () => {
  const [loadedMap, setLoadedMap] = React.useState(false);

  React.useEffect(() => {
    if (loadedMap) {
      console.log('FINISHED LOADING MAP');
    }
  }, [loadedMap]);

  handleInputText = (text) => {
    console.log(`NOW SEARCHING : ${text}`)
  }

  return (
    <>
      <SafeAreaView>
        <Input handleSubmit={text => handleInputText(text)} />
        <Map setLoadedMap={setLoadedMap} />
      </SafeAreaView>
    </>
  )
};

export default Main;