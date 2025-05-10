import React, { useState } from "react";
import { MainApi } from "../Api/Api";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchLogic() {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const handleSearch = async (products) => { 
    try {
      const response = await MainApi.get(`/products/search?q=${products.title}`, {
        params: { q: query }
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="light" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <div>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}