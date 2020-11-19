import React from 'react';
import {Form, Col} from 'react-bootstrap';

function LocationCheck({params, onParamsChange}) {

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Check onChange={onParamsChange}
                                value={params.location}
                                name='remote'
                                id='remote'
                                label='Remote'
                                type='checkbox'
                    />
                    <Form.Check onChange={onParamsChange}
                                value={params.location}
                                name='remote'
                                id='remote'
                                label='New York'
                                type='checkbox'
                    />
                    <Form.Check onChange={onParamsChange}
                                value={params.location}
                                name='remote'
                                id='remote'
                                label='London'
                                type='checkbox'
                    />
                    <Form.Check onChange={onParamsChange}
                                value={params.location}
                                name='remote'
                                id='remote'
                                label='Amsterdam'
                                type='checkbox'
                    />
                    <Form.Check onChange={onParamsChange}
                                value={params.location}
                                name='remote'
                                id='remote'
                                label='Berlin'
                                type='checkbox'
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default LocationCheck;