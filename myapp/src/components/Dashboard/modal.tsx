import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalComponent({ modalOpen, onClose }: { modalOpen: any, onClose: any }) {
    const [open, setOpen] = React.useState(modalOpen);
    const [name, setName] = React.useState('')
    const [username, setUserName] = React.useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        if(e.target.name === 'name'){
            setName(e.target.value)
            console.log('name + ' + name)
        }
        if(e.target.name === 'username'){
            setUserName(e.target.value)
            console.log('userNAME + ' + name)

        }
    };
    const onSave = ()=>{
        console.log(name + " " + username)
    }

    React.useEffect(() => {
        setOpen(modalOpen)
    }, [modalOpen])

    return (
        <React.Fragment>
            
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <input type='text' name='name' onChange={handleChange} />
                        <input type='text' name='username' onChange={handleChange}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>close</Button>
                    <Button onClick={onSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
