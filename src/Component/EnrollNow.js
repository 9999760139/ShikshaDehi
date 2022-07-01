import React from 'react'
import './EnrollNow.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import {useMediaQuery,
    useTheme} from '@mui/material';
import Container from '@mui/material/Container';



export default function EnrollNow(props) {
    // console.log(props);
    // console.log(props.enrollnow.heading);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    // const [values, setValues] = React.useState({
    //     password: '',
    //     showPassword: false,
    // });
    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };
    const [name, setName] = React.useState('');
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="enroll_now">
            <Container>
                <h1>{props.enrollnow.heading}</h1>
                <p>{props.enrollnow.descritpion}</p>
            </Container>
            {matches ? (

            <Box sx={{ justifycontent: "center" }}>

                <TextField className="textfield_mobile" sx={{ my: 1,}}
                required
                    id="outlined-adornment-name"
                    label={props.enrollnow.name_lable}
                    width='76ch'
                    value={name}
                    onChange={handleChangeName}
                />
               
                <br /> 
                <TextField className="textfield_mobile" sx={{ my: 1,}}
                    required
                    // error}
                    id="outlined-required"
                    label="Email"
                    type="email"
                    
                    // defaultValue="enter email address"
                />
                <br/>
                <TextField className="textfield_mobile" sx={{ my: 1,}}
                    id="outlined-number"
                    label={props.enrollnow.contact_lable}
                    variant="outlined"
                    type="number"
                />
                <Button className="textfield_button" sx={{ my: 1, height: '8ch', bgcolor: "rgba(50, 50, 50)", color: "silver" }}>
                    Enroll Now
                </Button>
            </Box>
            ) : (<Box sx={{ justifycontent: "center" }}>

            <TextField sx={{ m: 1, width: '50%' }}
            required
                id="outlined-adornment-name"
                label={props.enrollnow.name_lable}
                width='76ch'
                value={name}
                onChange={handleChangeName}
            />
           
            <br /> 
            <TextField sx={{ m: 1, width: '50%' }}
                required
                // error}
                id="outlined-required"
                label="Email"
                type="email"
                
                // defaultValue="enter email address"
            />
            <br/>
            <TextField sx={{ m: 1, width: '50%' }}
                id="outlined-number"
                label={props.enrollnow.contact_lable}
                variant="outlined"
                type="number"
            />
            <Button color="secondary" variant="contained" sx={{ m: 1, height: '8ch', width: '50%', }}>
                Enroll Now
            </Button>
        </Box>)}
        </div>
    )
}
