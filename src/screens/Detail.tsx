import React from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedAnime } from '@app/store/slices/anime';

function Detail() {
    const item = useSelector(getSelectedAnime);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView style={styles.scrollViewContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.attributes.posterImage.small }}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.headerTextContainer}>
                            <View style={styles.textBox}>
                                <Text style={styles.titles}>Main Title</Text>
                                <Text>{item.attributes.canonicalTitle}</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.titles}>Canonical Title</Text>
                                <Text>{item.attributes.canonicalTitle}</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.titles}>Type</Text>
                                <Text>{item.attributes.subtype}, {item.attributes.episodeCount} Episodes</Text>
                            </View>
                            <View style={styles.textBox}>
                                <Text style={styles.titles}>Year</Text>
                                <Text>{item.attributes.startDate} till {item.attributes.endDate}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={styles.textBox}>
                            <Text style={styles.titles}>Genres</Text>
                            <Text>Genres list</Text>
                        </View>
                        <View style={styles.columnsContainer}>
                            <View style={styles.columns}>
                                <View style={styles.textBox}>
                                    <Text style={styles.titles}>Average Raiting</Text>
                                    <Text>{item.attributes.averageRating}</Text>
                                </View>
                            </View>
                            <View style={styles.columns}>
                                <View style={styles.textBox}>
                                    <Text style={styles.titles}>Age Raiting</Text>
                                    <Text>{item.attributes.ageRating}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.columnsContainer}>
                            <View style={styles.columns}>
                                <View style={styles.textBox}>
                                    <Text style={styles.titles}>Episode Duration</Text>
                                    <Text>{item.attributes.episodeLength} minutes</Text>
                                </View>
                            </View>
                            <View style={styles.columns}>
                                <View style={styles.textBox}>
                                    <Text style={styles.titles}>Airing Status</Text>
                                    <Text>{item.attributes.status}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.synopsisContainer}>
                        <View style={styles.textBox}>
                            <Text style={styles.titles}>Synopsis</Text>
                            <Text>
                                {item.attributes.synopsis}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f3f4f7'
    },
    safeAreaContainer: {
        flex: 1
    },
    scrollViewContainer: {
        height: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },


    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15
    },
    imageContainer: {
        height: 200,
        width: 150,
        backgroundColor: 'red'
    },
    image: {
        height: 200,
        width: 150,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    headerTextContainer: {
        flex: 1,
        paddingLeft: 10
    },
    textBox: {
        paddingBottom: 10,
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold'
    },



    detailContainer: {
        paddingBottom: 15
    },
    columnsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 5
    },
    columns: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0
    },




    synopsisContainer: {
        paddingBottom: 25
    }
})