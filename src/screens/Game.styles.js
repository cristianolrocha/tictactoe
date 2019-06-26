import styled from 'styled-components';
import { TRANSPARENT, GRAY, GREEN, WHITE, GREEN_DARK } from '../styles/styles';
import { MEDIUM, BLACK } from '../styles/fontFamily';

export const RootView = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0px;
  background-color: red;
`;

export const Container = styled.View`
  flex: 0.92;
  background-color: ${TRANSPARENT};
`;

export const RowGameView = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${GREEN_DARK};
  justify-content: center;
`;

export const CellGameView = styled.TouchableOpacity`
  flex: 0.33;
  background-color: ${GREEN};
  border: 3px solid ${GREEN_DARK};
  justify-content: center;
`;

export const CellText = styled.Text`
  font-family: ${BLACK};
  color: ${WHITE};
  font-size: 60;
  text-align: center;
`;

export const Footer = styled.View`
  flex: 0.08;
  flex-direction: row;
  background-color: ${GRAY};
`;

export const FooterContentCol = styled.View`
  flex: 0.33;
  justify-content: center;
`;

export const FooterContentAction = styled.TouchableOpacity`
  flex: 0.33;
  justify-content: center;
`;

export const FooterTitle = styled.Text`
  font-family: ${MEDIUM};
  color: ${WHITE};
  font-size: 15;
  text-align: center;
`;
