import React, { useEffect, useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, Link } from 'react-router-dom';
import styled from "styled-components";

const SearchBar = ({rec, setRec}) => {

    let history = useHistory();
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(); 
    //we're creating this query constant because with only the search constant, the useEffect runs everytime you write something in the search bar, which in turn calls the api that many times. This is not good because there's a limit to how many times you can even call an external api and your code will show errors

    const getJobs = async () => {
        const response = await fetch(`http://127.0.0.1:8000/joblisting/?job_topic=${query}`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }); 
        const data = await response.json();
        setRec(data);
        console.log(data);
        console.log(rec);
    }

    useEffect(() => {
        getJobs();
    }, [query]);

    const searchedItem = event => {
        setSearch(event.target.value);
    }

    const getSearch = event => {
        event.preventDefault(); 
        //this prevents the page from getting refreshed everytime you submit the form because that's the default action
        setQuery(search);
        setSearch('');
        history.push(`/search`)
    }

    return (
        <div>
            <Form onSubmit={getSearch} style={{width: '35vw', margin: 'auto'}}>
                <InputGroup>
                    <SearchInput className="search-bar" type="text" value={search} onChange={searchedItem} placeholder="Search by field"></SearchInput>
                    
                    <InputGroup.Append>
                    <Link to="/search">
                        <Button variant="secondary" onClick={getSearch}><i class="fa fa-search" aria-hidden="true"></i></Button>
                        </Link>
                    </InputGroup.Append>
                    
                </InputGroup>
            </Form>
        </div>
    );
};


export default SearchBar;

const SearchInput = styled(Form.Control) `
    padding: 5px 20px;
    margin: auto;
`