import React from 'react';

export default function MessageClient(props) {
  return (
    <div>
        <h2>Hello, {props.name}</h2>
        <p>We have successfully received your information and will begin processing it. Your request will be processed within 24 hours.</p>
        <br />
        <p>If you need to make any changes or have any questions, please don't hesitate to contact us.</p>
        <br />
        <p>Thank you for trusting UrpirioDev.</p>
    </div>
  )
}
