import React, {useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartAction";
import CheckOutSteps from "../components/CheckOutSteps";
const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postalCode,country}))
    history.push('/payment');
  };
  return (
    <FormContainer>
    <CheckOutSteps steps1 steps2/>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3" controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="postalCode"
            value={postalCode}
            required
            onChange={(e) => setPostCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
