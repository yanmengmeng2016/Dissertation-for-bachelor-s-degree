/**
* The Matter.js development demo and testing tool.
*
* This demo uses MatterTools, you can see the wiki for a simple example instead:
* https://github.com/liabru/matter-js/wiki/Getting-started
*
* NOTE: For the actual example code, refer to the source files in `/examples/`.
*
* @class Demo
*/

(function() {
    var examples = [ 
        
        { name: 'Double Pendulum', id: 'doublePendulum' },
    ];

    var sourceLinkRoot = 'https://github.com/liabru/matter-js/blob/master/examples';

    for (var i = 0; i < examples.length; i += 1) {
        var example = examples[i];
        example.sourceLink = sourceLinkRoot + '/' + example.id + '.js';
        example.init = window.Example[example.id];

        if (!example.init) {
            console.warn('Example not loaded:', example.id);
        }
    }

    if (window.location.search.indexOf('compare') >= 0) {
        var compareScript = document.createElement('script');
        compareScript.src = '../js/Compare.js';
        window.MatterDemo = { examples: examples };
        document.body.append(compareScript);
        return;
    }

    var demo = MatterTools.Demo.create({
        toolbar: {
            title: 'matter-js',
            url: 'https://github.com/liabru/matter-js',
            reset: true,
            source: true,
            inspector: true,
            tools: true,
            fullscreen: true,
            exampleSelect: true
        },
        tools: {
            inspector: true,
            gui: true
        },
        inline: false,
        preventZoom: true,
        resetOnOrientation: true,
        routing: true,
        startExample: 'mixed',
        examples: examples
    });

    document.body.appendChild(demo.dom.root);

    MatterTools.Demo.start(demo);
})();
