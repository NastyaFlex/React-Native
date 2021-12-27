import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';



export default class App extends React.Component {

  injectjs() {
    let jsCode = `document.querySelectorAll('.banners-list-item').forEach(test => test.remove());
    document.querySelectorAll('.top-banner').forEach(test => test.remove());
    document.querySelectorAll('.banners-list').forEach(test => test.remove());
    document.querySelectorAll('.main-page-banner-wrapper').forEach(test => test.remove());
    document.querySelectorAll("[id^='yandex']").forEach(test => test.remove());
    `;
     

    return jsCode;
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
       <View style={{ width:'100%', height:'100%' }}>
         <WebView
            source={{
              uri: "https://www.medgorodok.ru/cons/"
              }}
              injectedJavaScript={this.injectjs()}
              javaScriptEnabled = {true}
              style={styles.webview}
           />
       </View>
     </View>
    );
  }
}

let test;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
