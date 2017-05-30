import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';
import {ControlLabel, FormGroup, HelpBlock} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const Content = () => {
	return (
		<div className='Content'>
			<h1>Please choose your selection</h1>
			<form>
				<FormControl componentClass="select" placeholder="select size">
					<option value="">select</option>				
					<option value="1">1</option>
					<option value="2">1</option>
				</FormControl>
				<FieldGroup
				id="formControlsEmail"
				type="email"
				label="Email address"
				help='test help'
				placeholder="Enter email"
				/>
				<FieldGroup
				id="formControlsPassword"
				label="Password"
				type="password"
				/>			
		 	</form>	
		</div>	
	)
}

export default Content;
