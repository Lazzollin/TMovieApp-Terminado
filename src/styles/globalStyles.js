import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    layout: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#c2c2c2',
        // borderColor: '#c2c2c2',
        borderRadius: 10,
        height: 55,
        backgroundColor: '#333'
    },


    btnLink: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnLinkText: {
        fontSize: 12,
        color: '#fff'
    },
});