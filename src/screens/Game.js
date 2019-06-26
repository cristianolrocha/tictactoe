import React from 'react';
import {
  RootView,
  Container,
  RowGameView,
  CellGameView,
  CellText,
  Footer,
  FooterContentCol,
  FooterContentAction,
  FooterTitle,
} from './Game.styles';

export const Game = () => (
  <RootView>
    <Container>
      <RowGameView>
        <CellGameView>
          <CellText>O</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>X</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>O</CellText>
        </CellGameView>
      </RowGameView>
      <RowGameView>
        <CellGameView>
          <CellText>X</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>0</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>X</CellText>
        </CellGameView>
      </RowGameView>
      <RowGameView>
        <CellGameView>
          <CellText>O</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>X</CellText>
        </CellGameView>
        <CellGameView>
          <CellText>O</CellText>
        </CellGameView>
      </RowGameView>
    </Container>
    <Footer>
      <FooterContentCol />
      <FooterContentAction>
        <FooterTitle>Reset</FooterTitle>
      </FooterContentAction>
      <FooterContentCol />
    </Footer>
  </RootView>
);
