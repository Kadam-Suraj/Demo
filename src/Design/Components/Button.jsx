const Button = ({ children, className }) => {
    return (
        <button className={`${className} py-1 px-3 w-fit min-w-20 bg-violet-500 text-white rounded-md`}>{children}</button>
    )
};

export default Button;