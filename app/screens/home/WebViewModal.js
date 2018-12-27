import React from 'react';
import { WebView, View, Text } from 'react-native'
import { width, images } from '../../theme/constants';
import { action } from '../../store/store';
import { NAVIGATE } from '../../utils/constants';
import { Navigation } from 'react-native-navigation';
import Loader from '../../components/loader';


class WebViewModal extends React.PureComponent {
    static options(passProps) {
        return {
            topBar: {
                hideOnScroll: true,
                leftButtons: [
                    {
                      id: 'buttonOne',
                      text: 'Back',
                      color: 'black',

                    }
                  ]
            },
            
        };
    }
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
        console.log('Button pressed: ', buttonId)
        action(NAVIGATE, { dismiss: this.props.componentId })
    }


    render() {
        console.log('this props: ', this.props)
        const { url } = this.props.props;
        return (
            <WebView
                source={{ uri: url }}
                style={{ flex: 1, width: width, }}
                startInLoadingState={true}
                renderLoading={()=> <Loader/>}
            />

        )
    }
}

const styles = {
    cancel: {
        position: 'absolute',
        top: 25,
        left: 25
    }
}

export default WebViewModal;