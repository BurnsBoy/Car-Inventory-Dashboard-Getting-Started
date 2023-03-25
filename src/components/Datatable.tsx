import { useState } from 'react'
import Modal from './Modal'

function Datatable() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
        />
        <div className="">
            <div>
                <button
                    className="btn"
                    onClick={() => handleOpen()}>
                    Create New Car
                </button>
            </div>
            <div>
                <button
                    className="btn">
                    Update
                </button>
            </div>
            <div>
                <button
                    className="btn">
                    Delete
                </button>
            </div>
        </div>
    </>
  )
}

export default Datatable