export default function onSubmit(data, setData, navigation) {
  setData(data);
  navigation.goBack();
}
