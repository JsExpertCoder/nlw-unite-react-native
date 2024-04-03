import { useState } from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";

import { Redirect } from "expo-router";

import * as ImagePicker from "expo-image-picker";

import { MotiView } from "moti";

import { FontAwesome } from "@expo/vector-icons";

import { useBadgeStore } from "@/store/badge-store";

import Header from "@/components/header";
import Credential from "@/components/credential";
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import { QRCode } from "@/components/qrcode";

export default function Ticket() {
  const [expandeQRCode, setExpandeQRCode] = useState(false);

  const badgeStore = useBadgeStore();

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (result.assets) {
        badgeStore.updateAvatar(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem");
    }
  }

  async function handelShareCredential() {
    try {
      if (badgeStore.data?.checkInURL) {
        await Share.share({
          message: badgeStore.data.checkInURL,
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Compartilhar", "Ocorreu um erro, tente novamente");
    }
  }
  if (!badgeStore.data?.checkInURL) {
    return <Redirect href="/" />;
  }

  return (
    <View className="flex-1 bg-green-500">
      <Header title="Minha Credencial" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
      >
        {/* image="https://github.com/JsExpertCoder.png" */}
        <Credential
          data={badgeStore.data}
          onAvatarChange={handleSelectImage}
          onQRCodeExpand={() => setExpandeQRCode(true)}
        />

        <MotiView
          from={{
            translateY: 0,
          }}
          animate={{
            translateY: 10,
          }}
          transition={{
            loop: true,
            type: "timing",
            duration: 700,
          }}
        >
          <FontAwesome
            name="angle-double-down"
            size={24}
            color={colors.gray[300]}
            className="self-center my-6"
          />
        </MotiView>

        <Text className="text-white text-2xl font-bold mt-4">
          Compartilhar Credencial
        </Text>

        <Text className="text-white text-base font-regular mt-1 mb-6">
          Mostre ao mundo que você vai participar do{" "}
          {badgeStore.data.eventTitle}
        </Text>

        <Button title="Compartilhar" onPress={handelShareCredential} />

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-10"
          onPress={() => badgeStore.remove()}
        >
          <Text className="text-white text-base font-bold text-center">
            Remover Ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal visible={expandeQRCode} statusBarTranslucent animationType="slide">
        <View className="flex-1 bg-green-500 items-center justify-center">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setExpandeQRCode(false)}
          >
            <QRCode value={badgeStore.data.checkInURL} size={300} />
            <Text className="font-body text-orange-500 text-sm text-center mt-10">
              Fechar QRCode
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
