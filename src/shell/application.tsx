import { useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';

import { Banner } from '@/shell/components/banner';
import { Content } from '@/shell/components/content';


export const Application = ({ name, version }: { name: string, version: string }) => {
  const [command, setCommand] = useState('');
  const [message, setMessage] = useState<string>();
  const [output, setOutput] = useState<string>()

  useInput((input, key) => {
    if (key.return && command === ':h') {
      setOutput(
        ':q - quit shell\n'+
        ':h - Show this help'
      );
    }
    if (key.return && command === ':q') {
      process.exit(0);
    }
  });

  useEffect(() => {
    if (command === ':q') {
      setMessage(':q - quit samless')
      return;
    }

    if (command === ':h') {
      setMessage(':h - help')
      return;
    }
    setMessage('');
  }, [command])

  return (
    <Box width={80} paddingX={1} flexDirection="column">
      <Banner 
        cwd={process.cwd()}
        name={name}
        version={version}
      />

      <Content>
        {output && <Text>{output}</Text>}
      </Content>

      <Box 
        borderStyle="round" 
        borderColor="gray"
      >
        <Text>{" > "}
          <TextInput 
            value={command} 
            onChange={setCommand} 
            placeholder="try :h for help"
          />
        </Text>
      </Box>
      <Text color="gray">{message}</Text>
    </Box>
  )
}
