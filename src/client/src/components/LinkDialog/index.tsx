import { createStyles, Dialog, DialogContent, DialogTitle, Link, Theme, Typography, withStyles } from "@material-ui/core";

const styles =(theme: Theme) => createStyles({
    
})

const LinkDialog = withStyles(styles) (({open, link, close}: {open:boolean, link: {href: string, url: string}, close: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void}) => {

    return (
        <Dialog open={open} onClose={close}>
            <DialogTitle>Thank you for using <strong>CROWRL</strong></DialogTitle>
            <DialogContent >
                <Typography align="center">
                    <Typography variant="h6">Here is your link:</Typography>
                    <Link target="_blank" rel="noreferrer" href={link.href} > {link.url}</Link>
                </Typography>
            </DialogContent>
        </Dialog>
    )
})

export default LinkDialog;