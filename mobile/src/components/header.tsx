import { View, Text } from "react-native";

import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <View className="w-full h-28 flex-row items-end bg-black/20 px-8 pb-4 border-b border-b-white/10">
      {/* <MaterialIcons
        name="arrow-back"
        size={20}
        color={colors.white}
        onPress={() => router.push("/")}
      /> */}
      <Text className="flex-1 text-white text-center text-lg font-medium">
        {title}
      </Text>
    </View>
  );
}
