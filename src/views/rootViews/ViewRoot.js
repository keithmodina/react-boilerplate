import React, { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import ViewPortLayer from '../components/ViewPortLayer';

const AppRoutes = lazy(() => import('../layouts/AppRoutes.js'));

const AppRoutesContainer = styled('div')({
  height: '100%',
  margin: '60px 40px 0',
  minWidth: 1080
});

const MainViewContainer = styled('div')({
  width: 'auto',
  height: '100%',
  position: 'relative',
  flex: '1 auto',
  display: 'flex',
  flexDirection: 'column'
});

const ContextLayer = styled('div')({
  width: 'auto',
  height: '100%',
  display: 'flex'
});

const AppPageContext = styled(ViewPortLayer)(({ theme }) => ({
  backgroundColor: theme.mainBGColor,
  height: '100vh',
  width: '100%',
  display: 'flex'
}), {
  position: 'relative',
  flexDirection: 'column',
  flex: '1 auto'
});

const BodyContainer = styled('div')({
  display: 'flex',
  height: '100%'
});

const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  background: theme.bodyColor
}));

const ViewRoot = ({
  location
}) => {
  return (
    <ContextLayer>
      <AppPageContext id="AppPageContext">
        <BodyContainer>
          <ContentContainer>
              <MainViewContainer>
                <AppRoutesContainer>
                  <Suspense fallback={<div />}>
                    <AppRoutes location={location} />
                  </Suspense>
                </AppRoutesContainer>
              </MainViewContainer>
          </ContentContainer>
        </BodyContainer>
      </AppPageContext>
    </ContextLayer>
  );
};

export default connect(state => ({}), {})(ViewRoot);
