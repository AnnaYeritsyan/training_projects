import { useEffect, useState } from "react";
import Tables from "./Tables/Tables";
import { useAppDispatch, useAppSelector } from "../../store";
import { userSelectors, usersActions } from "store/users/config";
import { Button,  } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ModalComponent from "./modal";


const Dashboard = () => {
    const placeholderData = useAppSelector(userSelectors.selectPlaceholderData);
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState<Boolean>(false)

    useEffect(() => {
        dispatch(usersActions.fetchPlaceholderData());
    }, []);

    const [fetchedData, setFetchedData] = useState(placeholderData);

    useEffect(() => {
        setFetchedData(placeholderData);
    }, [placeholderData]);
     
    const addButton = () =>{
       
        setOpen(true)
         console.log('add ')
        
    }
    const handleClose = () =>{
        setOpen(false)
    }
    return (
        <div>
            <h1>Dashboard</h1> 
            <Button  variant="contained"
                      startIcon={<AddBoxIcon />} onClick={addButton}>Add</Button>
            
             <ModalComponent  modalOpen = {open} onClose={handleClose}/>
            
            
            <Tables fetchData={fetchedData} setFetchData={setFetchedData} />
           
        </div>
    );
};
export default Dashboard;
