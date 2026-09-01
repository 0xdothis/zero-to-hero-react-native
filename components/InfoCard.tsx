import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";

interface InfoCardProps {
    title: string;
    subtitle?: string;
    showImage?: boolean;
    imageUrl?: string;
}

export default function InfoCard({
    title,
    subtitle,
    imageUrl,
    showImage = false,
}: InfoCardProps) {
    const [imageVisibility, setImageVisibility] =
        React.useState<boolean>(showImage);
    return (
        <View style={styles.container}>
            {imageVisibility && imageUrl && (
                <View style={styles.imageWrapper}>
                    <Image
                        source={{
                            uri: imageUrl,
                        }}
                        alt="bottle on a yellow backgound"
                        style={styles.image}
                        contentFit="cover"
                    //contentPosition="top center"
                    />
                </View>
            )}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}

                <Pressable
                    style={styles.button}
                    onPress={() => setImageVisibility((prev) => !prev)}
                >
                    <Text style={{ fontWeight: "bold" }}>Toggle Image </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "auto",
        backgroundColor: "whitesmoke",
        overflow: "hidden",
        borderRadius: 16,
        boxShadow: "0 4px 8px #22222230",
        paddingBottom: 8,
        borderBottomWidth: 6,
        borderBottomColor: "#333",
    },
    imageWrapper: {
        height: 200,
        width: "auto",
    },
    image: {
        width: "100%",
        height: "100%",
        backgroundPosition: "top top",
    },
    content: {
        padding: 16,
        gap: 8,
    },
    title: {
        fontFamily: "monospace",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    subtitle: {
        fontFamily: "monospace",
        fontSize: 12,
    },
    button: {
        padding: 12,
        backgroundColor: "gold",
        alignItems: "center",
        borderRadius: 6,
        marginTop: 16,
    },
});
