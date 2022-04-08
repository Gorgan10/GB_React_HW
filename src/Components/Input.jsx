export const Input = (props) => {
    return <input placeholder="Write message" type="text" value={props.value} onChange={props.change} />
}