import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnime, getAnimeRequestStatus, getHighestRatedAnimeList, fetchHighestRatedAnime } from '@app/store/slices/anime';
import { selectManga, getMangaRequestStatus, getHighestRatedMangaList, fetchHighestRatedManga } from '@app/store/slices/manga';
import { onPressParam } from '@app/store/types';
import { mapSectionItem, mapMangaSectionItem } from '@app/utils/mappers';
import ScrollSection from '@app/components/ScrollSection';

function Home() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const animeList = useSelector(getHighestRatedAnimeList);
    const mangaList = useSelector(getHighestRatedMangaList);
    const mangaRequestStatus = useSelector(getMangaRequestStatus);
    const requestStatus = useSelector(getAnimeRequestStatus);

    useEffect(() => {
        dispatch(fetchHighestRatedAnime);
        dispatch(fetchHighestRatedManga);
    }, [dispatch])

    const onPress = ({ id, type }: onPressParam) => {
        if (type === 'anime') {
            dispatch(selectAnime(id));
            navigation.navigate('Detail');
        } else if (type === 'manga') {
            dispatch(selectManga(id));
            navigation.navigate('MangaDetail');
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView style={styles.scrollViewContainer}>
                    <ScrollSection
                        title="Anime"
                        type="anime"
                        items={animeList.map(item => mapSectionItem(item))}
                        onPress={onPress}
                        requestStatus={requestStatus}
                    />
                    <ScrollSection
                        title="Manga"
                        type="manga"
                        items={mangaList.map(item => mapMangaSectionItem(item))}
                        onPress={onPress}
                        requestStatus={mangaRequestStatus}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home;

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
        height: '100%'
    }
})