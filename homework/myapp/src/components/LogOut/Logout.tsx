import { useAppDispatch, useAppSelector } from "store";
import { usersActions, userSelectors } from "store/users/config";

const Logout = () => {
    const user = useAppSelector(userSelectors.selectUser)
    const dispatch = useAppDispatch()
    const handleClick=(e:any)=>{
        e.preventDefault()
        dispatch(usersActions.logout())
    }
    return (
        <div >
             <button onClick={(e:any)=>{handleClick(e)}}>Logout</button>
        </div>
    );
};
export default Logout;