import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import './index.scss';
import Grid from '@material-ui/core/Grid';

export default class Index extends Component {


  render() {


    return (
      <div className="App">
        {/* <div className="Container" > */}
        <Grid className="app-container" container xs={12} direction="row" justify="center" alignItems="flex-start"
        >
          <Grid item xs={9} md={2} className="container-photo " >
            <Grid className="border-01-all border-rd-5">
              <div className="photoName ">

              </div>
            </Grid>

            <Grid className="container-portfolio border-01-all border-rd-5">
              Portafolio
            </Grid>
          </Grid>
          <Grid item xs={9} className="container-desc">
            <Grid item xs={12} className="title-name border-01-all border-rd-5"><h4>Mauricio Ross Arevalo</h4></Grid>
            <Grid item xs={12} className="stats border-01-all border-rd-5">
              <Grid container xs={12}>
                <Grid container xs={12} md={6}>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart" id="myCanvas"></canvas> */}
                    <h1 className="progress-html"></h1>
                    <p>Html5</p>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart"></canvas> */}
                    <h1 className="progress-js"></h1>

                    <p>Javascript</p>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart"></canvas> */}
                    <h1 className="progress-css"></h1>

                    <p>Css</p>
                  </Grid>

                </Grid>
                <Grid container xs={12} md={6}>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart"></canvas> */}
                    <h1 className="progress-react"></h1>

                    <p>React JS</p>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart"></canvas> */}
                    <h1 className="progress-angular"></h1>

                    <p>Angular</p>
                  </Grid>
                  <Grid item xs={4} md={4}>
                    {/* <canvas className="pie-chart"></canvas> */}
                    <h1 className="progress-python"></h1>

                    <p>Python</p>
                  </Grid>

                </Grid>
                <Grid xs={12} className="desc">
                  <p>Desarrollador de software fullstack con 5 años de experiencia en distintos roles y tecnologias.
                  Capacidad de investigación, superar problemas y trabajar en equipo.</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="about border-01-all border-rd-5">
              <h4>Sobre Mi: </h4> <p>Actualmente trabajo como desarrollador de software para Tata Consultancy Service, me apasiona el desarrollo tanto front como back, creo que es importante siempre tener en cuenta una buena experiencia para el usuario, actualmente trabajo con angular,
              pero me inclino por ReactJs, estoy constantemente aprendiendo nuevas tecnologias, ultimamente estoy con firebase (storage, functions),
                tambien y no menos importante me encanta el desarrollo de video juegos, soy autodidacta, me gustan los rpg, los gatos, cultura pop 80' 90'.</p>
            </Grid>
            <Grid item xs={12} className="experience border-01-all border-rd-5">
              <h4>Empresas en las que he trabajado, clientes, y roles</h4>
              <Grid container className="container-experience" xs={12}>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Agesic</h5>
                  <h6>Desarrollador - Consalud</h6>
                  <p>2015</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Social Eyes</h5>
                  <h6>Desarrollador - Group Loyale</h6>
                  <p>2015</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Toteat</h5>
                  <h6>Desarrollador FullStack</h6>
                  <p>2016</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Afex</h5>
                  <h6>Desarrollador</h6>
                  <p>2016 - 2017</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Nectia</h5>
                  <h6>Desarrollador Front - Banco Security / Enel</h6>
                  <p>2017 - 2018</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Infocred / Image Maker</h5>
                  <h6>Desarollador - Banco de Chile</h6>
                  <p>2018 - 2019</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Desafio Latam</h5>
                  <h6>Ayudante Docente - Desarollo Web / Desarollo de video juegos</h6>
                  <p>2019</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Go Cloud</h5>
                  <h6>Desarrollador FullStack</h6>
                  <p>2019</p>
                </Grid>
                <Grid item xs={2} className="experience-item border-01-all border-rd-5">
                  <h5>Tata Consultancy Service</h5>
                  <h6>Banco Santander</h6>
                  <p>2019 - Actualidad</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <p>Pagina creada por Mauricio Ross</p>

        </Grid>
        {/* <span className="Neon"> <h1 className="label" data-text="Mauricio Ross Arevalo">Mauricio Ross Arevalo</h1></span>
              <Link className="Neon-Button" to="/iam" >Entrar</Link> */}
        {/* </div> */}
      </div>
    )
  }
}
