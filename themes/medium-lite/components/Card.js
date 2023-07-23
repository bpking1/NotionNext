const Card = ({ children, headerSlot, className }) => {
  return <div className={className}>
    <>{headerSlot}</>
    <section className="shadow px-2 py-4 bg-[#f8f3e9] dark:bg-gray-800 hover:shadow-xl duration-200">
        {children}
    </section>
  </div>
}
export default Card
