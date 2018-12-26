import React from 'react';
import{View, WebView} from 'react-native'


export const WebViewModal = ({url}) => (
    <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
    />
)