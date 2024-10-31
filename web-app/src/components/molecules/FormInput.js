export default function FormInput({ labelText, name, id, type, required }) {
    return (
        <fieldset className='flex'>
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} name={name} required={required} />
        </fieldset>
    );
}
