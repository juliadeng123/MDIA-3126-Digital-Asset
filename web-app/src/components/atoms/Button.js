export default function Button({ ariaDisabled, type, buttonText }) {
    return (
        <button type={type} aria-disabled={ariaDisabled}>
            {buttonText}
        </button>
    );
}
