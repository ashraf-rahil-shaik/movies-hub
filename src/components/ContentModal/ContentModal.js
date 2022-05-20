import * as React from 'react';
import { useEffect ,useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import  Box  from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { img_500,unavailable , unavailableLandscape } from '../../Config/Config';

import axios from "axios"
import "./ContentModal.css";
import { Button } from '@mui/material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import Carousel from "../Carousel/Carousel";

const style = {
 
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  
  bgcolor: '#cff0f9',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color:"black",
  
};

export default function ContentModel({children,media_type,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content,setContent] = React.useState()
  const [video, setVideo] = useState();
const fetchData = async () =>{

  const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

  setContent(data)}
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
console.table([data.results])
    setVideo(data.results[0]?.key);
  };
useEffect(()=>{
  fetchData()
  fetchVideo()
  // eslint-disable-next-line
},[])
  return (

    <div>
      <div onClick={handleOpen} className='media'>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx ={style} className='Box'>
          {content && (
            <div >
              <div className="ContentModal">
                <img
                  src={
                    content.poster_path
                      ? `${img_500}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${img_500}/${content.backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={content.name || content.title}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <div className="ContentModal__description">
                    {content.overview}
                  </div>

                  <div>
                    <Carousel id={id} media_type={media_type} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    // color="primary"
                    sx ={{backgroundColor:"red"}}
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
          </Box> 
        </Fade>
      </Modal>
    </div>
  );
}
