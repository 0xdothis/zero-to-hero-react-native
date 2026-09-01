import InfoCard from "@/components/InfoCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InfoCard
        showImage
        imageUrl="https://images.pexels.com/photos/19717727/pexels-photo-19717727.jpeg"
        title="Ashley Joy"
        subtitle="Nam tincidunt sit, consectetur in, gravida consectetur cras lacus ac. Maximus varius eros eu, nullam enim id tincidunt turpis porttitor. Feugiat praesent, pulvinar tempus, est massa urna nec pulvinar porta. Enim nisi, nunc tellus placerat dui sagittis erat tempor diam. Vel morbi amet efficitur condimentum id faucibus, malesuada nisl consequat."
      />

      <InfoCard
        showImage
        imageUrl="https://images.pexels.com/photos/38772830/pexels-photo-38772830.jpeg"
        title="Landscape"
        subtitle="Eu faucibus fringilla, consequat at est, nibh praesent dapibus ornare. At, ligula molestie nullam, cursus."
      />

      <InfoCard
        showImage
        imageUrl="https://images.pexels.com/photos/17576517/pexels-photo-17576517.jpeg"
        title="Hair Shampoo"
        subtitle="Nam tincidunt sit, consectetur in, gravida consectetur cras lacus ac. Maximus varius eros eu, nullam enim id tincidunt turpis porttitor. Feugiat praesent, pulvinar tempus, est massa urna nec pulvinar porta."
      />

      <InfoCard
        showImage
        imageUrl="https://images.pexels.com/photos/37368106/pexels-photo-37368106.jpeg"
        title="Fruit Salad"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
  },
});
