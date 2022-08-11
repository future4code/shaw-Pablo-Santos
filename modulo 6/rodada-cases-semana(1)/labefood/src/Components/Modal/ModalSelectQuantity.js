
import { BoxModal, ButtonAddToCart, SelectQuantity, TittleModal } from './styled'
import Modal from '@mui/material/Modal';
import React,{ useState } from 'react';



const ModalSelectQuantity = ({ open, setOpen, choiceQuantity }) => {

const [quantity, setQuantity] = useState(1)

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
          <SelectQuantity onChange={(e)=> setQuantity(e.target.value)}>
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
          <ButtonAddToCart onClick={() => choiceQuantity(Number(quantity))}>Adicionar ao carrinho</ButtonAddToCart>
        </BoxModal>

      </Modal>
    </>
  );
}
export default ModalSelectQuantity