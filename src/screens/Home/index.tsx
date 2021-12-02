import React, { useState } from 'react';
import { Switch } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import {
  Box,
  BoxTitle,
  Container,
  CopyButton,
  CopyTitle,
  Input,
  Output,
  SecretBox,
  SecretBoxTitle,
  SecretKey,
  TitleWrapper,
  Toggle,
  ToggleTitle,
} from './styles';

export function Home() {
  const [text, setText] = useState('aBVictor.HugaB')
  const [key, setKey] = useState('aBa')
  const [isEncrypt, seIsEncrypt] = useState(true)

  function encryption() {
    const lowercaseConstant = 97
    const uppercaseConstant = 65

    const quantOfLetters = 26

    const isValidCharCode = (charCode: number) => charCode >= 0 && charCode < quantOfLetters

    const getIndexByLetter = (letter: string, constant: number) => letter.charCodeAt(0) - constant
    const getLetterByIndex = (index: number, constant: number) => String.fromCharCode(index + constant)

    const isLowercase = (letter: string) => isValidCharCode(getIndexByLetter(letter, lowercaseConstant))
    const isUppercase = (letter: string) => isValidCharCode(getIndexByLetter(letter, uppercaseConstant))

    const vigenereCipher = (currentIndex: number, quantOfLetters: number) => ((currentIndex % quantOfLetters) + quantOfLetters) % quantOfLetters

    const encryptText = text.split('').map((letter, index) => {
      const constant = isLowercase(letter) ? lowercaseConstant : isUppercase(letter) ? uppercaseConstant : undefined

      const validKey = key.split('').reduce((acc, curr) => {
        const index = getIndexByLetter(curr.toUpperCase(), uppercaseConstant)
        return isValidCharCode(index) ? `${acc}${curr}` : acc
      }, '')

      const keyLength = validKey.length

      if (!constant || keyLength === 0) return letter

      const letterIndex = getIndexByLetter(letter, constant)

      const currKeyLetter = validKey[index % keyLength].toUpperCase()
      const keyIndex = getIndexByLetter(currKeyLetter, uppercaseConstant)

      if (!isValidCharCode(keyIndex)) return letter

      const currentIndex = isEncrypt ? (letterIndex + keyIndex) : (letterIndex - keyIndex)

      const currIndex = vigenereCipher(currentIndex, quantOfLetters)

      const encryptionLetter = getLetterByIndex(currIndex, constant)

      return encryptionLetter
    })

    return encryptText
  }

  function handleCopy() {
    Clipboard.setString(encryption().join(''))
  }

  return (
    <Container>
      <Box>
        <BoxTitle>Resultado</BoxTitle>
        <CopyButton onPress={handleCopy}>
          <Output>{encryption()}</Output>
          <CopyTitle>COPIAR</CopyTitle>
        </CopyButton>
      </Box>

      <Box>
        <BoxTitle>Texto</BoxTitle>
        <Input
          value={text}
          onChangeText={setText}
          textAlignVertical='top'
          multiline={true}
          textAlign='left'
        />
      </Box>

      <Toggle>
        <TitleWrapper>
          <ToggleTitle>{isEncrypt ? 'Criptografar' : 'Descriptografar'}</ToggleTitle>
        </TitleWrapper>

        <Switch
          trackColor={{ true: '#88e3ff', false: '#d6d6d6' }}
          thumbColor={isEncrypt ? '#0c5b74' : '#767577'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={seIsEncrypt}
          value={isEncrypt}
        />
      </Toggle>

      <SecretBox>
        <TitleWrapper>
          <SecretBoxTitle>Chave secreta</SecretBoxTitle>
        </TitleWrapper>

        <SecretKey
          value={key}
          onChangeText={setKey}
        />
      </SecretBox>
    </Container>
  );
}
