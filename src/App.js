import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import Search from "./components/Search"
import Shelves from "./components/Shelves ";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const getAllBooks = async (setData) => {
  const res = await getAll();
  setData(res)
}

function App() {
  const [showSearchPage, setShowSearchpage] = useState(true);
  const [data, setData] = useState([])

  const handleOnClickSearch = () => {
    setShowSearchpage(!showSearchPage)
  }

  const handleShelfChange = (e, book) => {
    const updateBook = async () => {
      await update(book, e.target.value);
      getAllBooks(setData)
    }
    updateBook()
  }

  useEffect(() => {
    getAllBooks(setData)
  }, [])



  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Shelves update={handleShelfChange} data={data} />} />
        <Route path="/search" element={<Search update={handleShelfChange} data={data} onClick={handleOnClickSearch} /> } />
      </Routes>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
