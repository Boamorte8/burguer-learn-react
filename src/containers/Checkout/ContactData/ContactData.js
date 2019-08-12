import React, { Component } from 'react';

import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Esteban Salazar',
        address: {
          street: 'Calle 50A',
          zipCode: '505560',
          country: 'Colombia'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json ', order)
      .then(response => {
        console.log(response);
        this.props.history.push('/');
      }).catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({loading: false});
      });
  }

  render() {
    let form = null;
    if (this.state.loading) {
      form = <Spinner />;
    } else {
      form = (
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your mail" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="number" name="postal" placeholder="Postal Code" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
      );
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;