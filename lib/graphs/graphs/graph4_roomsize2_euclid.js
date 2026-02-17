var layout = {
    // height: 700,
    // width: 700,
    showlegend: false,
    autosize: true,
    scene: {
        aspectratio: {
            x: 1,
            y: 1,
            z: 1
        },
        camera: {
            center: {
                x: 0,
                y: 0,
                z: 0
            },
            eye: {
                x: 1.5,
                y: 1.5,
                z: 1.5
            },
            up: {
                x: 0,
                y: 0,
                z: 1
            }
        },
        xaxis: {
            type: 'linear',
            zeroline: false
        },
        yaxis: {
            type: 'linear',
            zeroline: false
        },
        zaxis: {
            type: 'linear',
            zeroline: false
        }
    }
};

var fig_graph4 = Plotly.newPlot('graph4-plotly', euclid_roomsize2_data, layout, config);

var gd_graph4 = document.getElementById('graph4-plotly');

// function run() {
//     rotate('scene', Math.PI / 300);
//     requestAnimationFrame(run);
// } 
// run();

// function rotate(id, angle) {
//     var eye0 = gd.layout[id].camera.eye
//     var rtz = xyz2rtz(eye0);
//     rtz.t += angle;
    
//     var eye1 = rtz2xyz(rtz);
//     Plotly.relayout(gd, id + '.camera.eye', eye1)
// }