import React from 'react';
import { View, SafeAreaView, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedAnime } from '@app/store/slices/anime';
import DetailHeader from '@app/components/detail/anime/DetailHeader';
import DetailContent from '@app/components/detail/anime/DetailContent';
import DetailFooter from '@app/components/detail/anime/DetailFooter';

function Detail() {
    const item = useSelector(getSelectedAnime);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView style={styles.scrollViewContainer}>
                    <DetailHeader {...item.attributes} />
                    <DetailContent {...item.attributes} />
                    <DetailFooter {...item.attributes} />
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
})