import React from 'react';
import { Text, Image, ScrollView } from 'react-native';
const dog = {
  uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64, 
  height: 64
};

export default MyScollViewApp = () => (

      <ScrollView style= {{padding: 40}}>

        <Text style= {{fontSize: 80}}>
         Try to scroll down
        </Text>

        <Image source={require('./assets/dog2.png')} style ={{width: 80, height: 80}}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>

        <Text style= {{fontSize: 80}}>
         Try to scroll down again if you like 
        </Text>

        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>

        <Text style= {{fontSize: 80}}>
         Try to scroll down again if you like 
        </Text>

        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>

        <Text style= {{fontSize: 80}}>
         Try to scroll down again if you like 
        </Text>

        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>

        <Text style= {{fontSize: 80}}>
         Try to scroll down again if you like 
        </Text>

        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>

        <Text style= {{fontSize: 80}}>
         React Native Components!
        </Text>

        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>
        <Image source={dog}/>



      </ScrollView>



  );





