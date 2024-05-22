import { Toast as ToastBootstrap } from "react-bootstrap";

type ToastProps = {
    show: boolean;
    message: string;
    bgColor?: string;
    borderColor?: string;
    onClose(): void; 
}

export const Toast = ({ bgColor: colors, message, onClose, show}: ToastProps) => {
    return(
        <ToastBootstrap
            onClose={onClose}
            show={show}
            delay={3000}
            bg={colors ?? "success"}
            autohide
            style={{
                position: "absolute",
                zIndex: 99,
                right: 0,
                margin: "20px",
                color: "white",
                fontWeight: "bold"
            }}
        >
            <ToastBootstrap.Body>
                { message }   
            </ToastBootstrap.Body>    
        </ToastBootstrap>
    );
}