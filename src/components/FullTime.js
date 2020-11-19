import React from 'react';
import {Form, Col} from 'react-bootstrap';

function FullTime({params, onParamsChange}) {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Check onChange={onParamsChange}
                                value={params.full_time}
                                name='full_time'
                                id='full-time'
                                label='Full Time'
                                type='checkbox'
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}

export default FullTime;