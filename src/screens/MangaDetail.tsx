import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedManga } from '@app/store/slices/manga';
import Header from '@app/components/commons/Header';
import DetailHeader from '@app/components/detail/manga/DetailHeader';
import DetailContent from '@app/components/detail/manga/DetailContent';
import DetailFooter from '@app/components/detail/manga/DetailFooter';

function MangaDetail() {
    const item = useSelector(getSelectedManga);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <Header title={item.attributes.canonicalTitle} />
                <ScrollView style={styles.scrollViewContainer}>
                    <DetailHeader {...item.attributes} />
                    <DetailContent {...item.attributes} />
                    <DetailFooter {...item.attributes} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MangaDetail;

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