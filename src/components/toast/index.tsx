// import { Toast as ToastBootstrap } from "react-bootstrap";
import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";
import { useEffect } from "react";

type ToastProps = {
    show: boolean;
    text: string;
    type?: NoticeType;
    onClose: () => void;
}

// export const Toast = ({ bgColor: colors, message, onClose, show}: ToastProps) => {
//     return(
//         <ToastBootstrap
//             onClose={onClose}
//             show={show}
//             delay={3000}
//             bg={colors ?? "success"}
//             autohide
//             style={{
//                 position: "absolute",
//                 zIndex: 99,
//                 right: 0,
//                 margin: "20px",
//                 color: "white",
//                 fontWeight: "bold"
//             }}
//         >
//             <ToastBootstrap.Body>
//                 { message }   
//             </ToastBootstrap.Body>    
//         </ToastBootstrap>
//     );
// }

export const Toast = ({ text, show, type, onClose }: ToastProps) => {
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if(show){
            messageApi.open({
                type,
                content: text,
                onClose
            });
        }
    }, [show]);

    return (
        <>
            { contextHolder }
        </>
    );
}