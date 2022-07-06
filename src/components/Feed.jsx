import React from 'react';
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles';
const Feed = () => {
  const Contain = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(10)
  }))
  return (
    <Contain>Feed</Contain>
  )
}

export default Feed