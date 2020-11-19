import React from 'react';
import {Col, Form} from 'react-bootstrap';

function LocationSearch({params, onParamsChange}) {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label
                        style={{textTransform: 'uppercase', fontWeight: '700', color: '#B9BDCF'}}>Location</Form.Label>
                    <Form.Control onChange={onParamsChange}
                                  name='location'
                                  value={params.location}
                                  type='text'
                                  placeholder='City, state, zip code or country'
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default LocationSearch;