import React from "react"

import AddAddress from "../address-card/add-address"

const AddressBook: React.FC<any> = ({ customer, region }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4">
        <AddAddress region={region} />
        {/* {customer.addresses.map((address) => {
          return (
            <EditAddress region={region} address={address} key={address.id} />
          )
        })} */}
      </div>
    </div>
  )
}

export default AddressBook
