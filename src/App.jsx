import "./App.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Result from "./components/result/Result";
import Form from "./components/form/Form";
import NotFound from "./components/notfound/NotFound";

const App = () => {
  //                  *section paginate*
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const userData = axios
      .get("http://127.0.0.1:8080/getall")
      .then((response) => setUsers(response.data))
      .catch((e) => {
        console.log(e);
      });
    console.log(userData);
  }, []);

  return (
    <>
      <Form
        handleSerch={Serch}
        handlePage={setPageNumber}
        handleUser={allUsers}
      />

      <div className="App">
        <Result list={displayUsers} />

        {users.length === 0 && loading === false && <NotFound />}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          breakLabel="..."
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
    //                *button setUsers*
  );
  function allUsers() {
    axios
      .get("http://127.0.0.1:8080/getall")
      .then((response) => setUsers(response.data))
      .catch((e) => {
        console.log(e);
      });
  }

  //                      *section serch*
  async function Serch(name, family, age, work) {
    setLoading(false);
    axios
      .get(
        `http://127.0.0.1:8080/serch?name=${name}&family=${family}&age=${age}&work=${work}`
      )
      .then((response) => setUsers(response.data))
      .catch((e) => console.log(e));
  }
};
export default App;
