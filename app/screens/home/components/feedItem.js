import React from 'react';
import { View, Text, Image } from 'react-native'
import { width, shadows, flex, colors, images } from '../../../theme/constants';

class FeedItem extends React.PureComponent{ 
    
    render() {
        const {data} = this.props;
        return (
            <View style={[styles.container, shadows.default]}>
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.rowView}>
                    <View style={styles.reitContainers}>
                        <Image
                            style={styles.image}
                            source={images.star}
                        />
                        <Text>{data.stargazers_count}</Text>
                    </View>
                    <View style={styles.reitContainers}>
                        <Image
                            style={styles.image}
                            source={images.fork}
                        />
                        <Text>{data.forks}</Text>
                    </View>
        
                </View>
                <Text>Description:</Text>
                <Text
                    style={styles.description}
                    numberOfLines={3}
                >{data.description}
                </Text>
            </View>
        )
    }
   }

const styles = {
    container: {
        height: 190,
        width: width * 0.9,
        marginVertical: 10,
        backgroundColor: colors.white,
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    description: {
        fontSize: 15,
        color: colors.grey,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginRight: 5
    },
    reitContainers: {
        borderColor: colors.lightGrey,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '48%',
        alignItems: 'center',
        padding: 8
    },
    countText: {
        fontSize: 16,
        color: colors.black,
    }
}
export default FeedItem;