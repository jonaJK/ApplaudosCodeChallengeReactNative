import React from 'react';
import { View, Text, TouchableHighlight, Alert, Linking, StyleSheet } from 'react-native';
import { Anime } from '@app/store/types';

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

    return (
        <View style={styles.synopsisContainer}>
            <View style={styles.textBox}>
                <Text style={styles.titles}>Synopsis</Text>
                <Text>
                    {item.synopsis}
                </Text>
            </View>

            {item.youtubeVideoId &&
                <TouchableHighlight underlayColor="#ff4c4c" style={styles.youtubeButton} onPress={openYoutubeVideo}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Open YouTube video</Text>
                    </View>
                </TouchableHighlight>
            }
        </View>
    )
}

export default DetailFooter;

const styles = StyleSheet.create({
    synopsisContainer: {
        paddingBottom: 25
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
        backgroundColor: '#003666',
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
    }
})