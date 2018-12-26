import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { FeedItem } from './feedItem';
import { colors } from '../../../theme/constants';
import Loader from '../../../components/loader';

class Feed extends PureComponent {

    onPress = (url) => {
        
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
            <View style={{ paddingBottom: 100 }}>
                {repositories
                    ? <FlatList
                        showsVerticalScrollIndicator={true}
                        data={repositories}
                        keyExtractor={this.keyExtractor}
                        renderItem={(item) => this.renderItem(item)}
                        onEndReachedThreshold={0.7}
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