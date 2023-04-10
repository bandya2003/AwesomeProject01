import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {
  const [textSize, setTextSize] = useState(16);
  const [textColor, setTextColor] = useState('black');
  const [showImage, setShowImage] = useState(false);

  const increaseTextSize = () => {
    setTextSize(textSize + 2);
  };

  const changeTextColor = () => {
    let newColor = 'black';
    if (textColor === 'black') {
      newColor = 'red';
    } else if (textColor === 'red') {
      newColor = 'purple';
    } else if (textColor === 'purple') {
      newColor = 'blue';
    } else if (textColor === 'blue') {
      newColor = 'yellow';
    } else if (textColor === 'yellow') {
      newColor = 'violet';
    } else if (textColor === 'violet') {
      newColor = 'white';
    } else if (textColor === 'white') {
      newColor = 'orange';
    } else if (textColor === 'orange') {
      newColor = 'brown';
    } else if (textColor === 'brown') {
      newColor = 'black';
    }
    setTextColor(newColor);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: textSize, color: textColor}}>Practical 7</Text>
      <TouchableOpacity style={styles.button} onPress={increaseTextSize}>
        <Text style={styles.buttonText}>Increase Text Size</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={changeTextColor}>
        <Text style={styles.buttonText}>Change Text Color</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={toggleImage}>
        <Text style={styles.buttonText}>View Image</Text>
      </TouchableOpacity>
      {showImage && (
        <Image
          source={{uri: 'https://picsum.photos/200/200'}}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    marginTop: 10,
    width: 200,
    height: 200,
  },
});
