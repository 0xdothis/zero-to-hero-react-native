import React from "react";
import {
    TextInput as RNTextInput,
    StyleSheet,
    TextInputProps,
    useColorScheme,
} from "react-native";

export default function TextInput({ style, ...props }: TextInputProps) {
    const theme = useColorScheme();
    const isDarkMode = theme === "dark";

    const [value, setValue] = React.useState<string>("");

    return (
        <RNTextInput
            style={StyleSheet.flatten([
                styles.input,
                { color: isDarkMode ? "#f4f4f4" : "#222" },
                style,
            ])}
            {...props}
            value={value}
            onChangeText={setValue}
            placeholderTextColor={isDarkMode ? "#c4c4c4" : "#333"}
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
