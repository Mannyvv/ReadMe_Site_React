import React, { useState } from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom"; 
import { setSearchTerm } from "../features/Search/searchSlice";


const SearchInput = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setTerm(event.target.value);
  };

  const RunSearch = () => {
    
    dispatch(setSearchTerm(term))
    const searchTermValue = encodeURIComponent(term)
    navigate(`/SearchPage/${searchTermValue}`); 
  };

 const handleEnterKey = (event) => {
  if(event.key === "Enter"){
    RunSearch()
  }
 }
  

  return (
    <div className="SearchInputButton">
      <input className="SearchInput" type="text" value={term} placeholder="Search For Books" onChange={handleSearch} onKeyPress={handleEnterKey} />
      <Button onClick={RunSearch} color="info">Search</Button>
    </div>
  );
};

export default SearchInput;
