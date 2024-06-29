import React, { createContext, forwardRef, useContext, useState } from "react";
import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import Slide from '@mui/material/Slide';
export const SnackbarContext = createContext();

// export const SnackbarContextProvider = (props) => {
//     const [open, setOpen] = useState(false);
//     const [message, setMessage] = useState("");
//     const [severity,setSeverity] = useState("succes");
//     const [vertical, setVertical] = useState("top");
//     const [horizontal, setHorizontal] = useState("right");

//     const handleSnackbarClose = (event, reason) => {
//         if (reason === "clickaway") {
//             return;
//         }
//         setOpen(false);
//     };

//     const showSnackbar = (message, severity) => {
//         setMessage(message);
//         setSeverity(severity);
//         setOpen(true);
//     };


//     return (
//         <div>
//             <SnackbarContext.Provider
//                 value={{
//                   handleSnackbarClose,
//                     showSnackbar,
//                     message,
//                     severity,
//                     open,vertical,horizontal,
//                 }}
//             >
//                 {props.children}
                
//             </SnackbarContext.Provider>
//         </div>
//     );
// };

// export const MuiSnackbar = () => {
//   const {handleSnackbarClose,open,message,severity,vertical,horizontal}=useContext(SnackbarContext);

//   return(
//           <Snackbar
//             open={open}
//             autoHideDuration={6000}
//             // onClose={handleSnackbarClose}
//             anchorOrigin={{ vertical, horizontal }}
//             TransitionComponent={(props) => <Slide {...props} direction="up"/>}>
           

//           <Alert
//             variant="outlined"
//             onClose={handleSnackbarClose}
//             severity={severity}
//             sx={{ width: "70%" }}>
//               {message}
//           </Alert>
//           </Snackbar>
//     )
// };







export const SnackbarContextProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("success"); // Corrected typo here
    const [vertical, setVertical] = useState("top");
    const [horizontal, setHorizontal] = useState("right");
    const [snackbarQueue, setSnackbarQueue] = useState([]);

    const handleSnackbarClose = (key) => (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarQueue((prevQueue) => prevQueue.filter((item) => item.key !== key));
    };

    const showSnackbar = (message, severity) => {
        setMessage(message);
        setSeverity(severity);
        const key = new Date().getTime();
        setSnackbarQueue((prevQueue) => [...prevQueue, { message, severity, key }]);
        setOpen(true);
    };
    console.log("Queue",snackbarQueue);
    return (
        <SnackbarContext.Provider
            value={{
                handleSnackbarClose,
                showSnackbar,
                open,
                vertical,
                horizontal,
                snackbarQueue
            }}
        >
            {props.children}
        </SnackbarContext.Provider>
    );
};



 export const MuiSnackbar = () => {
    const { handleSnackbarClose, open, vertical, horizontal, snackbarQueue } = useContext(SnackbarContext);

    return (
        <>
            {snackbarQueue.map((item) => (
                <Snackbar
                    key={item.key}
                    open={open} 
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose(item.key)}
                    anchorOrigin={{ vertical, horizontal }}
                    TransitionComponent={(props) => <Slide {...props} direction="up"/>}
                >
                    <Alert
                        variant="outlined"
                        onClose={handleSnackbarClose(item.key)} 
                        severity={item.severity}
                        sx={{ width: "70%"}}
                    >
                        {item.message}
                    </Alert>
                </Snackbar>
            ))}
        </>
    );
};