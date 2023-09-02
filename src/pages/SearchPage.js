import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../features/Search/searchSlice";
import BookCard from "../features/Search/BookCard";
import { Row, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const SearchPage = () => {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm) {
      try {
        dispatch(fetchBooks(searchTerm));
      } catch (error) {
        
        console.error("An error occurred while dispatching the action:", error);
      }
    }
  }, [searchTerm, dispatch]);

  const searchData = useSelector((state) => state.search.searchData);
  

  return (
    <Container>
      <SubHeader current="Search" />
      <Row className="ms-auto">
        {/* {searchData.map((book, index) => (

                    <BookCard book={book} />))} */}

        {searchData
          ? searchData.map((book, index) => <BookCard book={book} />)
          : null}
      </Row>
    </Container>
  );
};

export default SearchPage;
