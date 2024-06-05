import { Spin } from "antd";

interface IProps {
    show: boolean;
}

// export const Loading = ({ show }:IProps) => {
//     return (
//         show &&
//         <div
//             className="d-flex justify-center align-items-center"
//             style={{
//                 position: "fixed",
//                 zIndex: 99,
//                 width: "100vw",
//                 height: "100vh",
//                 backgroundColor: 'rgb(0,0,0,0.3)'
//             }}
//         >
//             <div 
//                 className="spinner-border"
//                 role="status"
//                 style={{
//                     width: "3rem",
//                     height: "3rem"
//                 }}
//             >
//             </div>
//         </div>
//     )
// }

export const Loading = ({ show }:IProps) => {
    return (
        show && <Spin fullscreen spinning size="large" />
    )
}