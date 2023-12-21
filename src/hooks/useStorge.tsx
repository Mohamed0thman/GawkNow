import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";

const useStorge = () => {
  const [storge, setStorge] = useState({});
  const importData = async () => {
    try {
      const result: any = {};

      const keys = await AsyncStorage.getAllKeys();

      for (const key of keys) {
        const val = await AsyncStorage.getItem(key);
        result[key] = val ? JSON.parse(val) : null;
      }
      setStorge(result);
    } catch (error) {
      console.error(error);
    }
  };

  const saveData = async (STORAGE_KEY: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log("data save ");
    } catch (e) {
      console.log("Failed to  save data ");
    }
  };

  const readData = async (STORAGE_KEY: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("Failed to fetch the input from storage");
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("Storage successfully cleared!");
    } catch (e) {
      console.log("Failed to clear the async storage.");
    }
  };

  // useEffect(() => {
  //   importData();
  // }, []);

  return {importData, storge, saveData, readData, clearStorage};
};

export default useStorge;
