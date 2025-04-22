import { Box, Text } from 'ink';

export const Banner = (props: { name: string, version: string, cwd: string }) => {

  const ORANGE_COLOR = "#FE9900";

  return (
    <Box 
      borderStyle="round" 
      paddingX={1} 
      borderColor={ORANGE_COLOR}  
      flexDirection="column"
    >
      <Box paddingBottom={1}>
        <Text bold color={ORANGE_COLOR}>React + Ink Example Application</Text>
      </Box>
      <Text>cwd: {props.cwd}</Text>
      <Text>{props.name}</Text>
      <Text>version: {props.version}</Text>
    </Box>
  )
};
