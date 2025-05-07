// import React, { useState } from "react";
// import { MainApi } from "../Api/Api";
// import { Button, Form, InputGroup } from "react-bootstrap";

// export default function SearchBar() {
//   const [query, setQuery] = useState(""); // State to store the search query
//   const [results, setResults] = useState([]); // State to store API results

//   const handleSearch = async () => {
//     try {
//       const response = await MainApi.get(`/search`, {
//         params: { q: query }, // Pass the search query as a parameter
//       });
//       setResults(response.data); // Update results with API response
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };

//   return (
//     <div>
//       <InputGroup className="mb-3">
//         <Form.Control
//           type="text"
//           placeholder="Search..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)} // Update query state
//         />
//         <Button variant="primary" onClick={handleSearch}>
//           Search
//         </Button>
//       </InputGroup>

//       {/* Display search results */}
//       <div>
//         {results.length > 0 ? (
//           <ul>
//             {results.map((item, index) => (
//               <li key={index}>{item.name}</li> // Adjust based on API response structure
//             ))}
//           </ul>
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// }