import styled from '@emotion/styled';

const ViewPortLayer = styled('div')(({ theme }) => ({
  backgroundColor: theme.primaryColor,
  width: '100%',
  height: '100%',
  overflow: 'hidden'
}));

export default ViewPortLayer;
