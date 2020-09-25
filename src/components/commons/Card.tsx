import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
    posterImage: string;
    canonicalTitle: string;
};

function Card({ posterImage, canonicalTitle }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <Image
                    style={styles.image}
                    source={{ uri: posterImage }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{canonicalTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: 225,
        width: 150,
        elevation: 3,
        shadowColor: "#52565e",
        shadowOffset: {
            height: 1,
            width: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    cover: {
        height: 175,
        width: '100%',
        overflow: 'hidden',
    },
    image: {
        height: 175,
        width: 150,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    title: {
        color: '#003f87',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Card;
