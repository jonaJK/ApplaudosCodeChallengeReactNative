import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Anime } from '@app/store/types';

function DetailContent(item: Anime) {

    return (
        <View style={styles.detailContainer}>
            <View style={styles.textBox}>
                <Text style={styles.titles}>Genres</Text>
                <Text>Genres list</Text>
            </View>
            <View style={styles.columnsContainer}>
                <View style={styles.columns}>
                    <View style={styles.textBox}>
                        <Text style={styles.titles}>Average Raiting</Text>
                        <Text>{item.averageRating}</Text>
                    </View>
                </View>
                <View style={styles.columns}>
                    <View style={styles.textBox}>
                        <Text style={styles.titles}>Age Raiting</Text>
                        <Text>{item.ageRating}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.columnsContainer}>
                <View style={styles.columns}>
                    <View style={styles.textBox}>
                        <Text style={styles.titles}>Episode Duration</Text>
                        <Text>{item.episodeLength} minutes</Text>
                    </View>
                </View>
                <View style={styles.columns}>
                    <View style={styles.textBox}>
                        <Text style={styles.titles}>Airing Status</Text>
                        <Text>{item.status}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailContent;

const styles = StyleSheet.create({
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
    textBox: {
        paddingBottom: 10,
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})