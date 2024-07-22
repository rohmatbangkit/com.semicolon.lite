import React, { useState, useEffect } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor="#FFFFFF" />
      <WebView source={{ uri: 'http://www.semicolon.blog' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
