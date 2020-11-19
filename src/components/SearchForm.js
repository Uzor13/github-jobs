import React from 'react';
import {Form, Col} from 'react-bootstrap';

function SearchForm({params, onParamsChange}) {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Control onChange={onParamsChange}
                                  name='description'
                                  value={params.description}
                                  type='text'
                                  placeholder='Title, companies, expertise or benefits'
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default SearchForm;