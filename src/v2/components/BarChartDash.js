import { Bar } from "react-chartjs-2";

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        data : [12,19,3,5,2,1],
        backgroundColor: [
            "#00000",
            "#01966B",
            "#FFCC91",
        ],
        borderColor: [
            "#00000",
            "#01966B",
            "#FFCC91",
        ],
        borderWidth: 1
    }]
}
function BarChartDash(){

    return(

        <Bar data = {data} />
    );
}

export default BarChartDash;