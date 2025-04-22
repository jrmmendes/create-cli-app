import { Box, Text } from 'ink';

export const Tips = () => {
  const values = [
    "1. Setup docker and docker compose", 
    "2. Create you template yaml with :init template", 
    "3. update your package scripts with :init scripts"
  ]
  return (
    <Box flexDirection="column">
      <Box paddingBottom={1}>
        <Text color="gray">Tips for getting started: </Text>
      </Box>
      {values.map((step, index) => (
        <Text key={index} color="gray">{step}</Text>
      ))}
    </Box>
  )
}
