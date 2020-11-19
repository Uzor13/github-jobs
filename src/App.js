import React, {useState} from 'react';
import useFetchJobs from "./useFetchJobs";
import {Col, Container, Row, Alert} from "react-bootstrap";
import Job from "./components/Job";
import './App.css';
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";
import './components/SearchForm.css';
import LocationSearch from "./components/LocationSearch";
import FullTime from './components/FullTime';
import LocationCheck from "./components/LocationCheck";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


function App() {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);

    const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

    const handleParamChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams(prevState => {
            return {
                ...prevState,
                [param]: value
            }
        })
    }
    return (
        <Container>
            <h1 className='title'>Github <span>Jobs</span></h1>
            <div className='descSearch'>
                <SearchForm className='input' style={{width: '790px'}} params={params} onParamsChange={handleParamChange}/>
            </div>
            <Row>
                <Col>
                    <FullTime params={params} onParamsChange={handleParamChange}/>
                    <LocationSearch params={params} onParamsChange={handleParamChange}/>
                    <LocationCheck params={params} onParamChange={handleParamChange}/>
                </Col>
                <Col xs={8}>
                    <div className='d-flex justify-content-center'>
                        {loading && <Loader
                            type="Puff"
                            color="#1E86FF"
                            height={100}
                            width={100}
                            className='align-content-center'
                        />}
                    </div>

                    {error && <Alert variant="danger">
                        <Alert.Heading>
                            {error.message}
                        </Alert.Heading>
                            <p>Check your internet connection and try refreshing!</p>
                    </Alert>}
                    {jobs.map(job => {
                        return <Job key={job.id} job={job}/>
                    })}
                </Col>
            </Row>

            <JobsPagination page={page}
                            setPage={setPage}
                            hasNextPage={hasNextPage}/>
        </Container>
    );
}

export default App;
