import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Alert, Linking, StyleSheet } from 'react-native';
import { Anime, Character } from '@app/store/types';
import { BUTTONS_COLOR, BUTTONS_UNDERLAYER_COLOR } from '@app/constants/colors';
import Card from '@app/components/commons/Card';

type CharacterProps = {
    item: Character;
}

function DetailFooter(item: Anime) {
    const youtubeUrl = "http://www.youtube.com/v";

    const openYoutubeVideo = async () => {
        const url: string = `${youtubeUrl}/${item.youtubeVideoId}`;
        const supported: boolean = await Linking.canOpenURL(url);

        if (supported) {
            Linking.openURL(url);
        } else {
            Alert.alert("Sorry, the youtube video can't be open");
        }
    }

    const renderItem = ({ item }: CharacterProps) => {
        return (
            <Card canonicalTitle={item.canonicalName} posterImage={item.image.original} />
        )
    }

    return (
        <View style={styles.synopsisContainer}>
            <View style={styles.textBox}>
                <Text style={styles.titles}>Synopsis</Text>
                <Text>
                    {item.synopsis}
                </Text>
            </View>

            <View style={styles.textBox}>
                <Text style={styles.titles}>Characters</Text>
                {item.characters === undefined ? (
                    <Text>Characters not available</Text>
                ) : (
                        <FlatList
                            data={item.characters}
                            horizontal={true}
                            keyExtractor={(character) => character.id}
                            renderItem={renderItem}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.horizontalScrollContainer}
                        />
                    )}
            </View>

            {item.youtubeVideoId &&
                <View style={styles.textBox}>
                    <Text style={styles.titles}>Video</Text>
                    <TouchableHighlight underlayColor={BUTTONS_UNDERLAYER_COLOR} style={styles.youtubeButton} onPress={openYoutubeVideo}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Open YouTube video</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            }
        </View>
    )
}

export default DetailFooter;

const styles = StyleSheet.create({
    synopsisContainer: {
        paddingBottom: 40
    },
    textBox: {
        paddingBottom: 10,
    },
    titles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    youtubeButton: {
        marginTop: 10,
        height: 40,
        width: 150,
        backgroundColor: BUTTONS_COLOR,
        borderRadius: 5
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600'
    },
    horizontalScrollContainer: {
        paddingBottom: 10,
        paddingTop: 10,
    },
})