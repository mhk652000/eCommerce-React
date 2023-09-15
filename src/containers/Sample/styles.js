import { Colors } from "../../config";

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: Colors.WhiteOpacity,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    shadowViewContainer: {
        display: "flex",
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center',
        margin: "20px",
        padding: "20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    ShadowViewSample: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    SampleViewElevation: {
        elevation: 5
    },
    image: {
        width: "100%",
        height: "100%",
    }
}

export default styles