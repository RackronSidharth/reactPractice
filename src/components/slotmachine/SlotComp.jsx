import Slot from "./Slot";

export default function SlotComp() {
    return (
        <><div className="d-flex justify-content-center align-items-center flex-column" style={{height : "600px"}}>
            <Slot val1="🍊" val2="🍊" val3="🍊" />
            <Slot val1="🍊" val2="🌦️" val3="🍊" />
        </div>
        </>
    )
}