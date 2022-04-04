import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const NFTcard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
    style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark,
    }}
  >
       <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

      </View>
      <Text>Nft CArd</Text>
      </View>
  )
};

export default NFTcard;
