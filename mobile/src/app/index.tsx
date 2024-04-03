import { View, Image, Alert } from "react-native";

import { Link, Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { api } from "@/server/api";
import axios from "axios";
import { useBadgeStore } from "@/store/badge-store";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const badgeStore = useBadgeStore();
  // console.log("DATA =>", badgeStore.data);

  async function handleAccessCredencial() {
    try {
      if (!code.trim()) {
        Alert.alert("Ingresso", "Informe o código do ingresso");
      }

      setIsLoading(true);

      const { data } = await api.get(`/attendees/${code}/badge`);

      if (data.badge.id) {
        badgeStore.save(data.badge);
        //router.push("/ticket");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      if (axios.isAxiosError(error)) {
        if (String(error.response?.data.message).includes("not found")) {
          return Alert.alert("Ingresso", "Ingresso não encontrado");
        }
      }

      Alert.alert("Ingresso", "Ocorreu um erro, tente novamente");
    }
  }

  if (badgeStore.data?.checkInURL) {
    return <Redirect href="/ticket" />;
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar style="light" />
      <Image
        source={require("@/assets/logo.png")}
        className="h-16"
        resizeMode="contain"
      />
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={20}
            color={colors.gray[200]}
          />
          <Input.Field
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>

        <Button
          title="Acessar credencial"
          onPress={handleAccessCredencial}
          isLoading={isLoading}
        />
        <Link
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}
