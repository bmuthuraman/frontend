import { useEffect, useState } from "react";
import { MapPin, Building2, Map, Hash, } from "lucide-react";
import { useDispatch, useSelector, } from "react-redux";
import FormInput from "../common/FormInput";
import PrimaryButton from "../common/PrimaryButton";
import { createCustomerAddressRequest } from "../../store/slices/customerAddressSlice";


const CustomerAddressForm = ({ customerId }) => {

    const dispatch = useDispatch();
    const { loading, error, success, } = useSelector((state) => state.customerAddress);
    const [formData, setFormData] = useState({
        customerId: customerId || "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        addressType: "Permanent",
    });

    /*
    |--------------------------------------------------------------------------
    | Update customerId when customer changes
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (customerId) {
            setFormData((previous) => ({ ...previous, customerId, }));
        }
    }, [customerId]);

    /*
    |--------------------------------------------------------------------------
    | Input Change
    |--------------------------------------------------------------------------
    */

    const handleChange = ( event ) => {

        const { name, value, } = event.target;


        setFormData(
            (previous) => ({
                ...previous, [name]: value,
            })
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Submit
    |--------------------------------------------------------------------------
    */

    const handleSubmit = (
        event
    ) => {

        event.preventDefault();


        const request = {

            customerId:
                Number(
                    formData.customerId
                ),

            addressLine1:
                formData.addressLine1.trim(),

            addressLine2:
                formData.addressLine2.trim() ||
                null,

            city:
                formData.city.trim(),

            state:
                formData.state.trim(),

            postalCode:
                formData.postalCode.trim(),

            country:
                formData.country,

            addressType:
                formData.addressType,
        };


        console.log(
            "ADDRESS REQUEST:",
            request
        );


        dispatch(
            createCustomerAddressRequest(
                request
            )
        );
    };


    /*
    |--------------------------------------------------------------------------
    | Success
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (success) {

            setFormData(
                (previous) => ({
                    ...previous,

                    addressLine1: "",
                    addressLine2: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: "India",
                    addressType: "Permanent",
                })
            );

        }

    }, [success]);


    return (
        <form
            onSubmit={handleSubmit}
        >

            <div className="row">

                {/* Address Line 1 */}

                <div className="col-12">

                    <FormInput
                        label="Address Line 1"
                        name="addressLine1"
                        value={
                            formData.addressLine1
                        }
                        placeholder="Enter your address"
                        onChange={
                            handleChange
                        }
                        icon={MapPin}
                    />

                </div>


                {/* Address Line 2 */}

                <div className="col-12">

                    <FormInput
                        label="Address Line 2"
                        name="addressLine2"
                        value={
                            formData.addressLine2
                        }
                        placeholder="Apartment, building, landmark"
                        onChange={
                            handleChange
                        }
                        icon={Building2}
                    />

                </div>


                {/* City */}

                <div className="col-12 col-md-6">

                    <FormInput
                        label="City"
                        name="city"
                        value={
                            formData.city
                        }
                        placeholder="Enter city"
                        onChange={
                            handleChange
                        }
                        icon={Map}
                    />

                </div>


                {/* State */}

                <div className="col-12 col-md-6">

                    <FormInput
                        label="State"
                        name="state"
                        value={
                            formData.state
                        }
                        placeholder="Enter state"
                        onChange={
                            handleChange
                        }
                        icon={Map}
                    />

                </div>


                {/* Postal Code */}

                <div className="col-12 col-md-6">

                    <FormInput
                        label="Postal Code"
                        name="postalCode"
                        value={
                            formData.postalCode
                        }
                        placeholder="Enter postal code"
                        onChange={
                            handleChange
                        }
                        icon={Hash}
                    />

                </div>


                {/* Country */}

                <div className="col-12 col-md-6">

                    <div className="mb-4">

                        <label
                            htmlFor="country"
                            className="form-label reen-register-label"
                        >
                            Country
                        </label>

                        <select
                            id="country"
                            name="country"
                            value={
                                formData.country
                            }
                            onChange={
                                handleChange
                            }
                            className="form-select reen-input"
                        >

                            <option value="India">
                                India
                            </option>

                            <option value="United States">
                                United States
                            </option>

                            <option value="United Kingdom">
                                United Kingdom
                            </option>

                            <option value="Canada">
                                Canada
                            </option>

                        </select>

                    </div>

                </div>


                {/* Address Type */}

                <div className="col-12 col-md-6">

                    <div className="mb-4">

                        <label
                            htmlFor="addressType"
                            className="form-label reen-register-label"
                        >
                            Address Type
                        </label>

                        <select
                            id="addressType"
                            name="addressType"
                            value={
                                formData.addressType
                            }
                            onChange={
                                handleChange
                            }
                            className="form-select reen-input"
                        >

                            <option value="Permanent">
                                Permanent
                            </option>

                            <option value="Communication">
                                Communication
                            </option>

                            <option value="Residential">
                                Residential
                            </option>

                            <option value="Office">
                                Office
                            </option>

                        </select>

                    </div>

                </div>


                {/* Error */}

                {error && (

                    <div className="col-12">

                        <div className="alert alert-danger">
                            {error}
                        </div>

                    </div>

                )}


                {/* Success */}

                {success && (

                    <div className="col-12">

                        <div className="alert alert-success">
                            Address created successfully.
                        </div>

                    </div>

                )}


                {/* Submit */}

                <div className="col-12">

                    <div className="d-flex justify-content-end">

                        <div className="reen-address-submit">

                            <PrimaryButton
                                type="submit"
                                disabled={
                                    loading ||
                                    !customerId
                                }
                            >

                                {loading
                                    ? "Saving..."
                                    : "Save Address"}

                            </PrimaryButton>

                        </div>

                    </div>

                </div>

            </div>

        </form>
    );
};


export default CustomerAddressForm;