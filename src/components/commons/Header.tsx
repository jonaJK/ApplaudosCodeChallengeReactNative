import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

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
                    size={30}
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
        backgroundColor: '#003666',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        height: 65
    },
    title: {
        color: "#ffffff",
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 10
    }
})
