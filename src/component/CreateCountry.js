import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import * as countryAction from "../redux/actions/CountryAction";
import _ from 'lodash';
import { undefinedOrNull,notUndefinedAndNull, empty } from "../utils/Validation";

class CreateCountry extends Component {
  state = {
    name: "",
    contigent: "",
    rank: "",
    photo: "",
    redirect: false,
    formData: new FormData(),
    errorMsg:"",
    fieldErrorMsg:""
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   let { country } = this.props;
   
  //   if(undefinedOrNull(this.props.country) && !undefinedOrNull(nextProps.country)){
  //     if(empty(nextProps.country._message)){
  //       this.props.history.replace("/country");
  //     }else{
  //       this.setState((state, props) => ({
  //         fieldErrorMsg : nextProps.country._message
  //       }));
  //       setTimeout(() => {
  //         this.setState((state, props) => ({
  //           fieldErrorMsg : ""
  //         }));
  //       }, 5000);
  //     }
  //   }
  //   return true;

  // }

  componentDidUpdate(prevProps, prevState){
      let { country } = this.props;
        if(notUndefinedAndNull(country) && !_.isEqual(prevProps.country, country)){
        let message = this.props.country._message;

        if(undefinedOrNull(message)){
          this.props.history.replace("/country");
        }else{
          alert("country data previously added")
        }
    }
}

  handleInput = event => {
    if(event.target.name === 'photo'){
      const file  =  event.target.files[0];
      if(( file.type == "image/png" || file.type =="image/jpg") &&(file.size < 4000000) ){
      this.state.formData.set(event.target.name, file);
      this.setState({ [event.target.name]: file });
      }else{
        document.getElementById('photo').value = "";
        this.setState((state, props) => ({
          [event.target.name]: null,
        errorMsg : "Only accept Jpg and Png formats and Max size is 4 MB"
        }));
        setTimeout(() => {
          this.setState((state, props) => ({
          errorMsg : ""
          }));
        }, 5000);
      }
    }else{
      const value =  event.target.value;
      this.state.formData.set(event.target.name, value);
      this.setState({ [event.target.name]: value });
    }
    
  };

  checkFormValidation(){
    let isValid = true;
    
    if(empty(this.state.name)){
        isValid=false
    }

    if(empty(this.state.contigent)){
        isValid=false
    }

    if(empty(this.state.rank)){
        isValid=false
    }

    if(undefinedOrNull(this.state.photo)){
        isValid=false
    }
    return isValid;
}

  handleSubmit = (event) => {
    event.preventDefault();
    let isFormValid =false;
    isFormValid = this.checkFormValidation()
    if(isFormValid){
      this.props.dispatch(countryAction.createCountry(this.state.formData));
    }else{
      this.setState((state, props) => ({
      fieldErrorMsg : "All fields are required"
      }));
      setTimeout(() => {
        this.setState((state, props) => ({
        fieldErrorMsg : ""
        }));
      }, 3000);
    }
   
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/country' />
    }
  }

  render() {
    return (
      <div>
      <form className = "imaginary-country-form container" onSubmit = {this.handleSubmit}>
      <p className="error">{this.state.fieldErrorMsg}</p>

        <h3 style={{margin: "2rem"}}>Add an  country</h3>
        <div className = "form-group">
        <label className="input-field">Name:</label>
          <input
            className = "form-control"
            type = "text"
            onChange = {this.handleInput}
            name = "name"
            minlength="3" maxlength="20"
            required
          ></input>
        </div>
        
        <div className = "form-group">
        <label className="input-field">Continent: </label>
        <select 
        className = "form-control"
        name = "contigent"
        value={this.state.contigent} 
        onChange={this.handleInput} 
      >
       <option value="">Select Option</option>
       <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
        </div>
        <div className = "form-group">
        <label className="input-field">Rank:</label>
          <input
            className = "form-control"
            type = "Number"
            onChange = {this.handleInput}
            name = "rank"
            required
          ></input>
        </div>
        <div className = "form-group">
        <label className="input-field">Country Flag</label>
          <input
            className = "form-control"
            type = "file"
            onChange = {this.handleInput}
            name = "photo"
            id = "photo"
            required
          ></input>
                <p className="error">{this.state.errorMsg}</p>
        </div>
        <div className = "form-group">
          <button  className="btn btn-primary submit-btn" type="submit">Create Country</button>
          {this.renderRedirect()}
        </div>
      </form>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
  
    loading: store.country.loading,
    countries: store.country.countries,
    country: store.country.country
  }
}
export default withRouter(connect(mapStateToProps)(CreateCountry));
