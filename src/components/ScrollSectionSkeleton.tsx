import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function ScrollSectionSkeleton() {

    const renderItem = () => {
        return (
            <SkeletonPlaceholder speed={1200}>
                <SkeletonPlaceholder.Item
                    height={225}
                    width={150}
                    marginRight={20}
                />
            </SkeletonPlaceholder>
        );
    }

    return (
        <FlatList
            data={[...Array(10).keys()]}
            horizontal={true}
            keyExtractor={(item) => `${item}`}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContainer}
        />
    )
}

export default ScrollSectionSkeleton;

const styles = StyleSheet.create({
    horizontalScrollContainer: {
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },
});
