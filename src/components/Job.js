import React, {useState} from 'react';
import {Button, Card, Collapse} from "react-bootstrap";
import './Job.css';
import ReactMarkdown from "react-markdown";
import formatDistance from 'date-fns/formatDistance';

function Job({job}) {
    const [open, setOpen] = useState(false);
    return (
        <Card className='shadow mb-3'>
            <Card.Body>
                <div className='d-flex'>
                    <div className="mr-5">
                        <img className='d-none d-md-block'
                             style={{width: '200px', height: '100px'}}
                             src={job.company_logo} alt={job.company}/>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div>
                                <h3 className='jobCompany'>{job.company}</h3>
                            </div>
                            <Card.Title className='jobTitle'>
                                {job.title}
                            </Card.Title>
                            <Card.Subtitle className='text-muted mb-2'>
                                <div className='jobType'>
                                    {job.type}
                                </div>
                            </Card.Subtitle>
                            <div className='d-flex mt-3' style={{color: '#B9BDCF'}}>
                                <div className='mr-3'>
                                    <i className='fas fa-globe-europe'/> {job.location}
                                </div>
                                <div>
                                    <i className='fas fa-clock'/> {formatDistance(new Date(job.created_at), new Date(), {addSuffix: true})}
                                </div>
                            </div>
                            <div className='mt-4' style={{wordBreak: 'break-all'}}>
                                <ReactMarkdown source={job.how_to_apply} />
                            </div>
                            <Card.Text className='mt-3'>
                                <Button onClick={() => setOpen(prevOpen => !prevOpen)}
                                    variant='primary'>
                                    {open ? 'Hide Details' : 'View Details'}
                                </Button>
                            </Card.Text>
                            <Collapse in={open}>
                                <div className='mt-4'>
                                    <ReactMarkdown source={job.description}/>
                                </div>
                            </Collapse>

                        </div>
                    </div>

                </div>
            </Card.Body>
        </Card>
    );
}

export default Job;