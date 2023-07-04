import Props from "./Props";

export default function PropCard() {
    return (
        <>
            <div className="col-md-4 d-flex">
                <Props
                    img={require("../../images/model-1.jpg")}
                    price="69"
                    btn = "Next"
                />
            </div>
            <div className="col-md-4 d-flex">
                <Props
                    img={require("../../images/model-2.jpg")}
                    price="96"
                    btn = "View Details"
                />
            </div>
            <div className="col-md-4 d-flex">
                <Props
                    img={require("../../images/model-3.jpg")}
                    price="23"
                    btn = "Read More" 
                />
            </div>
        </>
    )
}