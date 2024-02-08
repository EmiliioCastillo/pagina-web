import { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';

interface Props {
  setopen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  mensajeTipo: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 170,
  bgcolor: '#FFFFFF',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  '@media (max-width: 768px)': {
    width: '90%',
    height: 'auto',
    maxHeight: 500,
  },
};

const modal: React.FC<Props> = ({ setopen, open, mensajeTipo }) => {
  const handleClose = () => setopen(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  let titulo = '';
  let descripcion = '';

  const handleCloseErrorModal = () => {
    // Cierra el modal de error
    setShowErrorModal(false);
  };

  // Personaliza el contenido del modal según el tipo de mensaje
  switch (mensajeTipo) {
    case "Enviado":
      titulo = 'Envio exitoso';
      descripcion = 'Gracias por enviar tu correo, nos pondremos en contacto en instantes.';
      break;
   
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className='modal-title-text'>{titulo}</span>
            <button
              className="close"
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                color: '#000'
              }}
            >
              &times;
            </button>
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span>{descripcion}</span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default modal;