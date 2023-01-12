import React, {useState, useEffect} from 'react';


const ProfileStatusWithHook = (props) => {
let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect( () => {
    setStatus (props.status);
}, [ props.status] );

   const  activatedMode = () => {
       setEditMode(true)
    }

    const deactivatedMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }



    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activatedMode}> {props.status || "---------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}  autoFocus={true} onBlur={deactivatedMode} value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHook;