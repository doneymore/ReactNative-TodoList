import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddTodo from "./component/addTodo";
import Header from "./component/header";
import Sandbox from "./component/sandbox";
import Todoitem from "./component/todoitem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffe", key: "1" },
    { text: "Create an App", key: "2" },
    { text: "Play on switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.key != key);
    });
  };

  const addTodos = (todos) => {
    if (todos.length > 3) {
      setTodos((prev) => {
        return [{ text: todos, key: Math.random().toString() }, ...prev];
      });
    } else {
      Alert.alert("Oops", "Must be 3 or more characters", [
        { text: "understood", onPress: () => console.log("show alert") },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismiss keyboard");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodos={addTodos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todoitem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
