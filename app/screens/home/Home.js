import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Feed from './components/feed';
import { action } from '../../store/store';
import { LOAD_HOME } from '../../utils/constants';
import { SearchBar } from 'react-native-elements'
import { fetchHome } from '../../api/fetchHomeData';
import { colors, width } from '../../theme/constants';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import  WebViewModal  from './WebViewModal';

class Home extends Component {

    static options(passProps) {
        return {
            topBar: {
                visible: true,
                title: {
                    text: 'Repositories search screen'
                },
            }
        };
    }

    state = {
        page: 1,
        sort: ['stars', 'forks'],
        search: '',
        selectedIndex: 0
    }

    loadData = () => {
        const { search, sort, selectedIndex } = this.state;
        action(LOAD_HOME, { search, page: 1, sort: sort[selectedIndex] })
        this.setState({ page: 1 })
    }

    onChangeValue = (value) => {
        this.setState({ search: value })
        this.loadData()
    }

    loadMore = () => {
        let { page, search, sort, selectedIndex } = this.state
        page += 1
        action(LOAD_HOME, { search, page, sort: sort[selectedIndex] })
        this.setState({ page })
    }

    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        }, () => {
            this.loadData()
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <SearchBar
                    lightTheme
                    containerStyle={{ width: width, height: 45 }}
                    onChangeText={(value) => this.onChangeValue(value)}
                    onClear={() => this.onChangeValue('')}
                    placeholder='Search...' />
                <View style={styles.segmentStyle}>
                    <SegmentedControlTab
                        tabStyle={{backgroundColor: colors.white, borderColor: 'black'}}
                        activeTabStyle={{backgroundColor: colors.black}}
                        tabTextStyle={{color: 'black'}}
                        borderRadius={0}
                        values={['Stars', 'Forks']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                    />
                </View>

                <Feed
                    loadMore={this.loadMore}
                />
            </View>
        );
    }
}
const styles = {
    screen: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.lightGrey
    },
    segmentStyle: {
        width: width * 0.9,
        marginVertical : 10
    }
}

export default Home;