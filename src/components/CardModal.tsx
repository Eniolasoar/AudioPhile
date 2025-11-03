// components/CartModal.tsx
import React from "react";
import CounterButton from "./CounterButton";
import { useCart } from "../../context/CardContext";

const CartModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { cartItems, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex justify-start items-start"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] mt-24 ml-auto mr-auto sm:ml-[calc(100%-420px)] p-6 w-[90%] sm:w-[400px] shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h6 className="text-lg font-bold uppercase tracking-wide">
            Cart ({cartItems.length})
          </h6>
          <button
            onClick={clearCart}
            className="text-gray-400 text-sm underline hover:text-gray-600 transition"
          >
            Remove all
          </button>
        </div>

        {/* Items */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-6">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto">
            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex justify-center items-center">
                    <img
                      src={`/assets/cart/image-${item.product.slug}.jpg`}
                      alt={item.product.name}
                      className="w-12 object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <p className="font-bold text-sm uppercase">
                      {item.product.name.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className="text-gray-500 text-sm">
                      ${item.product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <CounterButton
                  value={item.quantity}
                  onChange={(val) => updateQuantity(item.product.id, val)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between items-center mt-8 mb-6">
          <p className="uppercase text-gray-500 tracking-wider">Total</p>
          <h6 className="font-bold text-lg">${total.toLocaleString()}</h6>
        </div>

        {/* Checkout */}
        <button className="button-primary w-full">Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
