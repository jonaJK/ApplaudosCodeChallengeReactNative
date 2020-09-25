import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { HEADER_COLOR } from '@app/constants/colors';
import { HEADER_HEIGHT, PADDING, HEADER_ICON_SIZE } from '@app/constants/dimensions';

export type Props = {
    title: string;
}

function Header({ title }: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <TouchableNativeFeedback
                useForeground={true}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name="arrow-back-ios"
                    size={HEADER_ICON_SIZE}
                    color="#ffffff"
                />
            </TouchableNativeFeedback>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
        paddingTop: 10,
        paddingLeft: PADDING,
        paddingRight: PADDING,
        paddingBottom: 10,
        height: HEADER_HEIGHT
    },
    title: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 10
    }
})
