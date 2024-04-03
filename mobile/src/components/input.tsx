import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { colors } from "@/styles/colors";

function Input({ children }: { children: ReactNode }) {
  return (
    <View className="w-full h-14 flex-row items-center gap-3 px-3 border border-green-400 rounded-lg">
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 h-12 text-white text-base font-regular"
      {...rest}
      placeholderTextColor={colors.gray[200]}
    />
  );
}

Input.Field = Field;

export { Input };
