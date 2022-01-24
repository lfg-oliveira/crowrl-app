import { Button, InputAdornment, TextField } from "@material-ui/core";
import { ChangeEventHandler,  useState } from "react";

const UrlInput = ({ handleClick }: {handleClick: (url:string) => void}) => {
    const [value, setValue] = useState('');

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
            <TextField
                type='text'
                label='Paste your URL here'
                variant="outlined"
                value={value}
                onChange={handleChange}

                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <Button variant="contained" color="primary" onClick={() => handleClick(value)}>Shorten URL</Button>
                    </InputAdornment>
                }}/>
        </>
    )
}

export default UrlInput;