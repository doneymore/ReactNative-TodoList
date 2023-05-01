import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";

export default function AddTodo({ addTodos }) {
  const [value, setValue] = useState("");
  const handleValue = (val) => {
    setValue(val);
  };
  return (
    <View>
      <TextInput
        placeholder="new todo..."
        onChangeText={handleValue}
        style={styles.input}
      />

      <Button onPress={() => addTodos(value)} title="Add Todo" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
});
