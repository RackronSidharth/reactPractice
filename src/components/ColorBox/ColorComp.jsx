import ColorList from "./ColorList"

export default function ColorComp() {
    const colors = [
        "#CD5C5C",
        "#F08080",
        "#DFFF00",
        "#FFBF00",
        "#FF7F50",
        "#9FE2BF",
        "#6495ED",
        "#40E0D0",
        "#CCCCFF",
        "#800080",
        "#FF00FF",
        "#000080",
        "#008080"
    ]
    return (
        <>
            <ColorList colors={colors}/>
        </>
    )
}