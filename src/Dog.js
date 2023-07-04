export default function Dog() {
    const test = [
        {
            id: 1,
            name: "Lorem",
        },
        {
            id: 2,
            name: "ipsum"
        }]
    return (
        <>
            <h1> Id is : ({test[0].id}) And the name is : {test[0].name} Dummy</h1>
        </>
    )
}