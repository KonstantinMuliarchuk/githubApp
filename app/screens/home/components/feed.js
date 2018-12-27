import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity, Linking } from 'react-native'
import  FeedItem  from './feedItem';
import { colors } from '../../../theme/constants';
import Loader from '../../../components/loader';
import { action } from '../../../store/store';
import { NAVIGATE } from '../../../utils/constants';

class Feed extends PureComponent {

    onPress = (item) => {
        console.log('Item data:', item)
        if (item.svn_url) {
            action(NAVIGATE,{modal: 'WebView', props: {url: item.svn_url}, title: item.name})
        }else{
            alert('No homepage exist')
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={()=>this.onPress(item)}
            >
                <FeedItem
                    data={item}
                />
            </TouchableOpacity>
        )
    }

    keyExtractor = (item, index) => item.id.toString()

    render() {
        const { repositories, loadMore, loader } = this.props;
        return (
            <View style={{ paddingBottom: 100, alignItems: 'center' }}>
                {repositories
                    ? <FlatList
                        showsVerticalScrollIndicator={true}
                        data={repositories}
                        extraData={repositories}
                        keyExtractor={this.keyExtractor}
                        renderItem={(item) => this.renderItem(item)}
                        onEndReachedThreshold={0.7}
                        getItemLayout={(data, index) => (
                            { length: 210, offset: 210 * index, index }
                        )}
                        onEndReached={loadMore}
                        onRefresh={this.refreshingStarted}
                    />
                    : <Text style={styles.announce}>Search Github Repositories by name</Text>
                }
                {loader && <Loader />}
            </View>
        );
    }
}

const styles = {
    announce: {
        marginVertical: 30,
        fontSize: 20,
        color: colors.grey,
        textAlign: 'center'
    }
}
const mapStateToProps = (state) => ({
    repositories: state.home.repositories,
    loader: state.layout.loader
})

export default connect(
    mapStateToProps,
)(Feed);