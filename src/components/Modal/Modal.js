import React from 'react'
import styled from '@emotion/styled'
import Modal from '@mui/material/Modal'
import { useSelector } from 'react-redux'
import { clearModal } from '../../redux/actions/modal.ac'
import { getModalState } from '../../redux/selectors'
import componentsMap from './registredContent'
import Adapter from '../Adapter/Adapter'

const Wrapper = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(47, 53, 66, 0.26);
  border-radius: 20px;
  min-width:300px;
  min-height:50px;
  padding:30px;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  transition: all 0.5s ease;
`

export const RootModal = () => {
  const { modalType, modalProps } = useSelector(getModalState)
  return (
    <Modal disableScrollLock style={{overflow: 'scroll'}} open={Boolean(modalType)} onClose={clearModal}>
      <Wrapper>
        <Adapter
          compType={modalType}
          registredContent={componentsMap}
          {...modalProps}
        />
      </Wrapper>
    </Modal>
  )
}
