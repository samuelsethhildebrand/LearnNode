function Address(address1, address2, city, state, zip)
{
    this._address1 = address1;
    this._address2 = address2;
    this._city = city;
    this._state = state;
    this._zip = zip;

    return {    Address1: this._address1,
                Address2: this._address2,
                City: this._city,
                State: this._state,
                Zip: this._zip
    }
}

module.exports = Address;