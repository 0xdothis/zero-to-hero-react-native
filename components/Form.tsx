import React from "react";
import {
    Alert,
    Button,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function UserForm() {
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");

    function handleData() {
        if (!name.trim() || !email.trim()) {
            if (Platform.OS === "web") {
                alert("name or email is empty");
            } else {
                Alert.alert("name or email is empty");
            }
            return;
        }

        if (Platform.OS === "web") {
            alert(`name: ${name}, email: ${email}`);
        }

        Alert.alert(`name: ${name} \nemail: ${email}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input your name"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Input your email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <TouchableOpacity onPress={handleData} style={styles.button}>
                <Text style={{ color: "whitesmoke", fontWeight: "bold" }}>
                    Show Data
                </Text>
            </TouchableOpacity>
            <View style={styles.result}>
                <Text style={styles.h2}>Result</Text>
                <Text style={styles.text}>Name: {name} </Text>
                <Text style={styles.text}>Email: {email} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "whitesmoke",
        height: "auto",
        gap: 12,
        boxShadow: "0 4px 8px #33333340",
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    inputWrapper: {
        width: "auto",
        height: "auto",
        gap: 4,
    },
    label: {
        fontSize: 12,
        fontWeight: "semibold",
    },
    input: {
        padding: 12,
        width: "100%",
        borderRadius: 6,
        borderWidth: 1.5,
        borderColor: "#333",
    },
    result: {
        marginVertical: 16,
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
        //spaddingVertical: 4,
        letterSpacing: 1.2,
    },
    button: {
        backgroundColor: "seagreen",
        marginTop: 8,
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
});
