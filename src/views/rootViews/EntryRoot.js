import React, { lazy, Suspense } from 'react';
import styled from '@emotion/styled';

const AppRoutes = lazy(() => import('../layouts/AppRoutes.js'));

const Container = styled('div')({
  height: '100vh'
});

const EntryContainer = styled('div')({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  minWidth: 574
});

const EntryRoot = ({
  location
}) => (
    <Container>
      <EntryContainer>
        <Suspense fallback={<div />}>
          <AppRoutes location={location} />
        </Suspense>
      </EntryContainer>
    </Container>
);

export default EntryRoot;
