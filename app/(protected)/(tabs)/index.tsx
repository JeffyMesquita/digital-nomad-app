import { Box } from "@/src/components/Box";
import { Text } from "@/src/components/Text";
import { useAppTheme } from "@/src/theme/useAppTheme";

export default function HomeScreen() {
  const theme = useAppTheme();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="mainBackground"
    >
      <Text color="text">Home Screen</Text>
      <Text color="text">{theme.colors.text}</Text>
    </Box>
  );
}
