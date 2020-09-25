import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnime, getAnimeRequestStatus, getHighestRatedAnimeList, fetchHighestRatedAnime } from '@app/store/slices/anime';
import { selectManga, getMangaRequestStatus, getHighestRatedMangaList, fetchHighestRatedManga } from '@app/store/slices/manga';
import { onPressParam, NormalizedAnimeResponse, Anime, NormalizedMangaResponse, Manga } from '@app/store/types';
import { mapSectionItem, mapMangaSectionItem } from '@app/utils/mappers';
import { PADDING } from '@app/constants/dimensions';
import Search from '@app/components/commons/Search';
import ScrollSection from '@app/components/ScrollSection';

function Home() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const animeList = useSelector(getHighestRatedAnimeList);
    const mangaList = useSelector(getHighestRatedMangaList);
    const mangaRequestStatus = useSelector(getMangaRequestStatus);
    const requestStatus = useSelector(getAnimeRequestStatus);
    const [tmpAnimeList, setTMPAnimeList] = useState<NormalizedAnimeResponse<Anime>[]>([]);
    const [tmpMangaList, setTMPMangaList] = useState<NormalizedMangaResponse<Manga>[]>([]);
    const [searchText, onChangeSearchText] = useState('');
    const [searching, isSearching] = useState(false);

    useEffect(() => {
        dispatch(fetchHighestRatedAnime);
        dispatch(fetchHighestRatedManga);
    }, [dispatch])

    useEffect(() => {
        if (searchText) {
            isSearching(true);
            const value = searchText.trim().toUpperCase();
            setTMPAnimeList(animeList.filter(item => item.attributes.canonicalTitle.toUpperCase().indexOf(value) !== -1));
            setTMPMangaList(mangaList.filter(item => item.attributes.canonicalTitle.toUpperCase().indexOf(value) !== -1));
        } else {
            isSearching(false);
        }
    }, [searchText])

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

                    <Search searchText={searchText} onChangeSearchText={onChangeSearchText} />

                    {searching && tmpAnimeList.length === 0 && tmpMangaList.length === 0 ? (
                        <View style={styles.noResultContainer}>
                            <Icon name="error" size={40} color="#000000" />
                            <Text style={styles.noResultText}>No results found</Text>
                        </View>
                    ) : (
                            <>
                                <ScrollSection
                                    title="Anime"
                                    type="anime"
                                    isSearching={searching}
                                    items={
                                        !searching ? animeList.map(item => mapSectionItem(item)) : tmpAnimeList.map(item => mapSectionItem(item))
                                    }
                                    onPress={onPress}
                                    requestStatus={requestStatus}
                                />
                                <ScrollSection
                                    title="Manga"
                                    type="manga"
                                    isSearching={searching}
                                    items={
                                        !searching ? mangaList.map(item => mapMangaSectionItem(item)) : tmpMangaList.map(item => mapMangaSectionItem(item))
                                    }
                                    onPress={onPress}
                                    requestStatus={mangaRequestStatus}
                                />
                            </>
                        )}

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
        height: '100%',
    },
    noResultContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: PADDING,
        paddingRight: PADDING,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    noResultText: {
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: '500'
    }
})
