import { useState } from "react";
import LinkDialog from "./components/LinkDialog";
import LoadingBackdrop from "./components/LoadingBackdrop";
import UrlInput from "./components/UrlInput";
import axios from 'axios';
import { Typography } from "@material-ui/core";

function App() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [id, setId] = useState('');


  const handleClick = (iUrl: string) => {
    setLoading(true);
    setUrl(iUrl);
    axios({
      method: "POST",
      url: "/api/shorten",
      data: {
        url: url
      }
    }).then(value => {
      setLoading(false);
      setLoaded(true);
      setShortUrl(value.data.shortenUrl);
      setId(value.data._id);
      console.log(value.data);
    })
      .catch(err => console.error(err))
  }


  const closeHandle = () => {
    setLoaded(false);
  }


  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      height: "10rem",
      flexDirection: "column",
      marginTop: "4rem",
      gap: "3rem"
    }} className="App">
      <Typography variant="h4">Shorten your URLs!</Typography>
      <UrlInput handleClick={handleClick} />
      <LinkDialog open={loaded} link={{
        href: `/${id}`,
        url: `${shortUrl}`
      }} close={closeHandle}/>
      <LoadingBackdrop open={loading} />
    </div>
  );
}

export default App;
