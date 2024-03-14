import { ScrollView, StyleSheet, Text, View } from "react-native";

const porVerLista = [
  {
    id: 222356465,
    titulo: "Corazon Valiente 1",
  },
  {
    id: 3242342,
    titulo: "El chavo 2, el retorno",
  },
  {
    id: 33434,
    titulo: "Marley, yo y mi otro yo",
  },
  {
    id: 4353454,
    titulo: "Dragon Ball",
  },
  {
    id: 4354,
    titulo: "Titanic",
  },
  {
    id: 666666,
    titulo: "Los rugrats",
  },
  {
    id: 9999666,
    titulo: "Los bananas en pijama",
  },
  {
    id: 995599666,
    titulo: "Oky doki",
  },
  {
    id: 99666,
    titulo: "Peluuuu",
  },
  {
    id: 226465,
    titulo: "Corazon Valiente 1",
  },
  {
    id: 3242722227342,
    titulo: "El chavo 2, el retorno",
  },
  {
    id: 3347722234,
    titulo: "Marley, yo y mi otro yo",
  },
  {
    id: 43555342254,
    titulo: "Dragon Ball",
  },
  {
    id: 474442227354,
    titulo: "Titanic",
  },
  {
    id: 6666564445666,
    titulo: "Los rugrats",
  },
  {
    id: 999934443666,
    titulo: "Los bananas en pijama",
  },
  {
    id: 995544499666,
    titulo: "Oky doki",
  },
  {
    id: 996565664446,
    titulo: "Peluuuu",
  },
];

const SelectedOption = ({ opcion }) => {
  if (opcion === "porVer") {
    return (
      <ScrollView style={styles.containerLista}>
        {porVerLista.map((porVer) => (
          <Text style={styles.item} key={porVer.id}>
            - {porVer.titulo}
          </Text>
        ))}
      </ScrollView>
    );
  }
  if (opcion === "vistas") {
    return (
      <View>
        <Text>vistas</Text>
      </View>
    );
  }
  return null;
};

export default SelectedOption;

const styles = StyleSheet.create({
  containerLista: {
    paddingHorizontal: 5,
    gap: 2,
  },
  item: {
    padding: 15,
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
});
