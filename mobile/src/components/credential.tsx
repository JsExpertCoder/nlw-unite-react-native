import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { BadgeStore } from "@/store/badge-store";

import { MotiView } from "moti";

import { Feather } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";

type Props = {
  data: BadgeStore;
  onAvatarChange?: () => void;
  onQRCodeExpand?: () => void;
};

export default function Credential({
  data,
  onAvatarChange,
  onQRCodeExpand,
}: Props) {
  const { height } = useWindowDimensions();
  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: -height,
        rotateX: "30deg",
        rotateY: "30deg",
        rotateZ: "30deg",
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        rotateX: "0deg",
        rotateY: "0deg",
        rotateZ: "0deg",
      }}
      transition={{
        type: "spring",
        damping: 20,
        rotateZ: {
          damping: 15,
          mass: 3,
        },
        // duration: 5000,
      }}
      className="w-full self-stretch items-center"
    >
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />
      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 self-stretch items-center border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">
              {data.eventTitle}
            </Text>
            <Text className="text-zinc-50 text-sm font-bold">#{data.id}</Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        {data.image ? (
          <TouchableOpacity activeOpacity={0.9} onPress={onAvatarChange}>
            <Image
              source={{ uri: data.image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-gray-400 items-center justify-center w-36 h-36 rounded-full -mt-24"
            activeOpacity={0.9}
            onPress={onAvatarChange}
          >
            <Feather name="camera" size={32} color={colors.green[400]} />
          </TouchableOpacity>
        )}

        <Text className="text-zinc-50 text-2xl font-bold mt-4">
          {data.name}
        </Text>

        <Text className="text-base text-zinc-300 font-regular mb-4">
          {data.email}
        </Text>

        {/* <Image
          source={require("@/assets/ticket/qrcode.png")}
          className="w-32 h-32 mt-4"
        /> */}
        <QRCode value={data.checkInURL} size={120} />

        <TouchableOpacity
          className="mt-6"
          activeOpacity={0.7}
          onPress={onQRCodeExpand}
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QR-Code
          </Text>
        </TouchableOpacity>
      </View>
    </MotiView>
  );
}
