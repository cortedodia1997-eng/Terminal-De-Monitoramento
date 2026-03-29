import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0B' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0B" />
      <WebView 
        source={{ uri: 'https://ais-pre-g373sz63dhbosj7jkyp35p-603530955366.europe-west2.run.app' }} 
        style={{ flex: 1 }}
        allowsInlineMediaPlayback={true}
        mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
      />
    </SafeAreaView>
  );
}
