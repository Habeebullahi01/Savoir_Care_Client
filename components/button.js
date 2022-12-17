const AddToCart = ({ className }) => {
  return (
    <>
      <button
        className={`p-2 bg-pink-400 font-semibold hover:bg-slate-300 rounded-xl ${className}`}
      >
        Add to Cart
      </button>
    </>
  );
};

module.exports = {
  AddToCart,
};
