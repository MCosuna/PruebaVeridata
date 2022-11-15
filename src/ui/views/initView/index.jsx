import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import InitCard from "../../modules/cards";
import axios from "axios";


export const InitView = () => {

    const [data, setData] = useState(null);

    async function fetchData() {
        try {
            const response = await axios.get("https://testimonialapi.toolcarton.com/api");
            setData(response.data);
        } catch (err) {
            console.warn(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                {data?.map((list) => {
                    const { id, message, avatar, location, name, rating } = list;
                    return (
                        <Grid item key={id}>
                            <InitCard
                                nombre={name}
                                location={location}
                                usuario_foto={avatar}
                                contenido={message}
                                rating={rating}
                            ></InitCard>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}



export default InitView
