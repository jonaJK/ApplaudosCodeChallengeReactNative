import React from 'react';
import { View, Text, FlatList, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { SectionItem, onPressParam, RequestStatus } from '@app/store/types';
import Card from '@app/components/commons/Card';
import ScrollSectionSkeleton from '@app/components/ScrollSectionSkeleton';

type Props = {
    items: SectionItem[];
    type: string;
    isSearching: boolean;
    title: string;
    onPress: (params: onPressParam) => void;
    requestStatus: RequestStatus;
};

type ItemProps = {
    item: SectionItem;
}

function ScrollSection({ items = [], type, isSearching, title, onPress = (_) => { }, requestStatus }: Props) {

    const renderItem = ({ item }: ItemProps) => {
        return (
            <TouchableNativeFeedback
                useForeground={true}
                onPress={() => {
                    onPress({ id: item.id, type });
                }}
            >
                <View style={styles.touchable}>
                    <Card canonicalTitle={item.canonicalTitle} posterImage={item.posterImage} />
                </View>
            </TouchableNativeFeedback>
        );
    };

    return (
        <View>
            {requestStatus === 'loading' && items.length === 0 ? (
                <>
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitle}>{title}</Text>
                    </View>
                    <ScrollSectionSkeleton />
                </>
            ) : (
                    <>
                        {items.length > 0 &&
                            <>
                                <View style={styles.sectionTitleContainer}>
                                    <Text style={styles.sectionTitle}>{title}</Text>
                                </View>
                                <FlatList
                                    data={items}
                                    horizontal={true}
                                    keyExtractor={(item) => item.id}
                                    renderItem={renderItem}
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={styles.horizontalScrollContainer}
                                />
                            </>
                        }
                    </>
                )

            }
        </View>
    )
}

export default ScrollSection;

const styles = StyleSheet.create({
    sectionTitleContainer: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    horizontalScrollContainer: {
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 10,
    },
    touchable: {
        marginLeft: 10,
        overflow: 'hidden',
    },
    title: {
        color: '#b8bece',
        fontWeight: '600',
        fontSize: 15,
        textTransform: 'uppercase',
    },
    titleBar: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
