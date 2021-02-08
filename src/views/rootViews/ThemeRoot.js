import React from 'react';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import styled from '@emotion/styled';

import themes from '../../styles/themes';
import ViewPortLayer from '../components/ViewPortLayer';

const Container = styled(ViewPortLayer)({
  userSelect: 'auto'
});

const ThemeRoot = ({ children }) => (
  <ThemeProvider theme={themes.default}>
    <Container>
      {children}
    </Container>
  </ThemeProvider>
);

export default ThemeRoot;
