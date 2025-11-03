import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "../components/FormField";
import ConfirmationModal from "../components/ConfirmationModal";
import { useCart } from "../../context/CardContext";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: "e-money" | "cash";
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

const Checkout: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>({
    mode: "onBlur",
    defaultValues: {
      paymentMethod: "e-money",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const { cartItems } = useCart();

  const [orderSnapshot, setOrderSnapshot] = useState<any | null>(null);

  const onSubmit = async (data: FormValues) => {
    if (!cartItems.length) {
      // show error (example)
      setError("name", { type: "manual", message: "Cart is empty" });
      return;
    }

    // Basic e-Money validation if selected
    if (data.paymentMethod === "e-money") {
      if (!/^\d+$/.test(data.eMoneyNumber || "")) {
        setError("eMoneyNumber", { type: "manual", message: "Wrong format" });
        return;
      }
      if (!/^\d+$/.test(data.eMoneyPin || "")) {
        setError("eMoneyPin", { type: "manual", message: "Wrong format" });
        return;
      }
    }

    // Create a simple order snapshot for the confirmation modal.
    const order = {
      id: `ORD-${Date.now()}`,
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      shipping: {
        address: data.address,
        zip: data.zip,
        city: data.city,
        country: data.country,
      },
      items: cartItems.map((c) => ({
        id: c.product.id,
        name: c.product.name,
        price: c.product.price,
        quantity: c.quantity,
        image: `/assets/cart/image-${c.product.slug}.jpg`,
      })),
      totals: {
        subtotal: total,
        shipping: 50, // example flat shipping
        vat: Math.round(total * 0.2), // example 20% VAT
        grandTotal: total + 50 + Math.round(total * 0.2),
      },
    };

    // TODO: send order to backend (Convex) + send email using Resend/Nodemailer.
    // For now show confirmation modal:
    setOrderSnapshot(order);
    setIsModalOpen(true);
  };
  const cleanProductName = (name: string) =>
    name.replace(/earphones|headphones|speaker/gi, "").trim();

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  return (
    <main className="min-h-screen bg-[#FAFAFA] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => history.back()}
          className="text-[0.875rem] uppercase text-gray-700 my-6 inline-block ml-[5.2%]"
        >
          {" "}
          Go Back{" "}
        </button>
        <div className="flex flex-col lg:flex-row gap-8 w-[90%] mx-auto ">
          {/* FORM SECTION */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-2 space-y-6 bg-white p-8 rounded-md w-[60%]"
          >
            <h3
              id="checkout-heading"
              className="text-2xl font-bold uppercase mb-6"
            >
              {" "}
              Checkout{" "}
            </h3>

            {/* Billing Details */}
            <section className="space-y-4">
              <h2 className="subtitle uppercase text-sm text-gray-500 mb-4">
                Billing Details
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="Name"
                  placeholder="Alexei Ward"
                  registration={register("name", {
                    required: "Name is required",
                  })}
                  error={errors.name}
                />
                <FormField
                  label="Email Address"
                  placeholder="alexei@mail.com"
                  type="email"
                  registration={register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email}
                />
                <FormField
                  label="Phone Number"
                  placeholder="+1 202-555-0136"
                  registration={register("phone", {
                    required: "Phone is required",
                  })}
                  error={errors.phone}
                  className="md:col-span-1"
                />
              </div>
            </section>

            {/* Shipping Info */}
            <section className="space-y-4">
              <h2 className="subtitle uppercase text-sm text-gray-500 mb-4">
                Shipping Info
              </h2>
              <FormField
                label="Address"
                placeholder="1137 Williams Avenue"
                registration={register("address", {
                  required: "Address is required",
                })}
                error={errors.address}
                className="md:col-span-1"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  label="ZIP Code"
                  placeholder="10001"
                  registration={register("zip", {
                    required: "ZIP code is required",
                  })}
                  error={errors.zip}
                  className="md:col-span-1"
                />
                <FormField
                  label="City"
                  placeholder="New York"
                  registration={register("city", {
                    required: "City is required",
                  })}
                  error={errors.city}
                />   <FormField
                label="Country"
                placeholder="United States"
                registration={register("country", {
                  required: "Country is required",
                })}
                error={errors.country}
                className="md:col-span-1"
              />
                
              </div>
           
             
            </section>

            {/* Payment Details */}
            <div className="mb-8">
              <p className="subtitle uppercase text-sm text-gray-500 mb-4">
                Payment Details
              </p>

              <div className="w-full flex justify-between">
                <p className="text-[12px] font-bold ">Payment Method</p>
                <div
                  role="radiogroup"
                  aria-label="Payment method"
                  className="flex flex-col gap-4 max-w-[309px] w-full"
                >
                  <label
                    className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer ${
                      paymentMethod === "e-money"
                        ? "border-primary"
                        : "border-[#CFCFCF]"
                    }`}
                  >
                    <input
                      {...register("paymentMethod")}
                      type="radio"
                      value="e-money"
                      className="sr-only"
                      defaultChecked
                    />
                    <span
                      aria-hidden
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "e-money"
                          ? "border-primary"
                          : "border-[#CFCFCF]"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          paymentMethod === "e-money"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      />
                    </span>
                    <div>
                      <div className="font-bold">e-Money</div>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border rounded-md cursor-pointer ${
                      paymentMethod === "cash"
                        ? "border-primary"
                        : "border-[#CFCFCF]"
                    }`}
                  >
                    <input
                      {...register("paymentMethod")}
                      type="radio"
                      value="cash"
                      className="sr-only"
                    />
                    <span
                      aria-hidden
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        paymentMethod === "cash"
                          ? "border-primary"
                          : "border-[#CFCFCF]"
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          paymentMethod === "cash"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      />
                    </span>
                    <div>
                      <div className="font-bold">Cash on Delivery</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* e-Money details shown only when e-money is selected */}
              {paymentMethod === "e-money" && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col">
                    <span className="label">e-Money Number</span>
                    <input
                      {...register("eMoneyNumber", {
                        required:
                          paymentMethod === "e-money"
                            ? "e-Money number required"
                            : false,
                        pattern: {
                          value: /^[0-9]{6,20}$/,
                          message: "Wrong format",
                        },
                      })}
                      aria-invalid={errors.eMoneyNumber ? "true" : "false"}
                      className={`mt-2 border px-3 py-3 rounded-md text-black text-[14px] font-bold
                        ${
                          errors.eMoneyNumber
                            ? "border-[#CD2C2C]"
                            : "border-[#CFCFCF]"
                        }
                        focus:outline-none focus:border-primary focus:ring-0`}
                      placeholder="238521993"
                    />
                    {errors.eMoneyNumber && (
                      <span
                        role="alert"
                        className="text-[#CD2C2C] text-xs mt-1 text-right block"
                      >
                        {errors.eMoneyNumber.message}
                      </span>
                    )}
                  </label>

                  <label className="flex flex-col">
                    <span className="label">e-Money PIN</span>
                    <input
                      {...register("eMoneyPin", {
                        required:
                          paymentMethod === "e-money"
                            ? "e-Money PIN required"
                            : false,
                        pattern: {
                          value: /^[0-9]{4,10}$/,
                          message: "Wrong format",
                        },
                      })}
                      aria-invalid={errors.eMoneyPin ? "true" : "false"}
                      className={`mt-2 border px-3 py-3 rounded-md text-black text-[14px] font-bold
                        ${
                          errors.eMoneyPin
                            ? "border-[#CD2C2C]"
                            : "border-[#CFCFCF]"
                        }
                        focus:outline-none focus:border-primary focus:ring-0`}
                      placeholder="6891"
                    />
                    {errors.eMoneyPin && (
                      <span
                        role="alert"
                        className="text-[#CD2C2C] text-xs mt-1 text-right block"
                      >
                        {errors.eMoneyPin.message}
                      </span>
                    )}
                  </label>
                </div>
              )}
            </div>

          </form>

          {/* SUMMARY SECTION */}
          <aside className="w-full lg:w-[350px] bg-white rounded-lg p-6 h-fit">
            {" "}
            <h6 className="text-lg font-bold uppercase mb-6">Summary</h6>{" "}
            <div className="space-y-4">
              {" "}
              {cartItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  {" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    <div className="w-16 h-16 bg-[var(--color-gray-1)] rounded-md flex items-center justify-center overflow-hidden">
                      <img
                        src={`/assets/cart/image-${item.product.slug}.jpg`}
                        alt={item.product.name}
                        className="w-12 h-auto object-contain"
                      />
                    </div>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="text-black font-semibold text-[15px] leading-[25px] uppercase">
                        {item.product.name}
                      </span>{" "}
                      <span className="text-[#808080] text-[14px]">
                        ${item.product.price.toLocaleString()}
                      </span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="text-sm text-gray-700 font-bold">
                    x{item.quantity}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
            <div className="mt-6 pt-6 space-y-3">
              {" "}
              <div className="flex justify-between">
                {" "}
                <span className="text-[#808080] text-[15px] uppercase">
                  Total
                </span>{" "}
                <span className="text-black font-bold">
                  ${total.toLocaleString()}
                </span>{" "}
              </div>{" "}
              <div className="flex justify-between">
                {" "}
                <span className="text-[#808080] text-[15px] uppercase">
                  Shipping
                </span>{" "}
                <span className="text-black font-bold">${50}</span>{" "}
              </div>{" "}
              <div className="flex justify-between">
                {" "}
                <span className="text-[#808080] text-[15px] uppercase">
                  VAT (INCLUDED)
                </span>{" "}
                <span className="text-black font-bold">
                  ${Math.round(total * 0.2)}
                </span>{" "}
              </div>{" "}
              <div className="flex justify-between mt-10">
                {" "}
                <span className="text-[#808080] text-[15px] uppercase">
                  GRAND TOTAL
                </span>{" "}
                <span className="text-primary font-bold">
                  ${(total + 50 + Math.round(total * 0.2)).toLocaleString()}
                </span>{" "}
              </div>{" "}
              {/* Continue to pay button */}{" "}
              <div className="mt-12">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary w-full py-3 disabled:opacity-60"
                  onClick={handleSubmit(onSubmit)}
                >
                  {" "}
                  CONTINUE TO PAY{" "}
                </button>
              </div>{" "}
            </div>{" "}
          </aside>

          {/* CONFIRMATION MODAL */}
          {isModalOpen && (
            <ConfirmationModal
              order={orderSnapshot}
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
