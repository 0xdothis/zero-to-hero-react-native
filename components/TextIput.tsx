import React from "react";
import {
    TextInput as RNTextInput,
    StyleSheet,
    TextInputProps,
} from "react-native";

export default function TextInput({ style, ...props }: TextInputProps) {
    const [value, setValue] = React.useState<string>("");
    return (
        <RNTextInput
            style={[styles.input, style]}
            {...props}
            value={value}
            onChangeText={setValue}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#888888",
        borderRadius: 6,
        padding: 12,
    },
});
