import "./style.css";
import { Movie } from "types/movie";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/requests";

type Props = {
  title: String,
  image: String
}

function FormMovie({title, image} : Props) {
  const navigate = useNavigate();

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();

     const nome = (event.target as any).title.value;
     const url = (event.target as any).image.value;

 

     const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'POST',
      url: '/movies/posts',
      data: {
        title: nome,
        image: url
      }
    }
      axios(config).then(response =>{
        navigate("/")
      });
  }
  return (

      <form className="fmovie-container" onSubmit={handleSubmit}>
        <div className="fmovie-title">
          <h1 className="title">Cadastro de Filme</h1>
        </div>
        <div className="fmovie-input-name">
          <label className="label-form">Nome do Filme</label>
          <input className="fmovie-card-name" type="text" id="title" />
        </div>

        <div className="fmovie-input-url">
          <label className="label-form">URL da foto</label>
          <input className="fmovie-card-name" type="text" id="image" />
        </div>

        <div className="fmovie-buttons-container">
          <Link to="/">
            <button className="cancel">Cancelar</button>
          </Link>

          <button className="salvar" type="submit"> Salvar</button>

        </div>
      </form> 
 
    
  );
}


export default FormMovie;
