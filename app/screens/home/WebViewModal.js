import React from 'react';
import{WebView} from 'react-native'


export const WebViewModal = ({url}) => (
    <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
    />
)