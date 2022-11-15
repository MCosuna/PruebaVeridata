import { useState } from "react";
import { Card, CardHeader, CardContent, Typography, CardActions, IconButton, Grid } from "@mui/material";
import Avatar from "../../atoms/avatar";
import { TrashSimple, Quotes } from "phosphor-react";


export const InitCard = ({
  rating,
  location,
  contenido,
  nombre,
  usuario_foto,
}) => {

  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ?
        <Card sx={{
          padding: 2.5,
          maxWidth: 400, marginTop: 2,
          boxShadow: `0px 1px 4px rgba(13, 23, 69, 0.2)`,
          height: 206,
          borderRadius: '4px'
        }}>
          <Grid
            container
            direction="row"
            item
            justifyContent="space-between"
            alignItems="center"
          >
            <CardHeader
              sx={{ marginLeft: '10px', marginRight: '10px' }}
              avatar={
                <Avatar avatarURL={usuario_foto}>
                </Avatar>
              }
              title={nombre}
              subheader={location}
            />
            <Quotes size={32} weight="bold" />
          </Grid>
          <CardContent sx={{ marginLeft: '10px', marginRight: '10px' }}>
            <Typography variant="body2" color="text.secondary">
              {contenido}
            </Typography>
          </CardContent>
          <CardActions >
            <Grid
              container
              direction="row"
              item
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2" sx={{ marginLeft: '10px', marginRight: '10px', fontWeight: 'bold' }}>
                Rating: {rating}
              </Typography>
              <IconButton aria-label="share" onClick={() => setVisible(!visible)} sx={{ marginRight: '10px' }}>
                <TrashSimple size={24} weight="fill" />
              </IconButton>
            </Grid>
          </CardActions>
        </Card>
        : null}
    </>
  );
}



export default InitCard


