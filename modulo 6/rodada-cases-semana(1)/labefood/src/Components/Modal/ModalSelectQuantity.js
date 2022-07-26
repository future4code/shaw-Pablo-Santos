import * as React from 'react';
import { BoxModal, ButtonAddToCart, SelectQuantity, TittleModal } from './styled'
import Modal from '@mui/material/Modal';



const ModalSelectQuantity = ({ open, setOpen }) => {



  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >

        <BoxModal>
          <TittleModal>
            Selecione a quantidade desejada
          </TittleModal>
          <SelectQuantity>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </SelectQuantity>
          <ButtonAddToCart>Adicionar ao carrinho</ButtonAddToCart>
        </BoxModal>

      </Modal>
    </>
  );
}
export default ModalSelectQuantity