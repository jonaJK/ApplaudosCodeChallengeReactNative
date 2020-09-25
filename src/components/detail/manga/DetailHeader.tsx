import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Manga } from '@app/store/types';

function DetailHeader(item: Manga) {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: item.posterImage.small }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.headerTextContainer}>
                <View style={styles.textBox}>
                    <Text style={styles.titles}>Main Title</Text>
                    <Text>{item.canonicalTitle}</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.titles}>Canonical Title</Text>
                    <Text>{item.canonicalTitle}</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.titles}>Type</Text>
                    <Text>{item.subtype}, {item.chapterCount} Chapters</Text>
                </View>
                <View style={styles.textBox}>
                    <Text style={styles.titles}>Year</Text>
                    <Text>{item.startDate} till {item.endDate}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15
    },
    imageContainer: {
        height: 200,
        width: 150
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
})