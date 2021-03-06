﻿/// <reference path='../definitions/references.d.ts' />
var Spirograph;
(function (Spirograph) {
    (function (Interaction) {
        'use strict';

        function changeFixedGear(svgContainer, newGearType, newGearOptions) {
            d3.selectAll('.gear.fixed').remove();

            if (newGearType == 2 /* Beam */) {
                var shapeToMake = Spirograph.Shapes.Beam;
            } else if (newGearType == 0 /* Gear */) {
                var shapeToMake = Spirograph.Shapes.Gear;
            } else if (newGearType == 1 /* RingGear */) {
                var shapeToMake = Spirograph.Shapes.RingGear;
            }

            var fixedGear = svgContainer.append("g").attr("class", "gear ring-gear fixed color-changing" + (Spirograph.isInDarkMode ? ' dark' : '')).attr("transform", "translate(" + Spirograph.getSvgCenterX() + "," + Spirograph.getSvgCenterY() + ")").style('visibility', Spirograph.areGearsVisible ? 'visible' : 'hidden').datum(newGearOptions).append("path").attr("d", shapeToMake);

            return fixedGear;
        }
        Interaction.changeFixedGear = changeFixedGear;
    })(Spirograph.Interaction || (Spirograph.Interaction = {}));
    var Interaction = Spirograph.Interaction;
})(Spirograph || (Spirograph = {}));
//# sourceMappingURL=change-fixed-gear.js.map
