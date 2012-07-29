;(function () {

    // This file contains the code to define the graphics and then
    // renders them using data randomly generated by data.js.

    $(document).ready(function() {

        // Define graphics ...

        var scatterplot = gg({
            layers: [{ geometry: 'point', mapping: { x: 'd', y: 'r' } }]
        });

        var linechart = gg({
            layers: [{ geometry: 'line', mapping: { x: 'd', y: 'r' }, color: 'red' }]
        });

        var barchart = gg({
            layers: [{ geometry: 'interval', mapping: { x: 'd', y: 'r' }, color: 'blue', width: 2 }]
        });

        var histogram = gg({
            layers: [{
                geometry: 'interval',
                mapping: { x: 'group', y: 'count', color: 'group' },
                width: 20,
                statistic: { kind: 'sum', group: 'who', variable: 'purchases' },
            }],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 },
            ]
        });

        var combined = gg({
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } },
                /*{ geometry: 'interval', mapping: { x: 'd', y: 'r' }, width: 2 },*/
            ],
        });

        var semilog = gg({
            layers: [
                { geometry: 'point', mapping: { x: 'd', y: 'r' }, size: 3 },
                { geometry: 'line', mapping: { x: 'd', y: 'r' } },
            ],
            scales: [ { type: 'log', aesthetic: 'y' } ]
        });

        var heightHistogram = gg({
            layers: [
                {
                    geometry: 'interval',
                    mapping: { x: 'bin', y: 'count' },
                    statistic: { kind: 'bin', variable: 'height', bins: 30 },
                }
            ],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
                { type: 'linear', aesthetic: 'y', min: 0 }
            ]
        });

        var heightWeightScatter = gg({
            layers: [{ geometry: 'point', mapping: { x: 'height', y: 'weight' }, size: 1 }]
        });

        var boxplot = gg({
            layers: [ {
                geometry: 'box',
                mapping: { x: 'group', y: false },
                statistic: { kind: 'box', group: 'grade', variable: 'value' },
            }],
            scales: [
                { type: 'categorical', aesthetic: 'x' },
            ]
        });

        var twoPopulations = gg({
            layers: [ {
                geometry: 'point',
                mapping: { x: 'intelligence', y: 'wisdom', color: 'group' },
                size: 2,
                alpha: .5,
            }],
        });

        // ... and render 'em

        var data = gg.sampleData;
        var w    = 300;
        var h    = 200;
        var ex   = function () { return d3.select('#examples').append('span'); }

        scatterplot.render(w, h, ex(), data.upward);
        linechart.render(w, h, ex(), data.upward);
        barchart.render(w, h, ex(), data.upward);
        histogram.render(w, h, ex(), data.purchases);
        combined.render(w, h, ex(), data.upward);
        semilog.render(w, h, ex(), data.semiLogData);
        heightHistogram.render(w, h, ex(), data.heightWeight);
        twoPopulations.render(w, h, ex(), data.twoPopulations);
        // heightWeightScatter.render(w, h, ex(), data.heightWeight);
        boxplot.render(w, h, ex(), data.forBoxPlots);

    });

})();