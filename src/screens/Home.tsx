import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnime, getAnimeRequestStatus, getHighestRatedAnimeList, fetchHighestRatedAnime } from '@app/store/slices/anime';
import { onPressParam } from '@app/store/types';
import { mapSectionItem } from '@app/utils/mappers';
import ScrollSection from '@app/components/ScrollSection';

function Home() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const animeList = useSelector(getHighestRatedAnimeList);
    const requestStatus = useSelector(getAnimeRequestStatus);

    useEffect(() => {
        dispatch(fetchHighestRatedAnime);
    }, [dispatch])

    const onPress = ({ id }: onPressParam) => {
        dispatch(selectAnime(id));
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <ScrollView style={styles.scrollViewContainer}>
                    <ScrollSection
                        title="Anime / Highest Rated"
                        items={animeList.map(item => mapSectionItem(item))}
                        onPress={onPress}
                        requestStatus={requestStatus}
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