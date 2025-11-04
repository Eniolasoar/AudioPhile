import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CardContext";

interface Order {
  id: string;
  customer: any;
  shipping: any;
  items: Array<{ id: number; name: string; price: number; quantity: number; image: string }>;
  totals: { subtotal: number; shipping: number; vat: number; grandTotal: number };
}

const ConfirmationModal: React.FC<{ order: Order; onClose: () => void }> = ({ order, onClose }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const othersCount = Math.max(0, order.items.length - 1);

  const handleBackHome = () => {
    clearCart(); // clear cart after successful order
    onClose();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-[16px] w-[90%] max-w-2xl p-6 md:p-8">
        <div className="flex flex-col items-start gap-6">
          {/* header */}
          <img src="/assets/checkout/icon-order-confirmation.svg" alt="order" className="w-12 h-12" />
          <h3 className="text-2xl font-bold uppercase">THANK YOU<br></br> FOR YOUR ORDER</h3>
          <p className="text-[#808080]">You will receive an email confirmation shortly.</p>

          {/* inner card */}
          <div className="flex flex-col md:flex-row w-full  mt-4">
            {/* left list */}
            <div className="flex-1 bg-gray-1 rounded-md p-4">
              <div className="flex items-center gap-4">
                <img src={order.items[0].image} alt={order.items[0].name} className="w-16 h-16 object-contain" />
                <div>
                  <div className="text-black font-semibold text-[15px] leading-[25px]">{order.items[0].name}</div>
                  <div className="text-[#808080] text-[14px]">${order.items[0].price.toLocaleString()}</div>
                </div>
                <div className="ml-auto font-bold text-[#707070] !align-top">x{order.items[0].quantity}</div>
              </div>

              {othersCount > 0 && (
                <>
                  <hr className="my-4 border-gray-300" />
                  <div className="text-sm text-gray-600">and {othersCount} other item(s)</div>
                </>
              )}
            </div>

            {/* right total */}
            <div className="w-full md:w-[240px] bg-black rounded-md p-4 flex items-center justify-start">
              <div className="pl-2">
                <div className="text-[#808080] text-xs">GRAND TOTAL</div>
                <div className="text-white font-bold">${order.totals.grandTotal.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <button onClick={handleBackHome} className="button-primary w-full py-3">
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
