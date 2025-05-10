export default function Footer() {
  return (
    <div className="bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-center mt-16">
      <div className="text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-center lg:space-y-3">
        <p>© {new Date().getFullYear()} Harold Cuenca. All rights reserved.</p>
      </div>
    </div>
  );
}
