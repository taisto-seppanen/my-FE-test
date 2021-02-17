import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Container, Grid, Paper, Box } from "@material-ui/core";
import 'fontsource-roboto';
import { makeStyles } from "@material-ui/core/styles";
import JSONDATA from "./someData.json";
import {useState} from "react";

// Контент подгружается с someData.json в формате {"date":"дата поста","pic":"ссылка на картинку","тест записи","subj":"тема записи"}]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
  
    formControl: {
      margin: theme.spacing(5),
      minWidth: 150,
    }
  }))
  
function Content() {
    const Classes = useStyles();

    const [mySearch, setSearch] = useState("")
    const [mySubj, setSubj] = useState("")
    const [myDate, setDate] = useState("")
    
      return (
        <>
        <Container>
        <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={1}>

            <Grid item>

            {/* Поле ввода поисковго запроса */}

                <input className={Classes.formControl} type="text" placeholder="Search..." onChange = { event => 
                { setSearch(event.target.value) } } defaultValue=""  />
            </Grid>

            <Grid item>

            {/* Селектор выбора фильтра по значению date */}

                <select className={Classes.formControl} type="date" placeholder="Order by date" onChange = { event => 
                { setDate(event.target.value) } } defaultValue="">
                <option value="">Order by date</option>
                { JSONDATA.map((val) => { return <option value={ val.date  }> { val.date } </option>})}
                </select>
                </Grid>

            <Grid item>

            {/* Селектор выбора фильтра по значению Subj */}

                <select className={Classes.formControl} type="text" placeholder="Filter by category" onChange = { event => 
                { setSubj(event.target.value) } } defaultValue="">
                <option value="">Filter by category</option>
                { JSONDATA.map((val) => { return <option value={ val.subj  }> { val.subj } </option>})}
                </select>
                </Grid>
            </Grid>
             
        <Grid container direction="column" justify="space-around" alignItems="stretch" spacing={1}>

            { JSONDATA
            
            .filter((val) => { if ( mySearch == "") {
                return val
            } else if (val.text.toLowerCase().includes(mySearch.toLowerCase())) {
                return val
            } 
            })
            .filter((val) => { if ( mySubj == "") {
                return val
            } else if (val.subj.toLowerCase().includes(mySubj.toLowerCase())) {
                return val
            } 
            })
            .filter((val) => { if ( myDate == "") {
                return val
            } else if (val.date.toLowerCase().includes(myDate.toLowerCase())) {
                return val
            } 
            })
            .map((val) => {
             return <Box> { 
                
                

            <Grid item item xs={12}>
                <Paper elevation={3}>
                  
                <table>

                <tr>

                  <td><Box><img width={150} height={150} src={ val.pic } alt="pic" /></Box></td>
                  <td><Box>{val.text}</Box></td>

                </tr>
                </table>
                </Paper>
              </Grid>
                }</Box>
            })}
        </Grid>
      </Container>
      </>
      );}

export default Content;





