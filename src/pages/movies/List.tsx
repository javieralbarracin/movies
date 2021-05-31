import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card/Card';
import { Movie } from '../../models/movie';

const API = `Your api key`; //process.env.API;

// interface ListComponent{
//     data: [],
//     loading: boolean,
//     searchTerm: string,
//     error: string,
// }
export const List = () => {
    
        const [state, setState] = useState({
            data: [],
            loading: true,
            searchTerm: "",
            error: "",
          });
        
          const getMovie = async () => {
            // search
            const res = await fetch(`${ API }&s=robot`);
            const resJSON = await res.json();
            if (resJSON) {
              setState({
                data: resJSON.Search,
                loading:false,
                searchTerm:'',
                error:''
              });
            }
          };
        
          useEffect(() => {
            // const res = await fetch("../../assets/data.json");
            getMovie();
          }, []);
        
    const handleSubmit = async (e:any) => {
          e.preventDefault();
      
          if (state.searchTerm === "") {
            return setState({ ...state, error: "Please write a valid text" });
          }
      
          const response = await fetch(`${ API }&s=${ state.searchTerm }`);
          const data = await response.json();
      
          if (!data.Search) {
            return setState({ ...state, error: "There are no results." });
          }
        
        return setState({
            data: data.Search,
            loading:false,
            searchTerm:'',
            error:''
        });
    };
        
    const { data, loading } = state;

    if (loading) {
    return <div>Loading...</div>;
    }
        
    return (
        <>
            <div className="row">
            <div className="col-md-4 offset-md-4 p-4">
                <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    onChange={(e) => setState({...state, searchTerm: e.target.value })}
                    value={state.searchTerm}
                    autoFocus
                />
                </form>
                <p className="text-white">{state.error ? state.error : ""}</p>
            </div>
            </div>
            <div className="row pt-2">
            {
              data?.map((movie:Movie, i) => (
                <Card key={i} Poster={movie.Poster} Title={movie.Title}
                        Type={movie.Type} imdbID={movie.imdbID} Year={movie.Year}/>
                
                // <Card movie={ movie } key={i} />
              ))
            }
            </div>
        </>
    )
}
    