import React, { useState, Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as countryAction from "../redux/actions/CountryAction";
import _ from 'lodash';
import { undefinedOrNull,notUndefinedAndNull } from "../utils/Validation";


  export default function CountryList(props) {
    let store = useSelector(connectToStore, shallowEqual);
    let dispatch = useDispatch();
    let [countries, setCountries] = useState([]);
    let [countriesDropdown, setCountriesDropdown] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [selectedRegion, setSelectedRegion] = useState("");
    let [selectValue, setSelectValue] = useState("");

    useEffect(()=>{
      loadCountryList()
    },[]);
  
    useEffect(()=>{
      if(notUndefinedAndNull(store.countries)){
        setCountries(store.countries);
        setCountriesDropdown(store.countries)
      }
    },[store.countries]);

    useEffect(()=>{
      let countryArray = []
      if(notUndefinedAndNull(store.countryDetails)){
        countryArray.push(store.countryDetails)
      setCountries(countryArray);
      setSelectedRegion(store.countryDetails.name)
      }
    },[store.countryDetails]);

   
function loadCountryList(){
  dispatch( countryAction.getCountries());

}
  

  function handleSelect ( event ){
    let selectedObj = event.target.value
    dispatch( countryAction.getCountryById(selectedObj));
    
  };

  

  
  function arrayBufferToBase64 ( buffer ){
    if(notUndefinedAndNull(buffer)){
    var binary = '';
    var bytes = new Uint8Array( buffer.data );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    let imgSrc = window.btoa( binary );
    return(
    <img src = {`data:image/png;base64,${imgSrc}`} alt = "ddd"/>
    )  
    }
}

    // const { isLoading, countries } = this.state;
    // if (isLoading) return <Loader/>;
    return (
      <div>
     <div className="country-drop">   
     Select Country   
     <select 
        value={selectedRegion} 
        onChange={(e)=>handleSelect(e)}  
        className = "form-control">
      <option value="">Select Option</option>
      {countriesDropdown.map((e, key) => {
              return <option key={key} value={e._id}>{e.name}</option>;
          })}
      </select>
      <button  className="btn btn-primary list-btn" onClick={loadCountryList} type="button">Load Country List</button>
      </div> 
        <main className="country">
          {countries
            .map((country) => {
              return (
                <ul key = {country._id}>
                  <li className = "countryTitle">{country.name}</li>
                  <li>
                   {arrayBufferToBase64(country.photo ? country.photo.data : null)}
                  </li>
                  <div className = "countryContent"> 
                    <li>
                    </li>
                    <li>
                      <strong>Region:</strong> {country.contigent}
                    </li>
                    <li>
                      <strong>Rank:</strong> {country.rank}
                    </li>
                  </div>
                </ul>
              );
            })}
        </main>
      </div>
    );
          }

  function connectToStore(store) {
  return {
   
    loading: store.country.loading,
    countries: store.country.countries,
    country: store.country.country,
    countryDetails : store.country.countryDetails
  }
}

