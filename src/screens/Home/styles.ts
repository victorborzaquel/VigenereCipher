import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Box = styled.View`
  width: 100%;
  flex: 1;
  background-color: #0c5b74;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Toggle = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom-width: 1px;
  border-color: #ddd;
  margin-bottom: 5px;
`;

export const SecretBox = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30px;
`;

export const TitleWrapper = styled.View`
  justify-content: center;
  width: 120px;
  height: 100%;
  margin-right: 10px;
`;


export const BoxTitle = styled.Text`
  padding: 5px 15px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const ToggleTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const SecretBoxTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  
`;

export const SecretKey = styled.TextInput`
  background-color: #ddd;
  flex: 1;
  padding: 0 10px;
  border-radius: 5px;
`;

export const CopyButton = styled.TouchableOpacity`
  flex: 1;
`;

export const Output = styled.Text`
  flex: 1;
  background-color: #ddd;
  padding: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 16px;
`;

export const CopyTitle = styled.Text`
  position: absolute;
  background-color: #177a0a;
  padding: 10px 15px;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  right: 10px;
  bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #ddd;
  padding: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 16px;
`;
