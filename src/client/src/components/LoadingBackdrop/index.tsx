import { Backdrop, CircularProgress } from "@material-ui/core";


const LoadingBackdrop = ({ open }: { open: boolean }) => (
    <Backdrop open={open}>
        <CircularProgress style={{
            color: "#aaa"
        }}/>
    </Backdrop>
);

export default LoadingBackdrop;