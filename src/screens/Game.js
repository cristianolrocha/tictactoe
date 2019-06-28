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
  FooterText,
  FooterTextPlayer,
  FooterContentPlayers,
  FooterPlayerAction,
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
      <FooterContentCol>
        <FooterPlayerAction />
        <FooterContentPlayers>
          <FooterTextPlayer>O</FooterTextPlayer>
        </FooterContentPlayers>
        <FooterPlayerAction />
        <FooterContentPlayers>
          <FooterTextPlayer>X</FooterTextPlayer>
        </FooterContentPlayers>
      </FooterContentCol>
      <FooterContentAction>
        <FooterText>Reset</FooterText>
      </FooterContentAction>
      <FooterContentCol />
    </Footer>
  </RootView>
);
